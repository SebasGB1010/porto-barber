import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-secondary-900 shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-section !py-0">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <Scissors className="h-8 w-8 text-accent-600" />
            <span className="ml-2 text-xl font-display font-bold text-secondary-800 dark:text-white">
              Barber Porto
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#servicos"
              className="text-secondary-700 dark:text-secondary-200 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#galeria"
              className="text-secondary-700 dark:text-secondary-200 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              Galeria
            </a>
            <a
              href="#testemunhos"
              className="text-secondary-700 dark:text-secondary-200 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              Testemunhos
            </a>
            <a
              href="#contato"
              className="text-secondary-700 dark:text-secondary-200 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              Contato
            </a>
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-800"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-accent-400" />
              ) : (
                <Moon className="h-5 w-5 text-accent-600" />
              )}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.95 }}
              className="p-2 mr-2 rounded-full bg-secondary-100 dark:bg-secondary-800"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-accent-400" />
              ) : (
                <Moon className="h-5 w-5 text-accent-600" />
              )}
            </motion.button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-secondary-800 dark:text-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-secondary-900 shadow-lg"
        >
          <div className="px-4 py-4 space-y-4">
            <a
              href="#servicos"
              onClick={toggleMobileMenu}
              className="block text-secondary-700 dark:text-secondary-200 hover:text-accent-600 dark:hover:text-accent-400"
            >
              Serviços
            </a>
            <a
              href="#galeria"
              onClick={toggleMobileMenu}
              className="block text-secondary-700 dark:text-secondary-200 hover:text-accent-600 dark:hover:text-accent-400"
            >
              Galeria
            </a>
            <a
              href="#testemunhos"
              onClick={toggleMobileMenu}
              className="block text-secondary-700 dark:text-secondary-200 hover:text-accent-600 dark:hover:text-accent-400"
            >
              Testemunhos
            </a>
            <a
              href="#contato"
              onClick={toggleMobileMenu}
              className="block text-secondary-700 dark:text-secondary-200 hover:text-accent-600 dark:hover:text-accent-400"
            >
              Contato
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;