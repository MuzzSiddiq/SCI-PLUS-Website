import { Link } from "react-router-dom";
import {
  ShieldCheck,
  CalendarCheck,
  CreditCard,
  MessageCircle,
} from "lucide-react";

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

export default function Home() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="inline-block bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full font-semibold mb-6">
            Trusted • Reliable • Local
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Clean Spaces, <span className="text-emerald-600">Happy Places.</span>
          </h1>

          <p className="text-lg text-slate-600 mt-6 max-w-xl">
            SCI+ connects you with trusted cleaning and home service professionals
            for fast, secure, and reliable help.
          </p>

          <div className="flex gap-4 mt-8">
            <a className="bg-emerald-600 text-white px-7 py-3 rounded-full font-semibold">
              Download the App
            </a>
            <Link
              to="/how-it-works"
              className="border px-7 py-3 rounded-full font-semibold"
            >
              See How It Works
            </Link>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-[3rem] p-10 text-center">
          <div className="bg-white rounded-[2rem] shadow-xl p-8 max-w-sm mx-auto">
            <h3 className="font-bold text-xl mb-3">Book trusted pros</h3>
            <p className="text-slate-500 mb-6">Cleaning, repairs, and more.</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-slate-50 p-4 rounded-xl">Home Cleaning</div>
              <div className="bg-slate-50 p-4 rounded-xl">Deep Cleaning</div>
              <div className="bg-slate-50 p-4 rounded-xl">Moving Help</div>
              <div className="bg-slate-50 p-4 rounded-xl">Repairs</div>
            </div>
          </div>
        </div>
      </section>

    <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">
                <p className="text-emerald-600 font-semibold uppercase tracking-widest">
                    Why Choose SCI+
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mt-4">
                    Home services made simple.
                </h2>

                <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
                    From booking trusted professionals to secure payments and live
                    communication, SCI+ gives you everything you need in one place.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                {features.map(({ icon: Icon, title, description }) => (

                <div
                key={title}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300"
                >

                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 transition group-hover:bg-emerald-600">

                    <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition" />

                </div>

                <h3 className="text-xl font-semibold mb-3">
                    {title}
                </h3>

                <p className="text-slate-500 leading-7">
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