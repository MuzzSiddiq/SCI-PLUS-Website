import { Handshake, ShieldCheck, Sparkles } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    text: "We focus on connecting customers with reliable local professionals.",
  },
  {
    icon: Sparkles,
    title: "Quality",
    text: "SCI+ is built around cleaner, safer, and more consistent service experiences.",
  },
  {
    icon: Handshake,
    title: "Transparency",
    text: "Clear booking details, secure payments, and simple communication.",
  },
];

export default function About() {
  return (
    <main className="bg-[#0B0B0B] text-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-emerald-400 font-semibold uppercase tracking-widest">
              About SCI+
            </p>

            <h1 className="text-5xl font-bold mt-4 mb-6 leading-tight">
              Building trust in every service.
            </h1>

            <p className="text-lg text-slate-300 leading-8 mb-6">
              SCI+ is a Canadian home services platform that connects customers
              with trusted local professionals. Our goal is to make home
              services easier, safer, and more transparent.
            </p>

            <p className="text-lg text-slate-300 leading-8">
              Whether you need cleaning, maintenance, or other home services,
              SCI+ helps you find reliable professionals, book quickly, and pay
              securely through the app.
            </p>
          </div>

          <div className="rounded-[2rem] p-8 bg-gradient-to-br from-[#101915] to-[#0f1211] border border-emerald-900/20">
            <div className="bg-[#1A1A1F] border border-zinc-700 rounded-[2rem] shadow-lg p-10">
              <div className="w-16 h-1 bg-emerald-500 rounded-full mb-6" />

              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>

              <p className="text-slate-300 text-lg leading-8">
                To make home services simple, reliable, and accessible for
                everyone by combining trusted professionals with easy-to-use
                technology.
              </p>
            </div>
          </div>
        </div>

        <section className="mt-24 bg-[#111111] border border-zinc-800 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group bg-[#1A1A1F] border border-zinc-700 rounded-3xl p-8 shadow-lg hover:border-emerald-500 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition">
                  <Icon className="w-7 h-7 text-emerald-400 group-hover:text-white transition" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  {title}
                </h3>

                <p className="text-slate-400 leading-7">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}