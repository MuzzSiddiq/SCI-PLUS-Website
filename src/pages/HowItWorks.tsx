import { CalendarPlus, Search, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Choose a Service",
    text: "Select the cleaning or home service you need and enter your details.",
  },
  {
    icon: CalendarPlus,
    number: "02",
    title: "Book a Provider",
    text: "Pick a time, confirm your booking, and connect with a local professional.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Enjoy the Result",
    text: "Track the job, chat with your provider, and pay securely in the app.",
  },
];

export default function HowItWorks() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-emerald-600 font-semibold uppercase tracking-widest">
          How It Works
        </p>

        <h1 className="text-5xl font-bold mt-4 mb-6 leading-tight">
          Book trusted home services in three simple steps.
        </h1>

        <p className="text-lg text-slate-600 leading-8">
          SCI+ keeps the process simple from the moment you request a service to
          the moment the job is complete.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map(({ icon: Icon, number, title, text }) => (
          <div
            key={title}
            className="relative bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition"
          >
            <span className="text-6xl font-bold text-emerald-100 absolute top-6 right-8">
              {number}
            </span>

            <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center mb-8">
              <Icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-slate-500 leading-7">{text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}