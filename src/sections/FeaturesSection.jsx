import useScrollReveal from '../hooks/useScrollReveal';

const features = [
  {
    title: 'Smart Data Ingestion',
    desc: 'Drop in any CSV. AutoML auto-detects data types, identifies ~50 missing-value patterns, and parses dates — no manual preparation needed.',
    delay: '',
    icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>,
  },
  {
    title: 'Automated EDA',
    desc: 'Distributions, outliers, correlations, class balance, and even typo detection — all computed automatically before a single model is trained.',
    delay: 'reveal-d1',
    icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>,
  },
  {
    title: 'Adaptive Preprocessing',
    desc: 'Pipelines that adapt to each model family. Tree models get different encoding than linear ones. Every decision is logged for full transparency.',
    delay: 'reveal-d2',
    icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>,
  },
  {
    title: 'Optuna-Powered Training',
    desc: '75 optimization trials across 20+ algorithms with automatic hyperparameter tuning. Overfit models are rejected before they reach your final results.',
    delay: '',
    icon: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></>,
  },
  {
    title: 'Generalization-First Selection',
    desc: "Models aren't ranked by accuracy alone. A 9-point stability framework rejects overfitters and picks the model that will work on real-world data.",
    delay: 'reveal-d1',
    icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,
  },
  {
    title: 'Rich Visualizations',
    desc: 'Confusion matrices, ROC curves, feature importance charts, residual plots, and interactive prediction testing — all generated automatically.',
    delay: 'reveal-d2',
    icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
  },
];

export default function FeaturesSection() {
  const ref = useScrollReveal();

  return (
    <section id="features" className="py-32" ref={ref}>
      <div className="page-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="title-6 text-primary reveal">Everything you need.<br /><span className="text-tertiary">Nothing you don&apos;t.</span></h2>
          <p className="text-large-sz text-secondary mt-6 reveal reveal-d1">One tool replaces your entire ML pipeline — from messy CSV to deployable model.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className={`panel p-8 reveal ${f.delay}`}>
              <div className="grain grain-subtle"></div>
              <div className="relative z-[4]">
                <div className="w-10 h-10 rounded-lg bg-[#1a1a2e] flex items-center justify-center mb-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7170ff" strokeWidth="2" strokeLinecap="round">{f.icon}</svg>
                </div>
                <h3 className="title-3 text-primary mb-2">{f.title}</h3>
                <p className="text-regular-sz text-secondary">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
