import useScrollReveal from '../hooks/useScrollReveal';
import DemoPanel from './DemoPanel';

function AnimatedTitle() {
  const words = [
    'From', 'Raw', 'CSV', 'to',
    'Production', 'ML', 'Model'
  ];

  return (
    <h1 id="hero-heading" className="hero-title reveal">
      {words.map((word, i) => (
        <span
          key={i}
          className="hero-word"
          style={{ animationDelay: `${0.12 + i * 0.07}s` }}
        >
          {word}
          {i === 3 ? <br /> : i === 6 ? null : ' '}
        </span>
      ))}
    </h1>
  );
}

export default function HeroSection() {
  const sectionRef = useScrollReveal();

  return (
    <section className="hero-section" ref={sectionRef}>
      <div className="page-container">
        <div className="hero-content-wrapper">
          <p className="hero-eyebrow reveal">Open-Source &middot; No-Code &middot; ML Framework</p>

          <AnimatedTitle />

          <div className="hero-sub-row reveal reveal-d1">
            <p className="hero-subtitle">
              Upload a dataset, get a production-ready model. AutoML handles the entire pipeline&nbsp;&mdash; cleaning, feature engineering, training, and model selection.
            </p>
            <a href="https://github.com/your-repo/automl" target="_blank" rel="noopener" className="hero-github-link">
              Download on GitHub →
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Demo Panel */}
      <div className="page-container">
        <div className="dashboard-wrapper reveal reveal-d2">
          <DemoPanel />
        </div>
      </div>
      <div className="hero-bottom-fade"></div>
    </section>
  );
}
