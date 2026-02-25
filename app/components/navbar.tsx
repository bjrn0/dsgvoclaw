'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";

// Navigation links array - all sections
const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "So funktioniert's" },
  { href: "#pricing", label: "Preise" },
  { href: "#social-proof", label: "Kunden" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'max-w-5xl mx-auto' 
          : 'max-w-7xl mx-auto'
      }`}
    >
      <nav className={`bg-white/90 backdrop-blur-md border border-[#e7e5e4] rounded-2xl shadow-sm transition-all duration-300 px-4 sm:px-6 ${
        isScrolled ? 'py-2' : 'py-3'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-2"
            title="DSGVOClaw homepage"
          >
            <div className="w-8 h-8 rounded-lg bg-[#5a7a4a] flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className={`font-semibold text-slate-900 tracking-tight transition-all duration-300 ${
              isScrolled ? 'text-base' : 'text-lg'
            }`}>DSGVOClaw</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium text-slate-600 hover:text-slate-900 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#5a7a4a] after:transition-all after:duration-200 hover:after:w-full ${
                  isScrolled ? 'text-xs' : 'text-sm'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/signin"
              className={`font-medium text-slate-600 hover:text-slate-900 transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}
            >
                Anmelden
            </a>
            <a
              href="/signup"
              className={`inline-flex items-center justify-center gap-1.5 font-medium bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 ${
                isScrolled ? 'text-xs px-3 py-1.5' : 'text-sm px-4 py-2'
              }`}
            >
              Registrieren
              <svg 
                className={`transition-all duration-300 ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`}
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Open main menu"
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-3 border-t border-slate-200 space-y-2">
              <a
                href="/signin"
                className="block w-full text-center px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Anmelden
              </a>
              <a
                href="/signup"
                className="block w-full text-center px-4 py-2 text-sm font-medium bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors"
              >
                Registrieren
              </a>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}