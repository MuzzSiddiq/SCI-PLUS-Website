import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@sci-plus.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (438) 230-9661",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Toronto, Ontario",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri, 9:00 AM - 6:00 PM",
  },
];

export default function Contact() {
  return (
    <main className="bg-[#0B0B0B] text-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-emerald-400 font-semibold uppercase tracking-widest">
              Contact
            </p>

            <h1 className="text-5xl font-bold mt-4 mb-6 leading-tight text-white">
              Have questions? We’d love to hear from you.
            </h1>

            <p className="text-lg text-slate-300 leading-8 mb-10">
              Reach out for support, partnership inquiries, provider questions,
              or general feedback about SCI+.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-[#1A1A1F] border border-zinc-700 rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>

                  <h3 className="font-semibold mb-1 text-white">{label}</h3>
                  <p className="text-slate-400">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <form className="bg-[#1A1A1F] border border-zinc-700 rounded-3xl p-8 space-y-5">
            <div>
              <label className="block font-medium mb-2 text-white">Name</label>
              <input
                className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block font-medium mb-2 text-white">Email</label>
              <input
                className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block font-medium mb-2 text-white">
                Message
              </label>
              <textarea
                className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 h-36 outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="button"
              className="w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold hover:bg-emerald-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}