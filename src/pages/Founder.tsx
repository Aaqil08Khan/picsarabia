import { Link } from "react-router-dom";
import founderPortrait from "@/assets/founder-affan-ansari.png";
import signature from "@/assets/signature.png";


const Founder = () => (
  <main className="min-h-screen bg-[#050c1f] text-white pb-24">
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/src/assets/hero-industrial.jpg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/95" />

      {/* Main Grid */}
      <div className="container relative mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center px-4 sm:px-6 py-16 sm:py-20 lg:py-24">

        {/* LEFT: Founder Message Card */}
        <div className="flex justify-center lg:justify-start z-10">
          <div className="bg-[#0b1730]/90 backdrop-blur-md border border-primary/20 rounded-[30px] p-6 sm:p-8 md:p-10 shadow-[8px_8px_0_rgba(248,180,14,0.2)] max-w-2xl">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary text-center mb-6 tracking-wide">
              FOUNDER’S MESSAGE
            </h2>

            <p className="text-steel/80 text-base sm:text-lg leading-relaxed mb-4">
              It gives me great pleasure to welcome you to PICS ARABIA. Since our inception, we have remained committed to delivering unmatched quality and reliable services in the field of calibration, instrumentation, and industrial solutions.
            </p>

            <p className="text-steel/80 text-base sm:text-lg leading-relaxed mb-4">
              Our priority has always been the satisfaction of our clients, and we achieve this by combining technical expertise, teamwork, and innovation. Through collaboration with our partners and customers, we ensure expectations are not only met but exceeded.
            </p>

            <p className="text-steel/80 text-base sm:text-lg leading-relaxed mb-4">
              At PICS ARABIA, we believe in creating value for our clients while upholding the highest standards of safety, health, and professionalism. Our team of skilled professionals, equipped with advanced tools and training, is dedicated to delivering precision-driven services that support the success of industries across the Kingdom.
            </p>

            <p className="text-steel/80 text-base sm:text-lg leading-relaxed mb-6">
              We look forward to building long-term relationships based on trust, reliability, and shared success. With every project, we renew our commitment to being a partner you can depend on.
            </p>

            {/* Signature Section */}
            <div className="flex flex-col items-end mt-6">
              <img
                src={signature}
                alt="signature"
                //className="h-12 mb-2 opacity-90"
                className="h-12 mb-2 opacity-90 invert sepia hue-rotate-[330deg] saturate-[5]"
              />
              <p className="text-white font-bold text-lg">
                Mohammed Afnan Ansari
              </p>
              <p className="text-steel/70 italic">
                Managing Director
              </p>
            </div>

            {/* Back Button */}
            <div className="mt-8 flex items-center gap-3">
              <Link
                to="/about"
                className="inline-flex items-center justify-center w-max px-6 py-2 text-sm font-bold uppercase tracking-wider text-black bg-primary border-2 border-white hover:bg-gold transition-all"
              >
                Back to About Us
              </Link>

              <div className="rounded-lg border border-primary/50 bg-[#07122f] p-2 px-4">
                <span className="text-xs uppercase tracking-wider text-secondary-foreground">
                  Experience
                </span>
                <p className="text-lg font-black text-primary">15+ yrs</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT: Founder Image */}
        <div className="relative z-10 rounded-[18px] overflow-hidden border-2 border-primary/80 shadow-[8px_8px_0_#f8b40e44]">
          <div className="bg-gradient-to-br from-[#112442] via-[#0a172e] to-[#020b18] p-1">
            <div className="relative h-[460px] sm:h-[560px] lg:h-[670px] overflow-hidden rounded-[16px] bg-black">

              <img
                src={founderPortrait}
                alt="Mohammed Afnan Ansari"
                className="absolute inset-0 h-full w-full object-cover object-[50%_15%]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />

              {/* Text on Image */}
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-xl font-black text-primary uppercase tracking-wide">
                  Founder of PICSARABIA
                </h2>
                <p className="text-sm text-white/90">
                  Industrial metrology and instrumentation visionary
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>

    {/* Bottom Section (unchanged) */}
    <section className="container mx-auto px-4 sm:px-6 py-14 sm:py-16">
      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-[#0c1832] border border-primary/20 rounded-lg p-6 sm:p-8 shadow-[6px_6px_0_rgba(255,197,0,0.2)]">
          <h3 className="text-2xl font-display font-bold text-primary mb-4">
            We specialize in
          </h3>
          <ul className="list-disc list-inside text-steel/80 space-y-2">
            <li>Automation, Controls & Instrumentation Engineering</li>
            <li>Electrical Engineering Services</li>
            <li>Systems Integration</li>
            <li>Technical & Turnkey Project Support</li>
          </ul>
        </div>

        <div className="bg-[#0c1832] border border-primary/20 rounded-lg p-6 sm:p-8 shadow-[6px_6px_0_rgba(255,197,0,0.2)]">
          <h3 className="text-2xl font-display font-bold text-primary mb-4">
            Our culture
          </h3>
          <p className="text-steel/80 leading-relaxed mb-3">
            “Our focus remains clear: deliver technically sound, cost-effective,
            and timely solutions while upholding the highest standards of safety,
            health, and professional integrity.”
          </p>
          <p className="text-steel/80 leading-relaxed">
            “We value our clients, partners, associates, and team members with equal
            respect. Every project reflects our commitment to responsibility,
            innovation, and excellence.”
          </p>
        </div>

      </div>
    </section>
  </main>
);

export default Founder;