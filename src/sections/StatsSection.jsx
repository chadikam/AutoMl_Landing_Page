import useScrollReveal from '../hooks/useScrollReveal';

const stats = [
  { value: '20+', label: 'ML Algorithms', delay: '' },
  { value: '75', label: 'Optuna Trials', delay: 'reveal-d1' },
  { value: '9', label: 'Stability Checks', delay: 'reveal-d2' },
  { value: '0', label: 'Database Dependencies', delay: 'reveal-d3' },
];

export default function StatsSection() {
  const ref = useScrollReveal();

  return (
    <section className="py-20" ref={ref}>
      <div className="page-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className={`reveal ${s.delay}`}>
              <p className="title-5 text-primary font-mono">{s.value}</p>
              <p className="text-small-sz text-tertiary mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
