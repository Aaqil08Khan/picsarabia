const Contact = () => (
  <main className="min-h-screen bg-black text-white pb-24">

    {/* HEADER */}
    <section className="py-16 sm:py-20 lg:py-24 border-b-4 border-primary bg-[#070d14]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-[0.08em] sm:tracking-[0.14em] md:tracking-[0.2em] mb-4">
          Contact
        </h1>
        <p className="text-steel/80 text-base sm:text-lg leading-relaxed max-w-2xl">
          For urgent calibration services, compliance quotations, and technical incident response, connect with us directly.
          Our team ensures rapid response and precision-driven support.
        </p>
      </div>
    </section>

    {/* CONTACT CARD ONLY */}
    <section className="py-14 sm:py-20 bg-[#0b0f18]">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">

        <div className="bg-[#0d1220] p-8 sm:p-10 border-2 border-primary transition-all hover:bg-[#0f1825] hover:-translate-y-1">

          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-wider mb-6 text-center">
            Get in Touch
          </h2>

          <p className="text-steel/70 mb-8 text-center">
            Our field operations and ISO-accredited laboratory teams are available 24/7 to support critical calibration requirements,
            emergency services, and compliance-related queries.
          </p>

          <div className="space-y-6 text-white text-center">

            <div>
              <p className="font-bold uppercase text-steel/60 mb-1">Email</p>
              <p className="text-xl">sales@picsarabia.com</p>
            </div>

            <div>
              <p className="font-bold uppercase text-steel/60 mb-1">Phone</p>
              <p className="text-xl">+966 13 8021276</p>
            </div>

            <div>
              <p className="font-bold uppercase text-steel/60 mb-1">Address</p>
              <p className="text-lg">
                Al Khobar, Kingdom of Saudi Arabia
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-[#070d14] border-t-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-wider mb-4">
          Direct Communication Only
        </h2>
        <p className="text-steel/80 text-lg leading-relaxed">
          To ensure clarity, security, and faster response times — we handle all inquiries directly via official communication channels.
        </p>
      </div>
    </section>

  </main>
);

export default Contact;