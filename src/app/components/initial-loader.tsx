"use client";

import { useEffect, useRef, useState } from "react";
import ThemeImage from "@/components/ui/theme-image";

const STEPS = [
  { label: "Resolving dependencies", detail: "312 packages", time: "0.21s" },
  { label: "Compiling services", detail: "42 modules", time: "0.48s" },
  { label: "Running test suite", detail: "128 passed", time: "0.36s" },
  { label: "Health checks", detail: "api · kafka · db", time: "0.12s" },
];

const SPINNER = "⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏";
// In `next dev` the run is stretched to ~10s so the animation can be inspected;
// production builds keep the ~2s run.
const IS_DEV = process.env.NODE_ENV === "development";
const START_DELAY_MS = IS_DEV ? 400 : 250;
const STEP_MS = IS_DEV ? 2000 : 360;
const HOLD_MS = IS_DEV ? 1150 : 650;
const FADE_MS = 450;
const SEEN_KEY = "hr-boot-seen";

type Phase = "running" | "done" | "leaving" | "hidden";

export default function InitialLoader() {
  const [completed, setCompleted] = useState(0);
  const [frame, setFrame] = useState(0);
  const [phase, setPhase] = useState<Phase>("running");
  const finished = useRef(false);

  useEffect(() => {
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));
    const spinner = window.setInterval(() => setFrame((f) => (f + 1) % SPINNER.length), 80);

    const finish = (holdMs: number) => {
      if (finished.current) return;
      finished.current = true;
      window.clearInterval(spinner);
      setCompleted(STEPS.length);
      setPhase("done");
      later(() => setPhase("leaving"), holdMs);
      later(() => setPhase("hidden"), holdMs + FADE_MS);
    };

    // Returning visitors in the same session skip straight to the site.
    let seen = false;
    if (!IS_DEV) {
      try {
        seen = sessionStorage.getItem(SEEN_KEY) === "1";
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    }
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen) {
      finish(0);
    } else if (reducedMotion) {
      finish(900);
    } else {
      STEPS.forEach((_, i) => later(() => setCompleted(i + 1), START_DELAY_MS + STEP_MS * (i + 1)));
      later(() => finish(HOLD_MS), START_DELAY_MS + STEP_MS * STEPS.length);
    }

    const skip = () => finish(0);
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      window.clearInterval(spinner);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, []);

  if (phase === "hidden") return null;

  const progress = completed / STEPS.length;

  return (
    <div
      className={`initial-loader ${phase === "leaving" ? "initial-loader--leave" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={phase === "running" ? `Loading portfolio, ${Math.round(progress * 100)}% complete` : "Portfolio ready"}
    >
      <div className="boot" aria-hidden="true">
        <ThemeImage
          src="/images/logo/hr-logo.svg"
          darkSrc="/images/logo/hr-logo-dark.svg"
          alt=""
          width={271}
          height={116}
          className="boot__logo"
          priority
        />

        <div className="boot__window">
          <div className="boot__bar">
            <span /><span /><span />
            <p>hari@devx: ~/portfolio</p>
          </div>

          <div className="boot__body">
            <p className="boot__cmd">
              <span className="boot__prompt">$</span>./deploy --env=production
            </p>

            <ul className="boot__steps">
              {STEPS.map((step, i) => {
                const state = i < completed ? "done" : i === completed ? "active" : "pending";
                return (
                  <li key={step.label} className={`boot__step boot__step--${state}`}>
                    <span className="boot__icon">{state === "done" ? "✓" : state === "active" ? SPINNER[frame] : "·"}</span>
                    <span className="boot__label">{step.label}</span>
                    <span className="boot__detail">{step.detail}</span>
                    <span className="boot__leader" />
                    <span className="boot__time">{state === "done" ? step.time : ""}</span>
                  </li>
                );
              })}
            </ul>

            <p className={`boot__result ${phase === "running" ? "" : "is-visible"}`}>
              <span className="boot__ok">✓</span> Deployed <span className="boot__hash">a1f9c3e</span> → hari-devx.github.io
            </p>
          </div>

          <div className="boot__progress">
            <span style={{ transform: `scaleX(${progress})` }} />
          </div>
        </div>

        <p className="boot__hint">
          <span className="boot__hint-key">Press any key</span>
          <span className="boot__hint-touch">Tap</span> to skip
        </p>
      </div>
    </div>
  );
}
