import { useState, useRef } from 'react';
import useHeaderScroll from '../hooks/useHeaderScroll';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  useHeaderScroll(headerRef);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header ref={headerRef} id="site-header" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="page-container flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0" aria-label="AutoML Home">
            <div className="w-7 h-7 rounded-md bg-[#5e6ad2] flex items-center justify-center">
              <svg width="16" height="16" viewBox="1 0 22 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"></path></svg>
            </div>
            <span className="text-[15px] font-semibold tracking-[-0.02em]">AutoML</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-end">
            <a href="#features" className="link-dimmed text-[13px] px-3 py-1.5 rounded-md">Features</a>
            <a href="#how-it-works" className="link-dimmed text-[13px] px-3 py-1.5 rounded-md">How It Works</a>
            <a href="#algorithms" className="link-dimmed text-[13px] px-3 py-1.5 rounded-md">Algorithms</a>
            <a href="#faq" className="link-dimmed text-[13px] px-3 py-1.5 rounded-md">FAQ</a>
            <a href="https://github.com/chadikam/AutoMl" target="_blank" rel="noopener" className="link-dimmed text-[13px] px-3 py-1.5 rounded-md flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="lg:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
            <span
              className="block w-5 h-0.5 bg-white rounded transition-all origin-center"
              style={menuOpen ? { transform: 'rotate(45deg) translate(3px, 3px)' } : {}}
            />
            <span
              className="block w-5 h-0.5 bg-white rounded transition-all origin-center"
              style={menuOpen ? { transform: 'rotate(-45deg) translate(0px, -0px)' } : {}}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#features" onClick={closeMenu}>Features</a>
        <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
        <a href="#algorithms" onClick={closeMenu}>Algorithms</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <a href="https://github.com/chadikam/AutoMl" target="_blank" rel="noopener" onClick={closeMenu}>GitHub</a>
      </div>
    </>
  );
}
