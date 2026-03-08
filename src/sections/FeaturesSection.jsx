import { useState, useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Smart Data Ingestion',
    desc: 'Auto-detects types, finds ~50 missing-value patterns, and parses dates — zero manual prep.',
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </>
    ),
  },
  {
    num: '02',
    title: 'Automated EDA',
    desc: 'Distributions, outliers, correlations, class balance, and typo detection — all before training.',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </>
    ),
  },
  {
    num: '03',
    title: 'Adaptive Preprocessing',
    desc: 'Pipelines adapt per model family. Trees get different encoding than linear. Every decision logged.',
    icon: (
      <>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </>
    ),
  },
  {
    num: '04',
    title: 'Optuna-Powered Training',
    desc: '75 trials across 20+ algorithms. Auto-tuned hyperparameters. Overfitters rejected.',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </>
    ),
  },
  {
    num: '05',
    title: 'Generalization-First',
    desc: '9-point stability framework rejects overfitters and picks models that work on real-world data.',
    icon: (
      <>
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </>
    ),
  },
  {
    num: '06',
    title: 'Rich Visualizations',
    desc: 'Confusion matrices, ROC curves, feature importance, residual plots — all auto-generated.',
    icon: (
      <>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </>
    ),
  },
];

export default function FeaturesSection() {
  const sectionRef = useScrollReveal();
  const timelineRef = useRef(null);
  const [activeStep, setActiveStep] = useState(-1);
  const [started, setStarted] = useState(false);

  // Trigger animation when section scrolls into view
  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  // Step through each item sequentially
  useEffect(() => {
    if (!started) return;

    let step = 0;
    setActiveStep(0);

    const interval = setInterval(() => {
      step += 1;
      if (step >= steps.length) {
        clearInterval(interval);
        return;
      }
      setActiveStep(step);
    }, 700);

    return () => clearInterval(interval);
  }, [started]);

  // Progress bar fill percentage (0% at first step, 100% at last)
  const progressPct = activeStep <= 0 ? 0 : (activeStep / (steps.length - 1)) * 100;

  return (
    <section id="features" className="py-32" ref={sectionRef}>
      <div className="page-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="title-6 text-primary reveal">
            Everything you need.<br />
            <span className="text-tertiary">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-large-sz text-secondary mt-6 reveal reveal-d1">
            One tool replaces your entire ML pipeline — from messy CSV to deployable model.
          </p>
        </div>

        {/* Timeline11 Replica */}
        <div className="tl11" ref={timelineRef}>
          {/* Animated progress line */}
          <div className="tl11-line" aria-hidden="true">
            <div
              className="tl11-line-fill"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          {/* Steps grid */}
          <div className="tl11-grid">
            {steps.map((s, i) => {
              const isActive = i <= activeStep;
              const isCurrent = i === activeStep;

              return (
                <div
                  key={s.num}
                  className={`tl11-item${isActive ? ' tl11-item--active' : ''}${isCurrent ? ' tl11-item--current' : ''}`}
                >
                  {/* Icon node */}
                  <div className="tl11-node">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {s.icon}
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="tl11-content">
                    <span className="tl11-label">Step {s.num}</span>
                    <div className="tl11-sep" />
                    <h3 className="tl11-title">{s.title}</h3>
                    <p className="tl11-desc">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
