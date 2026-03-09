import { useState, useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const stats = [
  { value: 20, label: 'ML Algorithms', suffix: '+', delay: '' },
  { value: 75, label: 'Optuna Trials', suffix: '', delay: 'reveal-d1' },
  { value: 9, label: 'Stability Checks', suffix: '', delay: 'reveal-d2' },
  { value: 0, label: 'Database Dependencies', suffix: '', delay: 'reveal-d3' },
];

function CountingNumber({ target, suffix = '', delay = '' }) {
  const [count, setCount] = useState(0);
  const elRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimatedRef.current) {
        hasAnimatedRef.current = true;
        
        const duration = 1.5; // 1.5 seconds
        const steps = 60;
        const stepDuration = (duration * 1000) / steps;
        const increment = target / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
          step++;
          current = Math.min(target, increment * step);
          setCount(Math.floor(current));

          if (step >= steps) {
            setCount(target);
            clearInterval(timer);
          }
        }, stepDuration);

        return () => clearInterval(timer);
      }
    }, {
      threshold: 0.5,
    });

    if (elRef.current) {
      observer.observe(elRef.current);
    }

    return () => {
      if (elRef.current) observer.unobserve(elRef.current);
    };
  }, [target]);

  return (
    <span ref={elRef}>
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useScrollReveal();

  return (
    <section className="py-20" ref={ref}>
      <div className="page-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className={`reveal ${s.delay}`}>
              <p className="title-5 text-primary font-mono">
                <CountingNumber target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-small-sz text-tertiary mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
