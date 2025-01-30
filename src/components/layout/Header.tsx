import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import trbLogo from '../../assets/trb_logo.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={trbLogo} alt="TRB Logo" className="h-8 w-auto sm:h-10" />
            <span className="text-lg sm:text-2xl font-bold text-gray-800 truncate">Oilfield Services</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#equipment">Equipment</NavLink>
            <NavLink href="#laboratory">Laboratory</NavLink>
            <NavLink href="#tools-sales">Tools & Sales</NavLink>
            <NavLink href="#contact">Contact</NavLink>
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>
                Services
              </MobileNavLink>
              <MobileNavLink href="#equipment" onClick={() => setIsMenuOpen(false)}>
                Equipment
              </MobileNavLink>
              <MobileNavLink href="#laboratory" onClick={() => setIsMenuOpen(false)}>
                Laboratory
              </MobileNavLink>
              <MobileNavLink href="#tools-sales" onClick={() => setIsMenuOpen(false)}>
                Tools & Sales
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm xl:text-base"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a
    href={href}
    className="text-gray-600 hover:text-blue-600 transition-colors font-medium block py-2 px-4 hover:bg-gray-50 rounded"
    onClick={onClick}
  >
    {children}
  </a>
);