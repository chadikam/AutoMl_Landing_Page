import useScrollReveal from '../hooks/useScrollReveal';

const pillars = [
  {
    step: '01',
    title: 'Upload your data.',
    desc: 'Drop in a CSV of any size or messiness. AutoML\'s ingestion engine auto-detects column types, recognizes ~50 missing-value sentinels (empty strings, "N/A", "?", "-999", and more), and parses datetime columns with multi-format support.',
    ingredients: ['Type Detection', 'Missing Patterns', 'Date Parsing'],
    image: '/images/feature-1.jpg',
    imgAlt: 'Data upload interface',
    reverse: false,
  },
  {
    step: '02',
    title: 'Explore automatically.',
    desc: 'Before training begins, AutoML runs a full exploratory analysis — distributions, outlier detection, correlation matrices, class imbalance assessment, and even categorical typo detection. You see the full picture before any model is trained.',
    ingredients: ['Distributions', 'Outlier Detection', 'Correlation Analysis', 'Typo Detection'],
    image: '/images/feature-2.png',
    imgAlt: 'EDA analysis dashboard',
    reverse: true,
  },
  {
    step: '03',
    title: 'Preprocessing that adapts.',
    desc: 'Unlike one-size-fits-all pipelines, AutoML builds a tailored preprocessing strategy for each model family. Tree-based models get ordinal encoding; linear models get one-hot. Imbalanced data triggers automatic SMOTE. Every single decision is logged.',
    ingredients: ['Model-Family Aware', 'SMOTE Balancing', 'Decision Logging'],
    image: '/images/feature-3.png',
    imgAlt: 'Preprocessing pipeline visualization',
    reverse: false,
  },
  {
    step: '04',
    title: 'Train, compare, select.',
    desc: '75 Optuna trials evaluate 20+ algorithms — from logistic regression to gradient boosting to SVMs. Overfitting models are automatically rejected. The winner is chosen by generalization score, not just accuracy.',
    ingredients: ['Optuna HPO', 'Overfit Rejection', '9-Point Stability', 'Best Model Selection'],
    image: '/images/feature-4.png',
    imgAlt: 'Model training and comparison dashboard',
    reverse: true,
  },
  {
    step: '05',
    title: 'Visualize and test.',
    desc: 'Every trained model comes with confusion matrices, ROC curves, precision-recall charts, residual plots, and feature importance analysis. Test predictions interactively — no separate notebook required.',
    ingredients: ['ROC / AUC', 'Feature Importance', 'Residual Plots', 'Prediction Testing'],
    image: null,
    imgAlt: '',
    reverse: false,
  },
];

function PillarBlock({ pillar, isLast }) {
  const ref = useScrollReveal();

  const textContent = (
    <>
      <p className="text-mini-sz text-quaternary uppercase tracking-widest mb-4">Step {pillar.step}</p>
      <h3 className="title-5 text-primary mb-4">{pillar.title}</h3>
      <p className="text-large-sz text-secondary mb-8">{pillar.desc}</p>
      <div className="flex flex-wrap gap-2">
        {pillar.ingredients.map((ing, i) => (
          <span key={ing} className="ingredient">
            <span className="ingredient-num">{String(i + 1).padStart(2, '0')}</span>{ing}
          </span>
        ))}
      </div>
    </>
  );

  const imageBlock = pillar.image ? (
    <div className="panel reveal reveal-d2">
      <div className="grain grain-subtle"></div>
      <img src={pillar.image} alt={pillar.imgAlt} className="relative z-[1] w-full rounded-2xl" loading="lazy" />
    </div>
  ) : (
    <div className="panel reveal reveal-d2">
      <div className="grain grain-subtle"></div>
      <div className="relative z-[1] bg-gradient-to-br from-[#0f1011] to-[#141516] w-full aspect-[4/3] rounded-2xl flex items-center justify-center">
        <div className="text-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#5e6ad2" strokeWidth="1.5" className="mx-auto mb-3"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
          <p className="text-small-sz text-tertiary">Interactive visualization panel</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="pillar-section" ref={ref}>
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {pillar.reverse ? (
              <>
                <div className="reveal order-2 lg:order-1">{imageBlock}</div>
                <div className="reveal reveal-d1 order-1 lg:order-2">{textContent}</div>
              </>
            ) : (
              <>
                <div className="reveal">{textContent}</div>
                {imageBlock}
              </>
            )}
          </div>
        </div>
      </div>
      {!isLast && <div className="section-sep"></div>}
    </>
  );
}

export default function HowItWorksSection() {
  return (
    <section id="how-it-works">
      {pillars.map((p, i) => (
        <PillarBlock key={p.step} pillar={p} isLast={i === pillars.length - 1} />
      ))}
    </section>
  );
}
