import useScrollReveal from '../hooks/useScrollReveal';

const algorithms = [
  'Random Forest', 'XGBoost', 'LightGBM', 'CatBoost',
  'SVM', 'Logistic Reg.', 'Ridge / Lasso', 'ElasticNet',
  'K-Nearest', 'Naive Bayes', 'Decision Tree', 'Extra Trees',
  'AdaBoost', 'Gradient Boost', 'K-Means', 'DBSCAN',
];

export default function AlgorithmsSection() {
  const ref = useScrollReveal();

  return (
    <section id="algorithms" className="py-32" ref={ref}>
      <div className="page-container text-center max-w-4xl mx-auto">
        <h2 className="title-6 text-primary mb-6 reveal">20+ algorithms.<br /><span className="text-tertiary">One command.</span></h2>
        <p className="text-large-sz text-secondary max-w-2xl mx-auto mb-14 reveal reveal-d1">AutoML automatically selects and tunes from a comprehensive algorithm library spanning classification, regression, and clustering.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 reveal reveal-d2">
          {algorithms.map((algo) => (
            <div key={algo} className="panel p-4 text-center">
              <div className="grain grain-subtle"></div>
              <p className="relative z-[4] text-small-sz text-secondary">{algo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
