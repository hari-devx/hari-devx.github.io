"use client";

import { useEffect, useState, type CSSProperties } from "react";

const CODE_LINES = [
  "const portfolio = await build();",
  "experience.map(shipProduct);",
  "deploy({ status: 'ready' });",
];

export default function InitialLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = document.readyState === "complete" ? 1200 : 1800;
    const startedAt = Date.now();
    const dismissTimer = window.setTimeout(() => {
      setProgress(100);
      setIsLeaving(true);
      window.setTimeout(() => setIsVisible(false), 450);
    }, duration);

    const progressTimer = window.setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const nextProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(nextProgress);
      if (nextProgress === 100) window.clearInterval(progressTimer);
    }, 50);

    return () => {
      window.clearTimeout(dismissTimer);
      window.clearInterval(progressTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`initial-loader initial-loader--boot ${isLeaving ? "initial-loader--leave" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`Preparing portfolio, ${progress}% complete`}
    >
      <div className="boot-loader" aria-hidden="true">
        <div className="boot-loader__scene">
          <div className="boot-loader__halo" />
          <div className="boot-loader__laptop">
            <div className="boot-loader__screen">
              <div className="boot-loader__screen-bar">
                <span /><span /><span />
              </div>
              <div className="boot-loader__code">
                {CODE_LINES.map((line, index) => (
                  <span key={line} style={{ "--line": index } as CSSProperties}>{line}</span>
                ))}
              </div>
              <div className="boot-loader__scan" />
            </div>
            <div className="boot-loader__keyboard">
              {Array.from({ length: 24 }, (_, index) => <i key={index} />)}
            </div>
          </div>
          <div className="boot-loader__panel">
            <span className="boot-loader__panel-label">SYSTEM</span>
            <strong>ONLINE</strong>
            <i /><i /><i />
          </div>
          <span className="boot-loader__node boot-loader__node--one" />
          <span className="boot-loader__node boot-loader__node--two" />
        </div>

        <div className="boot-loader__copy">
          <p>DEVELOPER PORTFOLIO</p>
          <h1>Preparing the experience</h1>
          <div className="boot-loader__progress" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>
          <div className="boot-loader__meta">
            <span>INITIALIZING</span>
            <span>{String(progress).padStart(2, "0")}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
