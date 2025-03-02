import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-poppins font-bold text-accent">
          Gravic
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link to="/" className="hover:text-accent">Home</Link></li>
          <li><Link to="/about" className="hover:text-accent">About</Link></li>
          <li><Link to="/services" className="hover:text-accent">Services</Link></li>
          <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          <li><Link to="/login" className="bg-accent px-4 py-2 rounded-md">Login</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setOpen(!open)}>
          <span className="text-3xl">&#9776;</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-primary text-center py-4 space-y-4">
          <li><Link to="/" className="block text-lg hover:text-accent">Home</Link></li>
          <li><Link to="/about" className="block text-lg hover:text-accent">About</Link></li>
          <li><Link to="/services" className="block text-lg hover:text-accent">Services</Link></li>
          <li><Link to="/contact" className="block text-lg hover:text-accent">Contact</Link></li>
          <li><Link to="/login" className="block bg-accent px-4 py-2 rounded-md">Login</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;