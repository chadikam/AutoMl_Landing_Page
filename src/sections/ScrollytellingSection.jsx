import useScrollReveal from '../hooks/useScrollReveal';

/* ────────────────────────────────────────────────────────────────
   STEP DATA
   ──────────────────────────────────────────────────────────────── */
const steps = [
  {
    num: '01',
    label: 'Upload your data',
    title: 'Smart Data Ingestion',
    desc: 'Drop in any CSV — AutoML auto-detects data types, identifies ~50 missing-value patterns, and parses dates. No manual preparation needed.',
    visual: 'upload',
    ingredients: ['Type Detection', 'Missing Patterns', 'Date Parsing'],
  },
  {
    num: '02',
    label: 'Explore automatically',
    title: 'Automated EDA',
    desc: 'Distributions, outliers, correlations, class balance, and even typo detection — all computed automatically before a single model is trained.',
    visual: 'explore',
    ingredients: ['Distributions', 'Outlier Detection', 'Correlation Analysis', 'Typo Detection'],
  },
  {
    num: '03',
    label: 'Preprocessing that adapts',
    title: 'Adaptive Preprocessing',
    desc: 'Pipelines adapt to each model family. Tree models get different encoding than linear ones. Every decision is logged for full transparency.',
    visual: 'preprocess',
    ingredients: ['Model-Family Aware', 'SMOTE Balancing', 'Decision Logging'],
  },
  {
    num: '04',
    label: 'Train, compare, select',
    title: 'Optuna-Powered Training',
    desc: '75 optimization trials across 20+ algorithms with automatic hyperparameter tuning. Overfit models are rejected before they reach your results.',
    visual: 'train',
    ingredients: ['Optuna HPO', 'Overfit Rejection', '9-Point Stability', 'Best Model Selection'],
  },
  {
    num: '05',
    label: 'Visualize and deploy',
    title: 'Rich Visualizations',
    desc: 'Confusion matrices, ROC curves, feature importance charts, residual plots, and interactive prediction testing — all generated automatically.',
    visual: 'visualize',
    ingredients: ['ROC / AUC', 'Feature Importance', 'Residual Plots', 'Prediction Testing'],
  },
];

/* ────────────────────────────────────────────────────────────────
   VISUAL PANELS — CSS-built mock illustrations
   ──────────────────────────────────────────────────────────────── */
function UploadVisual() {
  return (
    <div className="sv-mock">
      <div className="sv-mock-header">
        <span className="sv-mock-dot sv-mock-dot--red" />
        <span className="sv-mock-dot sv-mock-dot--yellow" />
        <span className="sv-mock-dot sv-mock-dot--green" />
        <span className="sv-mock-title">data_upload.csv</span>
      </div>
      <div className="sv-mock-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <div className="sv-upload-zone">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <span style={{ fontSize: 13, color: 'var(--color-text-tertiary)', marginTop: 8 }}>Drop your CSV here</span>
          <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)', marginTop: 2 }}>or click to browse</span>
        </div>
        <div className="sv-file-chips">
          <span className="sv-chip sv-chip--active">cancer.csv <span className="sv-chip-size">2.4 MB</span></span>
          <span className="sv-chip">iris.csv <span className="sv-chip-size">8 KB</span></span>
        </div>
      </div>
    </div>
  );
}

function ExploreVisual() {
  const bars = [72, 55, 88, 40, 65, 78, 35, 92, 60, 48];
  return (
    <div className="sv-mock">
      <div className="sv-mock-header">
        <span className="sv-mock-dot sv-mock-dot--red" />
        <span className="sv-mock-dot sv-mock-dot--yellow" />
        <span className="sv-mock-dot sv-mock-dot--green" />
        <span className="sv-mock-title">Exploratory Analysis</span>
      </div>
      <div className="sv-mock-body">
        <div className="sv-chart-grid">
          <div className="sv-chart-box">
            <span className="sv-chart-label">Feature Distribution</span>
            <div className="sv-bars">
              {bars.map((h, i) => (
                <div key={i} className="sv-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.06}s` }} />
              ))}
            </div>
          </div>
          <div className="sv-chart-box">
            <span className="sv-chart-label">Correlation Matrix</span>
            <div className="sv-heatmap">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="sv-heat-cell" style={{ opacity: 0.15 + ((i * 37 + 13) % 17) / 20 }} />
              ))}
            </div>
          </div>
        </div>
        <div className="sv-stat-row">
          <div className="sv-stat"><span className="sv-stat-num">12</span><span className="sv-stat-lbl">Features</span></div>
          <div className="sv-stat"><span className="sv-stat-num">569</span><span className="sv-stat-lbl">Samples</span></div>
          <div className="sv-stat"><span className="sv-stat-num">0</span><span className="sv-stat-lbl">Missing</span></div>
          <div className="sv-stat"><span className="sv-stat-num">3</span><span className="sv-stat-lbl">Outliers</span></div>
        </div>
      </div>
    </div>
  );
}

function PreprocessVisual() {
  return (
    <div className="sv-mock">
      <div className="sv-mock-header">
        <span className="sv-mock-dot sv-mock-dot--red" />
        <span className="sv-mock-dot sv-mock-dot--yellow" />
        <span className="sv-mock-dot sv-mock-dot--green" />
        <span className="sv-mock-title">Pipeline Builder</span>
      </div>
      <div className="sv-mock-body" style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '24px 20px' }}>
        {[
          { step: 'Imputation', detail: 'KNN (k=5)', status: 'done' },
          { step: 'Encoding', detail: 'Target Encoder', status: 'done' },
          { step: 'Scaling', detail: 'RobustScaler', status: 'done' },
          { step: 'Feature Selection', detail: 'Mutual Information', status: 'active' },
          { step: 'Balancing', detail: 'SMOTE', status: 'pending' },
        ].map((p, i) => (
          <div key={i} className={`sv-pipeline-step sv-pipeline-step--${p.status}`}>
            <div className="sv-pipeline-icon">
              {p.status === 'done' && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
              )}
              {p.status === 'active' && <div className="sv-pipeline-pulse" />}
              {p.status === 'pending' && <div className="sv-pipeline-circle" />}
            </div>
            <div style={{ flex: 1 }}>
              <div className="sv-pipeline-name">{p.step}</div>
              <div className="sv-pipeline-detail">{p.detail}</div>
            </div>
            {p.status === 'active' && <span className="sv-pipeline-badge">Running</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function TrainVisual() {
  const models = [
    { name: 'XGBoost', score: 96.2, bar: 96 },
    { name: 'LightGBM', score: 95.8, bar: 94 },
    { name: 'Random Forest', score: 94.1, bar: 88 },
    { name: 'SVM', score: 91.3, bar: 78 },
    { name: 'Logistic Reg.', score: 88.7, bar: 68 },
  ];
  return (
    <div className="sv-mock">
      <div className="sv-mock-header">
        <span className="sv-mock-dot sv-mock-dot--red" />
        <span className="sv-mock-dot sv-mock-dot--yellow" />
        <span className="sv-mock-dot sv-mock-dot--green" />
        <span className="sv-mock-title">Model Leaderboard</span>
      </div>
      <div className="sv-mock-body" style={{ padding: '16px 20px' }}>
        <div className="sv-leaderboard">
          {models.map((m, i) => (
            <div key={i} className={`sv-lb-row${i === 0 ? ' sv-lb-row--best' : ''}`}>
              <span className="sv-lb-rank">#{i + 1}</span>
              <span className="sv-lb-name">{m.name}</span>
              <div className="sv-lb-bar-wrap">
                <div className="sv-lb-bar" style={{ width: `${m.bar}%`, animationDelay: `${i * 0.1}s` }} />
              </div>
              <span className="sv-lb-score">{m.score}%</span>
            </div>
          ))}
        </div>
        <div className="sv-trials-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33" /></svg>
          75 Optuna trials completed
        </div>
      </div>
    </div>
  );
}

function VisualizeVisual() {
  return (
    <div className="sv-mock">
      <div className="sv-mock-header">
        <span className="sv-mock-dot sv-mock-dot--red" />
        <span className="sv-mock-dot sv-mock-dot--yellow" />
        <span className="sv-mock-dot sv-mock-dot--green" />
        <span className="sv-mock-title">Results Dashboard</span>
      </div>
      <div className="sv-mock-body">
        <div className="sv-results-grid">
          <div className="sv-result-card">
            <span className="sv-result-label">ROC Curve</span>
            <svg viewBox="0 0 100 100" className="sv-roc-curve">
              <line x1="0" y1="100" x2="100" y2="0" stroke="var(--color-border-secondary)" strokeWidth="0.5" strokeDasharray="3,3" />
              <path d="M0,100 Q15,20 30,15 T60,8 T100,0" fill="none" stroke="var(--color-accent)" strokeWidth="2" />
              <text x="50" y="55" textAnchor="middle" fill="var(--color-text-quaternary)" fontSize="8">AUC = 0.98</text>
            </svg>
          </div>
          <div className="sv-result-card">
            <span className="sv-result-label">Confusion Matrix</span>
            <div className="sv-cm">
              <div className="sv-cm-cell sv-cm-cell--tp">187</div>
              <div className="sv-cm-cell sv-cm-cell--fp">5</div>
              <div className="sv-cm-cell sv-cm-cell--fn">3</div>
              <div className="sv-cm-cell sv-cm-cell--tn">167</div>
            </div>
          </div>
          <div className="sv-result-card sv-result-card--wide">
            <span className="sv-result-label">Feature Importance</span>
            <div className="sv-fi-bars">
              {[
                { name: 'radius_mean', w: 100 },
                { name: 'concavity', w: 82 },
                { name: 'perimeter', w: 71 },
                { name: 'area_worst', w: 58 },
              ].map((f, i) => (
                <div key={i} className="sv-fi-row">
                  <span className="sv-fi-name">{f.name}</span>
                  <div className="sv-fi-track"><div className="sv-fi-fill" style={{ width: `${f.w}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const VISUALS = { upload: UploadVisual, explore: ExploreVisual, preprocess: PreprocessVisual, train: TrainVisual, visualize: VisualizeVisual };

/* ================================================================
   MAIN COMPONENT — static alternating layout (all steps visible)
   ================================================================ */
export default function ScrollytellingSection() {
  const ref = useScrollReveal();

  return (
    <section id="how-it-works" className="hiw-section" ref={ref}>
      <div className="page-container">
        <div className="hiw-steps">
          {steps.map((s, i) => {
            const V = VISUALS[s.visual];
            const reversed = i % 2 === 1;
            return (
              <div key={s.num} className={`hiw-row reveal${reversed ? ' hiw-row--reversed' : ''}`}>
                {/* Text */}
                <div className="hiw-text">
                  <span className="st-step-bg-num" aria-hidden="true">{s.num}</span>
                  <span className="st-step-label">{s.label}</span>
                  <h3 className="st-step-title">{s.title}</h3>
                  <p className="st-step-desc">{s.desc}</p>
                  <div className="st-step-ingredients">
                    {s.ingredients.map((ing, j) => (
                      <span key={j} className="ingredient">
                        <span className="ingredient-num">{String(j + 1).padStart(2, '0')}</span>{ing}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Visual */}
                <div className="hiw-visual">
                  <div className="hiw-visual-frame">
                    <V />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

