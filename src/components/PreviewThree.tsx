import { motion } from "framer-motion";
import { services, stats } from "@/data/siteData";
import heroImg from "@/assets/hero-refinery.jpg";
import logo from "@/assets/logo.png";
import { ArrowRight, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const PreviewThree = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={logo} alt="PicsArabia" className="h-9" />
            <span className="font-display text-xl font-bold text-foreground">
              PICS<span className="text-primary">ARABIA</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Services", "Projects", "Contact"].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+966138021276" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1.5">
              <Phone className="w-4 h-4" /> (+966) 13 8021276
            </a>
            <a href="#" className="bg-gradient-gold text-foreground font-semibold px-5 py-2 rounded-full text-sm shadow-gold">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero - Clean left-aligned with image */}
      <section className="relative pt-16 h-[700px] overflow-hidden">
        <img src={heroImg} alt="Saudi refinery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero-overlay-light" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" animate="visible" className="max-w-xl">
              <motion.p variants={fadeUp} custom={0} className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">
                Industrial · Electrical · Instrumentation
              </motion.p>
              <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-6">
                Trusted Partner for{" "}
                <span className="relative inline-block">
                  <span className="text-gradient-gold">Calibration</span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-gold rounded-full" />
                </span>{" "}
                Excellence
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Delivering precision instrumentation and industrial services to major clients including SABIC, Saudi Aramco, and TASNEE.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex items-center gap-4">
                <a href="#" className="bg-navy text-secondary-foreground font-semibold px-8 py-3.5 rounded-full flex items-center gap-2 hover:bg-navy-light transition-colors">
                  Discover More <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="text-foreground font-semibold flex items-center gap-2 hover:text-primary transition-colors">
                  View Projects <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats - Horizontal cards */}
      <section className="bg-navy -mt-16 relative z-10 mx-6 md:mx-auto max-w-5xl rounded-2xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`p-8 text-center ${i !== stats.length - 1 ? "border-r border-navy-light" : ""}`}>
              <div className="text-3xl font-display font-extrabold text-primary">{s.value}</div>
              <div className="text-steel text-xs mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services - Card grid with accent line */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Do</span>
              <h2 className="font-display text-4xl font-bold text-foreground mt-2">Our Core Services</h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all">
              View All Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group relative bg-sand rounded-2xl p-8 hover:bg-background hover:shadow-xl transition-all border border-transparent hover:border-border cursor-pointer"
              >
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <s.icon className="w-10 h-10 text-primary mb-5" />
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-gradient-gold py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy">Ready to Get Started?</h2>
            <p className="text-navy/70 mt-1">Contact us for a free consultation and project estimate.</p>
          </div>
          <a href="#" className="bg-navy text-secondary-foreground font-semibold px-8 py-3.5 rounded-full flex items-center gap-2 hover:bg-navy-light transition-colors flex-shrink-0">
            Contact Us <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="PicsArabia" className="h-10" />
                <span className="font-display text-xl font-bold text-secondary-foreground">
                  PICS<span className="text-primary">ARABIA</span>
                </span>
              </div>
              <p className="text-steel text-sm leading-relaxed">
                Pioneer in Industrial, Electrical, and Instrumentation services across Saudi Arabia.
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold text-secondary-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About Us", "Services", "Projects", "Certifications", "Career"].map((link) => (
                  <a key={link} href="#" className="block text-steel text-sm hover:text-primary transition-colors">{link}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold text-secondary-foreground mb-4">Contact</h4>
              <div className="space-y-3 text-steel text-sm">
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> sales@picsarabia.com</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> (+966) 13 8021276</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Al Taawun, Al Khobar 34644, KSA</p>
              </div>
            </div>
          </div>
          <div className="border-t border-navy-light mt-12 pt-8 text-center">
            <p className="text-steel text-sm">© 2025 PicsArabia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PreviewThree;
