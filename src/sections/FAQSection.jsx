import { useState, useCallback } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'Is AutoML truly no-code?',
    a: 'Yes. The entire workflow — upload, EDA, preprocessing, training, evaluation, and prediction — happens through the web UI. No Python scripts, no Jupyter notebooks, no CLI commands required.',
  },
  {
    q: 'Does it require a database?',
    a: 'No. AutoML uses JSON file-based storage — zero database dependencies. This means no PostgreSQL, no Redis, no Docker. Just download and run.',
  },
  {
    q: 'What makes "generalization-first" different?',
    a: "Most tools rank models by training accuracy. AutoML runs a 9-point stability check — measuring train/test gap, cross-validation variance, and score consistency — to reject overfit models and select the one that will actually perform on new data.",
  },
  {
    q: 'What types of ML problems are supported?',
    a: 'Classification (binary & multiclass), regression, and clustering. AutoML auto-detects the problem type from your target column, or you can choose clustering mode for unsupervised analysis.',
  },
  {
    q: 'Can it handle messy, real-world datasets?',
    a: 'Absolutely. AutoML is designed for messy data — heavy missing values, mixed types, outliers, duplicates, class imbalance, typos in categoricals. The adaptive preprocessing pipeline handles edge cases that would break most AutoML tools.',
  },
  {
    q: 'Can I package it as a desktop app?',
    a: 'Yes. AutoML includes a PyInstaller build pipeline that packages the entire Flask backend and React frontend into a single executable — one-click launch with no Python installation required on the target machine.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useScrollReveal();

  const toggle = useCallback((i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  }, []);

  return (
    <section id="faq" className="py-32" ref={ref}>
      <div className="page-container max-w-3xl mx-auto">
        <h2 className="title-6 text-primary text-center mb-14 reveal">Frequently Asked Questions</h2>

        <div className="space-y-0 reveal reveal-d1">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item border-b border-[var(--color-border-primary)]${openIndex === i ? ' open' : ''}`}>
              <button className="faq-trigger w-full flex items-center justify-between py-5 text-left" onClick={() => toggle(i)}>
                <span className="title-3 text-primary pr-4">{faq.q}</span>
                <svg className="faq-chevron shrink-0 text-tertiary" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className="faq-answer">
                <p className="text-regular-sz text-secondary pb-1">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
