import { motion } from "framer-motion";
import { services, stats } from "@/data/siteData";
import heroImg from "@/assets/hero-droplet.jpg";
import logo from "@/assets/logo.png";
import { ArrowRight, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

/** Preview 6 — "Luxury Black & Gold": editorial, high-end, dramatic black with gold typography */
const PreviewSix = () => {
  return (
    <div className="min-h-screen font-body" style={{ background: "hsl(0 0% 3%)", color: "hsl(40 20% 90%)" }}>
      {/* Thin top bar */}
      <div className="py-2 px-6 text-center text-xs tracking-[0.2em] uppercase font-semibold text-primary" style={{ background: "hsla(42,87%,48%,0.06)", borderBottom: "1px solid hsla(42,87%,48%,0.15)" }}>
        Pioneer in Industrial & Instrumentation Services — Saudi Arabia
      </div>

      {/* Header */}
      <header className="py-5 px-6" style={{ borderBottom: "1px solid hsla(40,20%,90%,0.06)" }}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="PicsArabia" className="h-11" />
            <div className="flex flex-col">
              <span className="font-display text-2xl font-extrabold tracking-tight">
                PICS<span className="text-gradient-gold">ARABIA</span>
              </span>
              <span className="text-xs tracking-[0.15em] uppercase" style={{ color: "hsla(42,87%,48%,0.5)" }}>Est. 2018</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium" style={{ color: "hsla(40,20%,90%,0.5)" }}>
            {["Home", "About Us", "Services", "Projects", "Certifications", "Contact"].map((item, i) => (
              <a key={item} href="#" className={`transition-colors ${i === 0 ? "text-primary" : "hover:text-primary"}`}>{item}</a>
            ))}
          </nav>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-light transition-colors">
            <Phone className="w-4 h-4" /> (+966) 13 8021276
          </a>
        </div>
      </header>

      {/* Hero — cinematic with centered droplet */}
      <section className="relative h-[80vh] overflow-hidden flex items-center justify-center">
        <img src={heroImg} alt="Golden droplet" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, hsla(0,0%,0%,0.3) 0%, hsla(0,0%,0%,0.85) 70%)" }} />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="w-16 h-px bg-gradient-gold mx-auto mb-8" />
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6">
              Where Precision<br />Meets <span className="text-gradient-gold">Excellence</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "hsla(40,20%,90%,0.6)" }}>
              Delivering world-class calibration, instrumentation, and industrial services to the Kingdom's most prestigious enterprises.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex gap-5 justify-center">
              <a href="#" className="bg-gradient-gold text-navy font-bold px-10 py-4 rounded-sm shadow-gold flex items-center gap-2 tracking-wide">
                Discover More <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#" className="font-semibold px-8 py-4 rounded-sm flex items-center gap-2 tracking-wide transition-colors hover:text-primary" style={{ border: "1px solid hsla(42,87%,48%,0.3)", color: "hsla(40,20%,90%,0.7)" }}>
                Our Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats — elegant horizontal */}
      <section className="py-16" style={{ borderBottom: "1px solid hsla(42,87%,48%,0.1)" }}>
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center" style={{ borderRight: i < stats.length - 1 ? "1px solid hsla(42,87%,48%,0.1)" : "none" }}>
              <div className="text-4xl font-display font-extrabold text-gradient-gold">{s.value}</div>
              <div className="text-xs uppercase tracking-[0.2em] mt-2" style={{ color: "hsla(40,20%,90%,0.4)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services — elegant two-column */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-gradient-gold mx-auto mb-4" />
            <h2 className="font-display text-4xl font-extrabold">Our Services</h2>
            <p className="mt-3 text-sm" style={{ color: "hsla(40,20%,90%,0.5)" }}>Comprehensive industrial solutions tailored to your needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex items-start gap-5 p-8 rounded-sm group cursor-pointer transition-all"
                style={{ border: "1px solid hsla(42,87%,48%,0.08)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "hsla(42,87%,48%,0.25)"; e.currentTarget.style.background = "hsla(42,87%,48%,0.03)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "hsla(42,87%,48%,0.08)"; e.currentTarget.style.background = "transparent"; }}
              >
                <div className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: "hsla(42,87%,48%,0.08)" }}>
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsla(40,20%,90%,0.5)" }}>{s.description}</p>
                  <a href="#" className="text-primary text-sm font-semibold mt-3 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "hsla(42,87%,48%,0.04)", borderTop: "1px solid hsla(42,87%,48%,0.1)", borderBottom: "1px solid hsla(42,87%,48%,0.1)" }}>
        <div className="container mx-auto px-6 text-center">
          <div className="w-12 h-px bg-gradient-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl font-extrabold mb-4">Ready to Elevate Your Operations?</h2>
          <p className="mb-8" style={{ color: "hsla(40,20%,90%,0.5)" }}>Let's discuss how PicsArabia can optimize your industrial processes.</p>
          <a href="#" className="bg-gradient-gold text-navy font-bold px-10 py-4 rounded-sm shadow-gold inline-flex items-center gap-2">
            Schedule a Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src={logo} alt="" className="h-9" />
                <span className="font-display text-xl font-extrabold">PICS<span className="text-gradient-gold">ARABIA</span></span>
              </div>
              <p className="text-sm max-w-xs" style={{ color: "hsla(40,20%,90%,0.4)" }}>
                Pioneer in Industrial, Electrical, and Instrumentation services across Saudi Arabia and the GCC.
              </p>
            </div>
            <div className="flex gap-10 text-sm" style={{ color: "hsla(40,20%,90%,0.5)" }}>
              <div className="space-y-3">
                {["About Us", "Services", "Projects", "Certifications"].map((l) => (
                  <a key={l} href="#" className="block hover:text-primary transition-colors">{l}</a>
                ))}
              </div>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-1.5 hover:text-primary"><Mail className="w-3.5 h-3.5" /> sales@picsarabia.com</a>
                <a href="#" className="flex items-center gap-1.5 hover:text-primary"><Phone className="w-3.5 h-3.5" /> (+966) 13 8021276</a>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Al Khobar 34644, KSA</span>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 text-center text-xs" style={{ borderTop: "1px solid hsla(40,20%,90%,0.06)", color: "hsla(40,20%,90%,0.3)" }}>
            © 2025 PicsArabia. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PreviewSix;
