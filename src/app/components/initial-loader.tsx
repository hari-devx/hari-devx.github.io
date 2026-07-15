"use client";

import { useEffect, useState } from "react";

export default function InitialLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const dismiss = () => {
      setIsLeaving(true);
      window.setTimeout(() => setIsVisible(false), 450);
    };
    const timer = window.setTimeout(dismiss, document.readyState === "complete" ? 1500 : 1900);

    return () => window.clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`initial-loader ${isLeaving ? "initial-loader--leave" : ""}`} role="status" aria-label="Loading portfolio">
      <div className="loader-scene" aria-hidden="true">
        <div className="loader-grid" />
        <div className="loader-code-card"><span>&lt;/&gt;</span><i /><i /><i /><i /></div>
        <div className="loader-hologram"><div className="loader-hologram-head"><span>SYS.ARCH</span><b>LIVE</b></div><i /><i /><i /><i /><i /></div>
        <div className="loader-laptop">
          <div className="loader-screen"><div className="loader-screen-glow" /><span>const portfolio = &#123;</span><span className="loader-code-indent">engineer: "Hariharan",</span><span className="loader-code-indent">status: "building"</span><span>&#125;;</span></div>
          <div className="loader-keyboard"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        </div>
        <div className="loader-orbit loader-orbit-one" />
        <div className="loader-orbit loader-orbit-two" />
        <div className="loader-node loader-node-one" /><div className="loader-node loader-node-two" /><div className="loader-node loader-node-three" />
      </div>
      <div className="loader-copy">
        <p className="loader-eyebrow">Engineering portfolio · 2026</p>
        <h1>Initializing systems</h1>
        <div className="loader-progress"><span /></div>
      </div>
    </div>
  );
}
