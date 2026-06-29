import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-emerald-700">
          SCI+
        </Link>

        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <a
          href="#download"
          className="bg-emerald-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-emerald-700"
        >
          Download App
        </a>
      </nav>
    </header>
  );
}