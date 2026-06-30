import { Link } from "react-router-dom";
import {
  ShieldCheck,
  CalendarCheck,
  CreditCard,
  MessageCircle, 
} from "lucide-react";

import { Home, Sparkles, Truck, Wrench } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    description:
      "Every service provider is carefully vetted to ensure quality and trust.",
  },
  {
    icon: CalendarCheck,
    title: "Easy Booking",
    description:
      "Book appointments in just a few taps with flexible scheduling.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Protected in-app payments with transparent pricing and buyer protection.",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Chat",
    description:
      "Stay connected with your provider before, during, and after your booking.",
  },
];

export default function home() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center bg-[#0B0B0B]">
        <div>
          <p className="inline-block bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full font-semibold mb-6">
            Trusted • Reliable • Local
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Clean Spaces, <span className="text-emerald-500">Happy Places.</span>
          </h1>

           <p className="text-lg text-slate-300 mt-6 max-w-xl">
            SCI+ connects you with trusted cleaning and home service professionals
            for fast, secure, and reliable help.
           </p>

          <div className="flex gap-4 mt-8">
            <a className="bg-emerald-600 text-white px-7 py-3 rounded-full font-semibold">
              Download the App
            </a>
            <Link
            to="/how-it-works"
            className="border border-zinc-600 text-white px-7 py-3 rounded-full font-semibold hover:border-emerald-500 hover:text-emerald-400 transition"
            >
                See How It Works
            </Link>
          </div>
        </div>

        <div className="bg-[#111111] rounded-[2rem] p-8 border border-zinc-800">
            <div className="bg-zinc-900 rounded-[2rem] shadow-xl p-6 border border-zinc-800">
                <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                    Book trusted pros
                </h2>
                <p className="text-slate-400 mt-1">
                    Cleaning, repairs, and more.
                </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                {[
                    {
                    title: "Home Cleaning",
                    icon: Home,
                    image: "/images/home-cleaning.png",
                    },
                    {
                    title: "Deep Cleaning",
                    icon: Sparkles,
                    image: "/images/deep-cleaning.png",
                    },
                    {
                    title: "Moving Help",
                    icon: Truck,
                    image: "/images/moving-help.png",
                    },
                    {
                    title: "Repairs",
                    icon: Wrench,
                    image: "/images/repairs.png",
                    },
                ].map(({ title, icon: Icon, image }) => (
                    <div
                    key={title}
                    className="overflow-hidden rounded-2xl bg-zinc-800 shadow-md border border-zinc-700 hover:border-emerald-500 transition"
                    >
                    <img
                        src={image}
                        alt={title}
                        className="h-32 w-full object-cover"
                    />

                    <div className="flex items-center gap-4 p-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-emerald-600" />
                        </div>

                        <h3 className="font-bold text-white">
                            {title}
                        </h3>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
      </section>

    <section className="bg-[#0B0B0B] py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
            <p className="text-emerald-400 font-semibold uppercase tracking-widest">
                Why Choose SCI+
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
                Home services made simple.
            </h2>

            <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-lg">
                From booking trusted professionals to secure payments and live
                communication, SCI+ gives you everything you need in one place.
            </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, description }) => (
                <div
                key={title}
                className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-sm hover:border-emerald-500 hover:-translate-y-1 transition duration-300"
                >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition">
                    <Icon className="w-7 h-7 text-emerald-400 group-hover:text-white transition" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">
                    {title}
                </h3>

                <p className="text-slate-400 leading-7">
                    {description}
                </p>
                </div>
            ))}
            </div>
        </div>
    </section>

      <section id="download" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-emerald-700 text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
            <h2 className="text-3xl font-bold">Ready to book your next service?</h2>
            <p className="text-emerald-100 mt-2">Download SCI+ and get started today.</p>
            </div>

            <div className="flex gap-4">
            <button className="bg-black px-6 py-3 rounded-xl">App Store</button>
            <button className="bg-black px-6 py-3 rounded-xl">Google Play</button>
            </div>
        </div>
      </section>
    </main>
  );
}