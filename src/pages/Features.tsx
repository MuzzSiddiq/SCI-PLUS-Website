import {
  Bell,
  CalendarCheck,
  CreditCard,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Fast Booking",
    text: "Schedule cleaning and home services quickly from your phone.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Providers",
    text: "Book with confidence through a platform built around reliability.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    text: "Pay safely in-app with clear pricing and payment protection.",
  },
  {
    icon: MessageCircle,
    title: "In-App Chat",
    text: "Communicate with your provider before and during the job.",
  },
  {
    icon: MapPin,
    title: "Local Services",
    text: "Connect with professionals available near your area.",
  },
  {
    icon: Bell,
    title: "Live Updates",
    text: "Stay informed about bookings, messages, and service progress.",
  },
];

export default function Features() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <p className="text-emerald-600 font-semibold uppercase tracking-widest">
        Features
      </p>

      <h1 className="text-5xl font-bold mt-4 mb-6 leading-tight">
        Everything you need in one simple app.
      </h1>

      <p className="text-lg text-slate-600 max-w-2xl mb-14 leading-8">
        SCI+ helps customers book, manage, communicate, and pay for trusted home
        services through one modern platform.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="group bg-white border rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition">
              <Icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition" />
            </div>

            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-slate-500 leading-7">{text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}