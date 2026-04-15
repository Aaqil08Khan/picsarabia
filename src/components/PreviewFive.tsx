import { motion } from "framer-motion";
import { services, stats } from "@/data/siteData";
import heroImg from "@/assets/hero-controlroom.jpg";
import logo from "@/assets/logo.png";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

/** Preview 5 — "Tech Forward": Clean blue-tinted tech aesthetic, card-heavy, futuristic */
const PreviewFive = () => {
  return (
    <div className="min-h-screen font-body" style={{ background: "hsl(215 30% 6%)" }}>
      {/* Glass Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-primary/10" style={{ background: "hsla(215,30%,6%,0.8)" }}>
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={logo} alt="PicsArabia" className="h-9" />
            <span className="font-display text-xl font-bold text-secondary-foreground">
              PICS<span className="text-primary">ARABIA</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-steel">
            {["Home", "About", "Services", "Projects", "Contact"].map((item, i) => (
              <a key={item} href="#" className={`transition-colors ${i === 0 ? "text-primary" : "hover:text-primary"}`}>{item}</a>
            ))}
          </nav>
          <a href="#" className="bg-primary text-primary-foreground font-semibold px-5 py-2 rounded-lg text-sm">
            Request Demo
          </a>
        </div>
      </header>

      {/* Hero — split with image card */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-semibold text-primary" style={{ background: "hsla(42,87%,48%,0.1)", border: "1px solid hsla(42,87%,48%,0.2)" }}>
              <CheckCircle2 className="w-4 h-4" /> ISO Certified Services
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl md:text-6xl font-extrabold text-secondary-foreground leading-tight mb-6">
              Next-Gen <span className="text-gradient-gold">Calibration</span> Solutions
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-steel text-lg mb-8 leading-relaxed max-w-lg">
              Advanced instrumentation, flow meter calibration, and industrial services powering Saudi Arabia's energy sector.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex items-center gap-4">
              <a href="#" className="bg-gradient-gold font-bold px-8 py-3.5 rounded-xl shadow-gold flex items-center gap-2 text-navy">
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#" className="text-steel font-semibold px-6 py-3.5 rounded-xl hover:text-primary transition-colors" style={{ border: "1px solid hsla(210,12%,71%,0.2)" }}>
                Learn More
              </a>
            </motion.div>
            {/* Mini stats */}
            <motion.div variants={fadeUp} custom={4} className="flex gap-8 mt-12 pt-8" style={{ borderTop: "1px solid hsla(210,12%,71%,0.1)" }}>
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-display font-extrabold text-primary">{s.value}</div>
                  <div className="text-steel text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img src={heroImg} alt="Control room" className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 rounded-3xl" style={{ border: "1px solid hsla(42,87%,48%,0.2)" }} />
          </motion.div>
        </div>
      </section>

      {/* Services — glowing cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Services</span>
            <h2 className="font-display text-4xl font-bold text-secondary-foreground mt-2">End-to-End Industrial Solutions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="rounded-2xl p-8 group cursor-pointer transition-all hover:shadow-gold/20 hover:shadow-2xl"
                style={{
                  background: "hsla(215,25%,10%,1)",
                  border: "1px solid hsla(42,87%,48%,0.08)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "hsla(42,87%,48%,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "hsla(42,87%,48%,0.08)"; }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "hsla(42,87%,48%,0.1)" }}>
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-secondary-foreground mb-3">{s.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(42 87% 48%), hsl(42 90% 38%))" }}>
            <h2 className="font-display text-4xl font-extrabold text-navy mb-4">Partner with Excellence</h2>
            <p className="text-navy/70 text-lg mb-8 max-w-lg mx-auto">Join SABIC, Saudi Aramco, and TASNEE in choosing PicsArabia for world-class calibration services.</p>
            <a href="#" className="bg-navy text-secondary-foreground font-bold px-10 py-4 rounded-xl inline-flex items-center gap-2 hover:bg-navy-light transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ borderTop: "1px solid hsla(210,12%,71%,0.1)" }}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-7" />
            <span className="font-display text-sm font-bold text-secondary-foreground">PICSARABIA</span>
          </div>
          <div className="flex gap-6 text-steel text-sm">
            <a href="#" className="flex items-center gap-1.5 hover:text-primary"><Mail className="w-3.5 h-3.5" /> sales@picsarabia.com</a>
            <a href="#" className="flex items-center gap-1.5 hover:text-primary"><Phone className="w-3.5 h-3.5" /> (+966) 13 8021276</a>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Al Khobar, KSA</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PreviewFive;
