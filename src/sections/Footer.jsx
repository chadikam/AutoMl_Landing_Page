export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16">
      <div className="page-container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-16">
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
            <p className="text-mini-sz text-tertiary font-semibold uppercase tracking-widest mb-4">Resources</p>
            <ul className="space-y-2.5">
              <li><a href="https://github.com/chadikam/AutoMl" target="_blank" rel="noopener" className="text-small-sz link-dimmed">GitHub</a></li>
              <li><a href="https://github.com/chadikam/AutoMl#readme" target="_blank" rel="noopener" className="text-small-sz link-dimmed">Documentation</a></li>
              <li><a href="https://github.com/chadikam/AutoMl/issues" target="_blank" rel="noopener" className="text-small-sz link-dimmed">Report a Bug</a></li>
            </ul>
          </div>
          {/* Col 3 */}
          <div>
            <p className="text-mini-sz text-tertiary font-semibold uppercase tracking-widest mb-4">Community</p>
            <ul className="space-y-2.5">
              <li><a href="https://github.com/chadikam/AutoMl/discussions" target="_blank" rel="noopener" className="text-small-sz link-dimmed">Discussions</a></li>
              <li><a href="https://github.com/chadikam/AutoMl/contributes" target="_blank" rel="noopener" className="text-small-sz link-dimmed">Contributing</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--color-border-primary)]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-sm bg-[#5e6ad2] flex items-center justify-center shrink-0">
              <svg width="12" height="12" viewBox="1 0 22 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"></path></svg>
            </div>
            <span className="text-small-sz text-tertiary">AutoML</span>
          </div>
          <p className="text-micro-sz text-quaternary">&copy; {currentYear} AutoML. Open-source under the MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
