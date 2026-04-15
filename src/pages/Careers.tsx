const Careers = () => (
  <main className="min-h-screen bg-black text-white pb-24">
    
    {/* HEADER */}
    <section className="py-16 sm:py-20 lg:py-24 border-b-4 border-primary bg-[#070d14]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-[0.08em] sm:tracking-[0.14em] md:tracking-[0.2em] mb-4 break-words">
          Careers @ PICSARABIA
        </h1>
        <p className="text-steel/80 text-base sm:text-lg leading-relaxed max-w-2xl">
          Join a brutalist team built on industrial precision, compliance excellence, and relentless accountability. 
          At PicsArabia, we don’t just hire — we build professionals who operate at the highest standards of discipline and technical accuracy.
        </p>
      </div>
    </section>

    {/* COMPANY CULTURE */}
    <section className="py-14 sm:py-16 lg:py-20 bg-[#0b0f18] border-b border-steel/20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-wider mb-6">
          Why Work With Us
        </h2>
        <div className="grid gap-6 md:grid-cols-3 text-steel/80">
          <div className="border-2 border-steel/20 p-6 bg-[#0f1625]">
            <h3 className="font-bold text-white uppercase mb-2">Precision Driven</h3>
            <p>
              Work in an environment where accuracy is non-negotiable and every measurement matters.
            </p>
          </div>
          <div className="border-2 border-steel/20 p-6 bg-[#0f1625]">
            <h3 className="font-bold text-white uppercase mb-2">Compliance Excellence</h3>
            <p>
              Be part of ISO-driven systems and globally aligned quality frameworks.
            </p>
          </div>
          <div className="border-2 border-steel/20 p-6 bg-[#0f1625]">
            <h3 className="font-bold text-white uppercase mb-2">Growth Mindset</h3>
            <p>
              Continuous learning, technical exposure, and real-world industrial challenges.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ROLES */}
    <section className="py-14 sm:py-16 lg:py-20 bg-[#0b0f18]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl grid gap-6 sm:gap-8 md:grid-cols-2">
        {[
          {
            title: "Calibration Technician",
            description:
              "Perform field and laboratory calibration of instruments ensuring compliance with ISO/IEC 17025 standards and maintaining traceability.",
          },
          {
            title: "Quality Engineer",
            description:
              "Handle audits, maintain QMS systems, and ensure strict adherence to international compliance standards.",
          },
          {
            title: "Sales & Business Development",
            description:
              "Develop industrial client relationships, manage contracts, and expand calibration service reach.",
          },
          {
            title: "Metrology Specialist",
            description:
              "Execute high-precision measurements, uncertainty analysis, and technical validation across instruments.",
          },
        ].map((role) => (
          <article
            key={role.title}
            className="border-4 border-primary/80 bg-[#0f1625] p-6 sm:p-8"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-wide sm:tracking-wider mb-3">
              {role.title}
            </h2>
            <p className="text-steel/70">{role.description}</p>
          </article>
        ))}
      </div>
    </section>

    {/* APPLICATION CTA */}
    <section className="py-16 bg-[#070d14] border-t-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-wider mb-4">
          Start Your Career With Us
        </h2>
        <p className="text-steel/80 text-lg leading-relaxed mb-6">
          If you are ready to work in a high-discipline, precision-focused environment and build a long-term career in industrial calibration and compliance —
          we would like to hear from you.
        </p>

        <div className="border-2 border-primary inline-block px-6 py-4 text-primary font-bold tracking-wider">
          Send your resume to: hr@picsarabia.com
        </div>
      </div>
    </section>

  </main>
);

export default Careers;