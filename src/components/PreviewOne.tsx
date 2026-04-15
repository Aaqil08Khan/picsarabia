import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { services, stats } from "@/data/siteData";
import heroImg from "@/assets/hero-industrial.jpg";
import logo from "@/assets/logo.png";
import { ArrowRight, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const PreviewOne = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar variant="light" />

      {/* Hero */}
      <section className="relative h-[600px] overflow-hidden">
        <img src={heroImg} alt="Industrial lab" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">Pioneer in Industrial Services</span>
              </motion.div>
              <motion.h1 variants={fadeUp} custom={1} className="font-display text-5xl md:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
                Precision. <span className="text-gradient-gold">Accuracy.</span> Reliability.
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-steel text-lg mb-8 max-w-lg">
                Superior quality industrial, electrical, and instrumentation services across Saudi Arabia and the GCC.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex gap-4">
                <a href="#" className="bg-gradient-gold text-secondary-foreground font-semibold px-8 py-3 rounded-md shadow-gold hover:opacity-90 transition-opacity flex items-center gap-2">
                  Our Services <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="border border-steel/30 text-secondary-foreground px-8 py-3 rounded-md hover:border-primary transition-colors">
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy py-6">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-display font-bold text-primary">{s.value}</div>
              <div className="text-steel text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">About PicsArabia</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                We provide superior quality industrial services across Saudi Arabia.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                PICSARABIA is a Pioneer in Industrial, Electrical, and Instrumentation services. We offer our valuable clients guaranteed control process, instrumentation, and related services ensuring stability, accuracy, and reliability seamlessly in diversified sectors.
              </p>
              <a href="#" className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sand rounded-lg p-6 border border-border">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mb-4">
                  <img src={logo} alt="" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">Professional Team</h3>
                <p className="text-muted-foreground text-sm">Experienced, innovation-driven subject matter experts.</p>
              </div>
              <div className="bg-sand rounded-lg p-6 border border-border mt-8">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 text-accent-foreground font-bold text-lg">24/7</div>
                <h3 className="font-display font-bold text-foreground mb-2">Always Available</h3>
                <p className="text-muted-foreground text-sm">Our support services are available around the clock.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-sand">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center gap-2 justify-center mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Services</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="font-display text-4xl font-bold text-foreground">What We Do Best</h2>
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
                className="bg-background rounded-lg p-8 border border-border hover:shadow-gold hover:border-primary/30 transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gradient-gold group-hover:text-secondary-foreground transition-all">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                <a href="#" className="text-primary text-sm font-semibold mt-4 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read More <ChevronRight className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={logo} alt="PicsArabia" className="h-8" />
            <span className="font-display text-lg font-bold text-secondary-foreground">
              PICS<span className="text-primary">ARABIA</span>
            </span>
          </div>
          <p className="text-steel text-sm">© 2025 PicsArabia. All rights reserved. Al Khobar, Saudi Arabia.</p>
        </div>
      </footer>
    </div>
  );
};

export default PreviewOne;
