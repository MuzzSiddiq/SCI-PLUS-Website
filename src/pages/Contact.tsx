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
    <main className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-emerald-600 font-semibold uppercase tracking-widest">
            Contact
          </p>

          <h1 className="text-5xl font-bold mt-4 mb-6 leading-tight">
            Have questions? We’d love to hear from you.
          </h1>

          <p className="text-lg text-slate-600 leading-8 mb-10">
            Reach out for support, partnership inquiries, provider questions, or
            general feedback about SCI+.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-slate-50 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>

                <h3 className="font-semibold mb-1">{label}</h3>
                <p className="text-slate-500">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="bg-slate-50 rounded-3xl p-8 space-y-5">
          <div>
            <label className="block font-medium mb-2">Name</label>
            <input
              className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Email</label>
            <input
              className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Message</label>
            <textarea
              className="w-full border border-slate-200 rounded-xl px-4 py-3 h-36 outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="button"
            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}