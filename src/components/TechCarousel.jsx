import useScrollReveal from '../hooks/useScrollReveal';

export default function TechCarousel() {
  const ref = useScrollReveal();
  const items = ['scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost', 'Optuna', 'Flask', 'React'];

  return (
    <section className="tech-bar-section" ref={ref}>
      <div className="page-container text-center">
        <p className="text-mini-sz text-quaternary tracking-wide uppercase mb-10 reveal">Built with proven technologies</p>
      </div>
      <div className="tech-marquee-wrapper">
        <div className="tech-marquee-track">
          {/* Original + duplicate for seamless loop */}
          {[...items, ...items].map((item, i) => (
            <span key={i} className="tech-marquee-item">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
