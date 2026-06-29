import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-emerald-400">SCI+</h2>
          <p className="text-slate-400 mt-3">Home services, made simple.</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <div className="space-y-2 text-slate-400">
            <Link to="/" className="block">Home</Link>
            <Link to="/about" className="block">About</Link>
            <Link to="/features" className="block">Features</Link>
            <Link to="/how-it-works" className="block">How It Works</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-3">Legal</h3>
          <p className="text-slate-400">Privacy Policy</p>
          <p className="text-slate-400">Terms of Service</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Contact</h3>
          <p className="text-slate-400">hello@sci-plus.com</p>
          <p className="text-slate-400">+1 (438) 230-9661</p>
        </div>
      </div>

      <p className="text-center text-slate-500 mt-10">
        © 2025 SCI+. All rights reserved.
      </p>
    </footer>
  );
}