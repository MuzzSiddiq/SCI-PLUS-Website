export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-emerald-600 font-bold uppercase mb-3">About SCI+</p>

          <h1 className="text-5xl font-bold mb-6">
            Building trust in every service.
          </h1>

          <p className="text-lg text-slate-600 leading-8 mb-6">
            SCI+ is a Canadian home services platform that connects customers
            with trusted local professionals. Our goal is to make home services
            easier, safer, and more transparent.
          </p>

          <p className="text-lg text-slate-600 leading-8">
            Whether you need cleaning, maintenance, or other home services,
            SCI+ helps you find reliable professionals, book quickly, and pay
            securely through the app.
          </p>
        </div>

        <div className="bg-emerald-50 rounded-3xl p-10">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-7">
              To make home services simple, reliable, and accessible for
              everyone by combining trusted professionals with easy-to-use
              technology.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-24 bg-slate-50 rounded-3xl p-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why choose SCI+?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {["Trusted", "Reliable", "Transparent", "Customer First"].map((item) => (
            <div key={item} className="bg-white rounded-2xl p-6">
              <h3 className="font-bold mb-2">{item}</h3>
              <p className="text-sm text-slate-500">
                We focus on safe, simple, and dependable service.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}