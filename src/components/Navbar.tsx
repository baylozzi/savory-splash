import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-serif text-2xl text-restaurant-dark">
            Gusto
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/menu" className="nav-link">Menu</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/reservation" className="nav-link">Reservation</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-restaurant-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg animate-fade-down">
            <div className="flex flex-col space-y-4 p-4">
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/menu" className="nav-link" onClick={() => setIsMenuOpen(false)}>Menu</Link>
              <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/reservation" className="nav-link" onClick={() => setIsMenuOpen(false)}>Reservation</Link>
              <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;