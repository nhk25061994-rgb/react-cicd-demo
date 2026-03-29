import React, { useState } from "react";

const STEPS = [
  { id: 1, icon: "??", title: "Developer pushes code", desc: "git push to GitHub triggers the pipeline via webhook", color: "#6c63ff" },
  { id: 2, icon: "??", title: "Jenkins builds and tests", desc: "Lint ? Unit Tests ? Docker build ? Push image to registry", color: "#f5a623" },
  { id: 3, icon: "??", title: "Image pushed to registry", desc: "Docker image tagged with Git SHA pushed to DockerHub", color: "#e8593c" },
  { id: 4, icon: "??", title: "Manifest updated", desc: "Jenkins commits new image tag to GitOps repo", color: "#9b59b6" },
  { id: 5, icon: "??", title: "ArgoCD detects change", desc: "ArgoCD polls GitOps repo and detects drift", color: "#1abc9c" },
  { id: 6, icon: "??", title: "Deployed to Kubernetes", desc: "ArgoCD syncs manifests - pods rolling updated on cluster", color: "#2980b9" },
];

export default function App() {
  const [active, setActive] = useState(null);
  return (
    <div style={{ minHeight: "100vh", background: "#0f1117", color: "#e2e8f0", fontFamily: "system-ui, sans-serif", padding: "40px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, margin: 0, color: "#6c63ff" }}>GitHub ? Jenkins ? ArgoCD ? K8s</h1>
        <p style={{ color: "#718096", marginTop: 12 }}>End-to-end CI/CD pipeline demo</p>
      </div>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {STEPS.map((step) => (
          <div key={step.id} onClick={() => setActive(active === step.id ? null : step.id)}
            style={{ display: "flex", gap: 16, background: active === step.id ? "#1a1d2e" : "#13151f",
              border: "1px solid " + (active === step.id ? step.color : "#2d3748"),
              borderRadius: 10, padding: "16px 20px", cursor: "pointer", marginBottom: 12 }}>
            <div style={{ fontSize: 28 }}>{step.icon}</div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ background: step.color, color: "#fff", borderRadius: 4, fontSize: 11, fontWeight: 700, padding: "2px 8px" }}>STEP {step.id}</span>
                <span style={{ fontWeight: 600 }}>{step.title}</span>
              </div>
              {active === step.id && <p style={{ color: "#a0aec0", margin: 0, fontSize: 14 }}>{step.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
