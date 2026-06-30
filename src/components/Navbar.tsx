import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0B0B0B]/95 backdrop-blur border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="SCI+ Logo"
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden md:flex gap-8 font-medium text-white">
          <Link to="/" className="hover:text-emerald-400 transition">Home</Link>
          <Link to="/about" className="hover:text-emerald-400 transition">About</Link>
          <Link to="/features" className="hover:text-emerald-400 transition">Features</Link>
          <Link to="/how-it-works" className="hover:text-emerald-400 transition">How It Works</Link>
          <Link to="/contact" className="hover:text-emerald-400 transition">Contact</Link>
        </div>

        <a
          href="#download"
          className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-500 transition"
        >
          Download App
        </a>
      </nav>
    </header>
  );
}