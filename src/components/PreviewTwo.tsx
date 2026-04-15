import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { services, stats } from "@/data/siteData";
import heroImg from "@/assets/hero-precision.jpg";
import logo from "@/assets/logo.png";
import { ArrowRight, ChevronRight, Shield, Clock, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const PreviewTwo = () => {
  return (
    <div className="min-h-screen bg-navy font-body">
      {/* Dark Header */}
      <div className="bg-navy py-3 px-6 border-b border-navy-light">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="PicsArabia" className="h-12" />
            <div>
              <span className="font-display text-2xl font-bold text-secondary-foreground">
                PICS<span className="text-primary">ARABIA</span>
              </span>
              <p className="text-steel text-xs">Industrial Excellence Since 2018</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {["Home", "About", "Services", "Projects", "Contact"].map((item, i) => (
              <a
                key={item}
                href="#"
                className={`text-sm font-medium transition-colors ${i === 0 ? "text-primary" : "text-steel hover:text-primary"}`}
              >
                {item}
              </a>
            ))}
            <a href="#" className="bg-gradient-gold text-secondary-foreground text-sm font-semibold px-5 py-2 rounded-md shadow-gold">
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Hero - Full bleed dark */}
      <section className="relative h-[650px] overflow-hidden">
        <img src={heroImg} alt="Precision instruments" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero-overlay-center" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl px-6">
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold">Certified Industrial Services Provider</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl md:text-7xl font-extrabold text-secondary-foreground leading-tight mb-6">
              Engineering <br />
              <span className="text-gradient-gold">Precision</span> at Scale
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-steel text-lg mb-10 max-w-xl mx-auto">
              Leading the way in calibration, instrumentation, and industrial services across the Kingdom of Saudi Arabia.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex gap-4 justify-center">
              <a href="#" className="bg-gradient-gold text-secondary-foreground font-bold px-10 py-4 rounded-lg shadow-gold hover:opacity-90 transition-opacity flex items-center gap-2 text-lg">
                Explore Services <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats - gold cards */}
      <section className="py-12 bg-navy-light">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-navy rounded-xl p-6 border border-primary/20 text-center">
              <div className="text-4xl font-display font-extrabold text-gradient-gold">{s.value}</div>
              <div className="text-steel text-sm mt-2 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services - dark grid */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Expertise</span>
            <h2 className="font-display text-4xl font-bold text-secondary-foreground mt-2">Comprehensive Industrial Services</h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
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
                className="bg-navy-light rounded-xl p-8 border border-primary/10 hover:border-primary/40 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-secondary-foreground mb-3">{s.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="py-20 bg-navy-light">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Certified Quality", desc: "ISO certified processes ensuring the highest standards in every project." },
            { icon: Clock, title: "24/7 Support", desc: "Round-the-clock availability for maintenance and emergency services." },
            { icon: Award, title: "Expert Team", desc: "Innovation-driven subject matter experts with deep industry knowledge." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h3 className="font-display font-bold text-secondary-foreground mb-1">{item.title}</h3>
                <p className="text-steel text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy border-t border-navy-light py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-steel text-sm">© 2025 PicsArabia — Pioneering Industrial Excellence in Saudi Arabia</p>
        </div>
      </footer>
    </div>
  );
};

export default PreviewTwo;
