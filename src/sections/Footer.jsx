export default function Footer() {
  return (
    <footer className="py-16">
      <div className="page-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Col 1 */}
          <div>
            <p className="text-mini-sz text-tertiary font-semibold uppercase tracking-widest mb-4">Product</p>
            <ul className="space-y-2.5">
              <li><a href="#features" className="text-small-sz link-dimmed">Features</a></li>
              <li><a href="#how-it-works" className="text-small-sz link-dimmed">How It Works</a></li>
              <li><a href="#algorithms" className="text-small-sz link-dimmed">Algorithms</a></li>
              <li><a href="#faq" className="text-small-sz link-dimmed">FAQ</a></li>
            </ul>
          </div>
          {/* Col 2 */}
          <div>
            <p className="text-mini-sz text-tertiary font-semibold uppercase tracking-widest mb-4">ML Tasks</p>
            <ul className="space-y-2.5">
              <li><span className="text-small-sz text-quaternary">Classification</span></li>
              <li><span className="text-small-sz text-quaternary">Regression</span></li>
              <li><span className="text-small-sz text-quaternary">Clustering</span></li>
              <li><span className="text-small-sz text-quaternary">Time Series</span></li>
            </ul>
          </div>
          {/* Col 3 */}
          <div>
            <p className="text-mini-sz text-tertiary font-semibold uppercase tracking-widest mb-4">Resources</p>
            <ul className="space-y-2.5">
              <li><a href="https://github.com/your-repo/automl" target="_blank" rel="noopener" className="text-small-sz link-dimmed">GitHub</a></li>
              <li><a href="https://github.com/your-repo/automl#readme" target="_blank" rel="noopener" className="text-small-sz link-dimmed">Documentation</a></li>
              <li><a href="https://github.com/your-repo/automl/issues" target="_blank" rel="noopener" className="text-small-sz link-dimmed">Report a Bug</a></li>
            </ul>
          </div>
          {/* Col 4 */}
          <div>
            <p className="text-mini-sz text-tertiary font-semibold uppercase tracking-widest mb-4">Stack</p>
            <ul className="space-y-2.5">
              <li><span className="text-small-sz text-quaternary">Flask + React</span></li>
              <li><span className="text-small-sz text-quaternary">scikit-learn</span></li>
              <li><span className="text-small-sz text-quaternary">Optuna</span></li>
              <li><span className="text-small-sz text-quaternary">PyInstaller</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--color-border-primary)]">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#5e6ad2"/>
              <path d="M8 22L16 10l8 12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="16" cy="18" r="2.5" fill="#fff"/>
            </svg>
            <span className="text-small-sz text-tertiary">AutoML</span>
          </div>
          <p className="text-micro-sz text-quaternary">&copy; 2024 AutoML. Open-source under the MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
