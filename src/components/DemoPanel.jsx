import { useState, useCallback } from 'react';

const TABS = [
  { id: 'dashboard', label: 'Dashboard', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg> },
  { id: 'dataset', label: 'Datasets', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> },
  { id: 'model', label: 'Models', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2a4 4 0 014 4c0 1.1-.5 2-1 3l6 8H3l6-8c-.5-1-1-1.9-1-3a4 4 0 014-4z"/></svg> },
  { id: 'test', label: 'Test Model', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
];

function DashboardTab() {
  return (
    <>
      <div className="demo-header">
        <h2 className="demo-page-title">Dashboard</h2>
        <div className="demo-header-actions">
          <button className="demo-btn-sm"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg> Upload Dataset</button>
          <button className="demo-btn-sm demo-btn-accent"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a4 4 0 014 4c0 1.1-.5 2-1 3l6 8H3l6-8c-.5-1-1-1.9-1-3a4 4 0 014-4z"/></svg> Train Model</button>
        </div>
      </div>
      {/* Summary Cards */}
      <div className="demo-cards">
        <div className="demo-card demo-card-purple">
          <div className="demo-card-top"><span className="demo-card-label">Training Jobs</span><div className="demo-card-icon purple"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div></div>
          <div className="demo-card-value">3</div>
          <div className="demo-card-meta">3 completed · 0 failed</div>
        </div>
        <div className="demo-card demo-card-green">
          <div className="demo-card-top"><span className="demo-card-label">Best Model Score</span><div className="demo-card-icon green"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg></div></div>
          <div className="demo-card-value" style={{ color: '#22c55e' }}>96.8%</div>
          <div className="demo-card-meta">Random Forest on Iris</div>
        </div>
        <div className="demo-card demo-card-blue">
          <div className="demo-card-top"><span className="demo-card-label">Last Dataset</span><div className="demo-card-icon blue"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></div></div>
          <div className="demo-card-value" style={{ fontSize: '1rem' }}>cancer.csv</div>
          <div className="demo-card-meta">569 rows · 31 cols · 0% missing</div>
        </div>
        <div className="demo-card demo-card-orange">
          <div className="demo-card-top"><span className="demo-card-label">Workspace</span><div className="demo-card-icon orange"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg></div></div>
          <div className="demo-card-row"><span className="demo-card-big">4</span><span className="demo-card-small">Datasets</span><span className="demo-card-big">3</span><span className="demo-card-small">Models</span></div>
          <div className="demo-card-meta">All clear</div>
        </div>
      </div>
      {/* Model Comparison Table */}
      <div className="demo-table-wrap">
        <div className="demo-table-header"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2"><path d="M12 2a4 4 0 014 4c0 1.1-.5 2-1 3l6 8H3l6-8c-.5-1-1-1.9-1-3a4 4 0 014-4z"/></svg> Model Comparison</div>
        <table className="demo-table">
          <thead>
            <tr><th>Dataset</th><th>Model Type</th><th>Task</th><th className="text-right">Accuracy</th><th className="text-right">F1</th><th className="text-right">Test Score</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td className="demo-link">Iris</td><td><span className="demo-badge">Random Forest</span></td><td><span className="demo-badge-sec">classification</span></td><td className="text-right font-mono">96.8%</td><td className="text-right font-mono">96.5%</td><td className="text-right font-mono">96.7%</td><td><span className="demo-status">✓ completed</span></td></tr>
            <tr><td className="demo-link">cancer.csv</td><td><span className="demo-badge">XGBoost</span></td><td><span className="demo-badge-sec">classification</span></td><td className="text-right font-mono">97.4%</td><td className="text-right font-mono">96.8%</td><td className="text-right font-mono">96.5%</td><td><span className="demo-status">✓ completed</span></td></tr>
            <tr><td className="demo-link">diabetes.csv</td><td><span className="demo-badge">LightGBM</span></td><td><span className="demo-badge-sec">regression</span></td><td className="text-right font-mono">—</td><td className="text-right font-mono">—</td><td className="text-right font-mono">0.621</td><td><span className="demo-status">✓ completed</span></td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

function DatasetTab({ onBack }) {
  return (
    <>
      <div className="demo-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button className="demo-back" onClick={onBack}>←</button>
          <h2 className="demo-page-title">Iris</h2>
          <span className="demo-badge-sec" style={{ fontSize: '10px' }}>150 rows · 5 cols</span>
        </div>
      </div>
      <div className="demo-cards" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
        <div className="demo-card"><div className="demo-card-label">Rows</div><div className="demo-card-value">150</div></div>
        <div className="demo-card"><div className="demo-card-label">Features</div><div className="demo-card-value">4</div></div>
        <div className="demo-card"><div className="demo-card-label">Missing</div><div className="demo-card-value" style={{ color: '#22c55e' }}>0%</div></div>
      </div>
      <div className="demo-table-wrap">
        <div className="demo-table-header">Data Preview</div>
        <table className="demo-table">
          <thead><tr><th>sepal_length</th><th>sepal_width</th><th>petal_length</th><th>petal_width</th><th>species</th></tr></thead>
          <tbody>
            <tr><td className="font-mono">5.1</td><td className="font-mono">3.5</td><td className="font-mono">1.4</td><td className="font-mono">0.2</td><td>setosa</td></tr>
            <tr><td className="font-mono">4.9</td><td className="font-mono">3.0</td><td className="font-mono">1.4</td><td className="font-mono">0.2</td><td>setosa</td></tr>
            <tr><td className="font-mono">7.0</td><td className="font-mono">3.2</td><td className="font-mono">4.7</td><td className="font-mono">1.4</td><td>versicolor</td></tr>
            <tr><td className="font-mono">6.3</td><td className="font-mono">3.3</td><td className="font-mono">6.0</td><td className="font-mono">2.5</td><td>virginica</td></tr>
          </tbody>
        </table>
      </div>
      <div className="demo-charts">
        <div className="demo-chart">
          <div className="demo-chart-title">Feature Distribution</div>
          <div className="demo-bar-chart">
            <div className="demo-bar-row"><span className="demo-bar-label">sepal_length</span><div className="demo-bar-track"><div className="demo-bar-fill" style={{ width: '82%', background: '#818cf8' }}></div></div><span className="demo-bar-val">5.84</span></div>
            <div className="demo-bar-row"><span className="demo-bar-label">sepal_width</span><div className="demo-bar-track"><div className="demo-bar-fill" style={{ width: '49%', background: '#818cf8' }}></div></div><span className="demo-bar-val">3.05</span></div>
            <div className="demo-bar-row"><span className="demo-bar-label">petal_length</span><div className="demo-bar-track"><div className="demo-bar-fill" style={{ width: '60%', background: '#818cf8' }}></div></div><span className="demo-bar-val">3.76</span></div>
            <div className="demo-bar-row"><span className="demo-bar-label">petal_width</span><div className="demo-bar-track"><div className="demo-bar-fill" style={{ width: '19%', background: '#818cf8' }}></div></div><span className="demo-bar-val">1.20</span></div>
          </div>
        </div>
        <div className="demo-chart">
          <div className="demo-chart-title">Class Distribution</div>
          <div className="demo-donut-wrap">
            <svg viewBox="0 0 100 100" className="demo-donut">
              <circle cx="50" cy="50" r="35" fill="none" stroke="#818cf8" strokeWidth="12" strokeDasharray="73.3 220" strokeDashoffset="0" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#22c55e" strokeWidth="12" strokeDasharray="73.3 220" strokeDashoffset="-73.3" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#f59e0b" strokeWidth="12" strokeDasharray="73.3 220" strokeDashoffset="-146.6" />
            </svg>
            <div className="demo-donut-legend">
              <span><i style={{ background: '#818cf8' }}></i>setosa (50)</span>
              <span><i style={{ background: '#22c55e' }}></i>versicolor (50)</span>
              <span><i style={{ background: '#f59e0b' }}></i>virginica (50)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ModelTab({ onBack }) {
  return (
    <>
      <div className="demo-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button className="demo-back" onClick={onBack}>←</button>
          <h2 className="demo-page-title">Iris — Training Results</h2>
          <span className="demo-badge-sec">classification</span>
        </div>
      </div>
      <div className="demo-best-model">
        <div className="demo-best-left">
          <div className="demo-best-trophy">🏆</div>
          <div>
            <div className="demo-best-name">Random Forest</div>
            <div className="demo-best-sub">Selected for best generalization performance</div>
          </div>
        </div>
        <div className="demo-best-right">
          <div className="demo-best-score">0.9683</div>
          <div className="demo-best-score-label">Generalization Score</div>
        </div>
      </div>
      <div className="demo-cards" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
        <div className="demo-card"><div className="demo-card-label">CV Score</div><div className="demo-card-value">0.9733</div></div>
        <div className="demo-card"><div className="demo-card-label">Test Score</div><div className="demo-card-value">0.9667</div></div>
        <div className="demo-card"><div className="demo-card-label">Overfit Gap</div><div className="demo-card-value" style={{ color: '#22c55e' }}>0.0066</div></div>
        <div className="demo-card"><div className="demo-card-label">Training Time</div><div className="demo-card-value">1m 23s</div></div>
      </div>
      <div className="demo-table-wrap">
        <div className="demo-table-header">All Models (5 trained)</div>
        <table className="demo-table">
          <thead><tr><th>#</th><th>Model</th><th className="text-right">Gen. Score</th><th className="text-right">CV</th><th className="text-right">Overfit</th><th>Status</th></tr></thead>
          <tbody>
            <tr className="demo-row-best"><td>1</td><td>Random Forest</td><td className="text-right font-mono">0.9683</td><td className="text-right font-mono">0.9733</td><td className="text-right font-mono">0.0066</td><td><span className="demo-gen-good">Good Generalization</span></td></tr>
            <tr><td>2</td><td>XGBoost</td><td className="text-right font-mono">0.9601</td><td className="text-right font-mono">0.9667</td><td className="text-right font-mono">0.0080</td><td><span className="demo-gen-good">Good Generalization</span></td></tr>
            <tr><td>3</td><td>LightGBM</td><td className="text-right font-mono">0.9534</td><td className="text-right font-mono">0.9600</td><td className="text-right font-mono">0.0120</td><td><span className="demo-gen-good">Good Generalization</span></td></tr>
            <tr><td>4</td><td>SVM (RBF)</td><td className="text-right font-mono">0.9400</td><td className="text-right font-mono">0.9533</td><td className="text-right font-mono">0.0200</td><td><span className="demo-gen-good">Good Generalization</span></td></tr>
            <tr><td>5</td><td>Logistic Regression</td><td className="text-right font-mono">0.8740</td><td className="text-right font-mono">0.9533</td><td className="text-right font-mono">0.1200</td><td><span className="demo-gen-warn">High Overfit</span></td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

function TestTab() {
  const [predicting, setPredicting] = useState(false);
  const [result, setResult] = useState(null);

  const handlePredict = useCallback(() => {
    setPredicting(true);
    setTimeout(() => {
      setResult(true);
      setPredicting(false);
    }, 600);
  }, []);

  return (
    <>
      <div className="demo-header">
        <h2 className="demo-page-title">Test Model — Predictions</h2>
      </div>
      <div className="demo-test-grid">
        <div className="demo-test-input">
          <div className="demo-test-title">Input Features</div>
          <div className="demo-test-fields">
            <label>sepal_length <input type="text" defaultValue="5.1" readOnly className="demo-input" /></label>
            <label>sepal_width <input type="text" defaultValue="3.5" readOnly className="demo-input" /></label>
            <label>petal_length <input type="text" defaultValue="1.4" readOnly className="demo-input" /></label>
            <label>petal_width <input type="text" defaultValue="0.2" readOnly className="demo-input" /></label>
          </div>
          <button
            className="demo-btn-sm demo-btn-accent"
            style={{ width: '100%', marginTop: '12px' }}
            onClick={handlePredict}
            disabled={predicting}
          >
            {predicting ? 'Predicting…' : '⚡ Predict'}
          </button>
        </div>
        <div className="demo-test-result">
          <div className="demo-test-title">Prediction Result</div>
          {!result ? (
            <div className="demo-predict-waiting">Click &quot;Predict&quot; to see results</div>
          ) : (
            <div className="demo-predict-show">
              <div className="demo-predict-class">setosa</div>
              <div className="demo-predict-conf">Confidence: 98.2%</div>
              <div className="demo-predict-probs">
                <div className="demo-bar-row"><span className="demo-bar-label">setosa</span><div className="demo-bar-track"><div className="demo-bar-fill" style={{ width: '98%', background: '#818cf8' }}></div></div><span className="demo-bar-val">98.2%</span></div>
                <div className="demo-bar-row"><span className="demo-bar-label">versicolor</span><div className="demo-bar-track"><div className="demo-bar-fill" style={{ width: '1.5%', background: '#22c55e' }}></div></div><span className="demo-bar-val">1.5%</span></div>
                <div className="demo-bar-row"><span className="demo-bar-label">virginica</span><div className="demo-bar-track"><div className="demo-bar-fill" style={{ width: '0.3%', background: '#f59e0b' }}></div></div><span className="demo-bar-val">0.3%</span></div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Confusion Matrix */}
      <div className="demo-chart" style={{ marginTop: '16px' }}>
        <div className="demo-chart-title">Confusion Matrix</div>
        <div className="demo-confusion">
          <div className="demo-cm-head"></div><div className="demo-cm-head">setosa</div><div className="demo-cm-head">versicolor</div><div className="demo-cm-head">virginica</div>
          <div className="demo-cm-head">setosa</div><div className="demo-cm-cell demo-cm-diag">19</div><div className="demo-cm-cell">0</div><div className="demo-cm-cell">0</div>
          <div className="demo-cm-head">versicolor</div><div className="demo-cm-cell">0</div><div className="demo-cm-cell demo-cm-diag">12</div><div className="demo-cm-cell demo-cm-off">1</div>
          <div className="demo-cm-head">virginica</div><div className="demo-cm-cell">0</div><div className="demo-cm-cell demo-cm-off">0</div><div className="demo-cm-cell demo-cm-diag">13</div>
        </div>
      </div>
    </>
  );
}

export default function DemoPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const goToDashboard = useCallback(() => setActiveTab('dashboard'), []);

  return (
    <div id="demo-app" className="panel dashboard-preview overflow-hidden" style={{ minHeight: '520px' }}>
      <div className="grain grain-subtle"></div>
      <div className="demo-shell relative z-[4]">
        {/* Sidebar */}
        <aside className="demo-sidebar">
          <div className="demo-sidebar-logo">
            <div className="demo-sidebar-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>
            </div>
            <span className="demo-sidebar-title">AutoML</span>
          </div>
          <div className="demo-sidebar-section">Platform</div>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`demo-nav-item${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="demo-main">
          <div className={`demo-tab${activeTab === 'dashboard' ? ' active' : ''}`}>
            <DashboardTab />
          </div>
          <div className={`demo-tab${activeTab === 'dataset' ? ' active' : ''}`}>
            <DatasetTab onBack={goToDashboard} />
          </div>
          <div className={`demo-tab${activeTab === 'model' ? ' active' : ''}`}>
            <ModelTab onBack={goToDashboard} />
          </div>
          <div className={`demo-tab${activeTab === 'test' ? ' active' : ''}`}>
            <TestTab />
          </div>
        </main>
      </div>
    </div>
  );
}
