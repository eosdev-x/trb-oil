import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import trbLogo from '../../assets/trb_logo.svg';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isHashLink = to.startsWith('/#');
  
  if (isHashLink) {
    return (
      <a
        href={to}
        className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm xl:text-base"
        onClick={(e) => {
          if (location.pathname === '/') {
            e.preventDefault();
            const element = document.querySelector(to.substring(1));
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm xl:text-base"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ 
  to, 
  children,
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => {
  const location = useLocation();
  const isHashLink = to.startsWith('/#');

  if (isHashLink) {
    return (
      <a
        href={to}
        className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
        onClick={(e) => {
          onClick();
          if (location.pathname === '/') {
            e.preventDefault();
            const element = document.querySelector(to.substring(1));
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            aria-label="Return to homepage"
          >
            <img src={trbLogo} alt="TRB Logo" className="h-8 w-auto sm:h-10" />
            <span className="text-lg sm:text-2xl font-bold text-gray-800 truncate">TRB Oilfield Services</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/#services">Services</NavLink>
            <NavLink to="/#equipment">Equipment</NavLink>
            <NavLink to="/#laboratory">Laboratory</NavLink>
            <NavLink to="/#tools-sales">Tools & Sales</NavLink>
            <NavLink to="/#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
            <div className="flex flex-col">
              <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink to="/#services" onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
              <MobileNavLink to="/#equipment" onClick={() => setIsMenuOpen(false)}>Equipment</MobileNavLink>
              <MobileNavLink to="/#laboratory" onClick={() => setIsMenuOpen(false)}>Laboratory</MobileNavLink>
              <MobileNavLink to="/#tools-sales" onClick={() => setIsMenuOpen(false)}>Tools & Sales</MobileNavLink>
              <MobileNavLink to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}