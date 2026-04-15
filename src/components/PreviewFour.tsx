import { motion, animate, useMotionValue, useTransform, useInView } from "framer-motion";
import { services, stats } from "@/data/siteData";
import { clientsData } from "@/data/clientsData";
import heroImg from "@/assets/hero-nightshift.jpg";
import sectionImg from "@/assets/hero-refinery.jpg";
import logo from "@/assets/logo.png";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const AnimatedStat = ({ value }: { value: string }) => {
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: true, margin: "-20px" });
  const target = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration: 1.2,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
    return;
  }, [isInView, motionValue, target]);

  return (
    <div ref={countRef} className="inline-flex items-baseline gap-1">
      <span className="text-5xl font-display font-black text-primary">{displayValue}</span>
      <span className="text-5xl font-display font-black text-primary">{suffix}</span>
    </div>
  );
};

/** Preview 4 — "Brutalist Industrial": Raw, bold typography, asymmetric layout, exposed grid lines */
const PreviewFour = () => {
  return (
    <div className="min-h-screen bg-foreground font-body text-secondary-foreground overflow-x-hidden">
      {/* Hero — left-aligned with overlaid stats on right */}
      <section className="relative overflow-hidden h-[calc(100dvh-76px)] sm:h-auto sm:min-h-screen md:min-h-[80vh] lg:min-h-[90vh]">
        <img src={heroImg} alt="Industrial site" className="absolute inset-0 w-full h-full object-cover object-center sm:object-top" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(220,25%,8%,0.92) 0%, hsla(220,25%,8%,0.5) 100%)" }} />
        
        {/* Desktop stats overlay — positioned absolutely on hero */}
        <div className="hidden lg:flex absolute top-1/3 lg:top-[34%] right-10 transform -translate-y-0 lg:-translate-y-1/4 flex-col h-auto items-start justify-start pointer-events-none gap-6 z-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.1, ease: "easeOut" }}
              className="pointer-events-auto px-6 py-5 border border-white/20 rounded-sm bg-navy/40 backdrop-blur-sm hover:border-white/40 transition-colors"
            >
              <div className="text-5xl font-display font-black text-primary">
                <AnimatedStat value={s.value} />
              </div>
              <div className="text-steel text-xs uppercase tracking-wider mt-2 whitespace-nowrap">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="relative flex flex-col lg:flex-row items-stretch h-full sm:h-auto sm:min-h-screen">
          {/* Left content section */}
          <div className="flex-1 flex items-center sm:items-center lg:items-start justify-start lg:justify-start px-6 md:px-12 lg:px-20 pt-0 sm:pt-0 md:pt-12 lg:pt-20 pb-0 sm:pb-0">
            <div className="w-full max-w-6xl">
              <motion.div initial="hidden" animate="visible">
                <motion.p variants={fadeUp} custom={0} className="text-primary text-xs sm:text-sm md:text-base uppercase tracking-[0.35em] font-bold mb-3">
                  PICSARABIA FOR MEASUREMENT CO.
                </motion.p>
                <motion.h1 variants={fadeUp} custom={1} className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.25rem] 2xl:text-[6.25rem] font-extrabold leading-[1.05] md:leading-[1.02] mb-5 text-left max-w-[clamp(290px,88vw,980px)]">
                  DEFINING ACCURACY,<br />
                  <span className="text-gradient-gold">DELIVERING TRUST.</span>
                </motion.h1>
                <motion.p variants={fadeUp} custom={2} className="text-steel text-base md:text-lg max-w-2xl">
                  Providing trusted bespoke solutions for the Oil & Gas, Petrochemicals, Power, Manufacturing, Construction, and EPC sectors. Accredited by ISO/IEC 17025 and ISO 9001, we are built on precision, reliability, and fast turnaround.
                </motion.p>
                <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6 mt-8">
                  <Link to="/services" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-10 py-4 sm:px-12 sm:py-5 text-base uppercase tracking-wider hover:bg-gold-light transition-colors">
                    <span>Explore Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      {/* Stats on mobile — next section after hero */}
      <section className="lg:hidden bg-navy/80 backdrop-blur-sm border-t border-steel/20 pt-6"> 
        <div className="container mx-auto px-6 py-12">
          <h3 className="text-primary text-sm uppercase tracking-[0.3em] font-bold mb-8">Our Impact</h3>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: 0.1 + stats.indexOf(s) * 0.08, ease: "easeOut" }}
              >
                <div className="text-4xl md:text-5xl font-display font-black text-primary">
                  <AnimatedStat value={s.value} />
                </div>
                <div className="text-steel text-xs md:text-sm uppercase tracking-wider mt-2">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About highlight section — large image + brutalist copy */}
      <section className="py-24 bg-[#0b121d] border-t border-b border-steel/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="relative overflow-hidden border-2 border-primary/40 rounded-sm drop-shadow-[8px_8px_0_rgba(255,197,0,0.3)]">
              <img
                src={sectionImg}
                alt="Industrial refinery team member"
                className="w-full h-full object-cover min-h-[16rem] sm:min-h-[20rem] md:min-h-[22rem] filter saturate-[1.1] brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-black/35" />
            </div>

            <div>
              <p className="text-primary text-xs uppercase tracking-[0.3em] font-bold mb-4">ABOUT PICSARABIA</p>
              <h2 className="font-display text-5xl md:text-6xl font-extrabold leading-[1.05] text-white mb-6">
                Accreditation, Quality, Authority
              </h2>
              <p className="text-steel text-lg leading-relaxed mb-8">
                PICSARABIA delivers accredited calibration, instrumentation, automation, and industrial services with full support for critical industries across the Kingdom. We drive operational reliability and compliance via ISO/IEC 17025 labs, ISO 9001 processes, and vendor approvals from Saudi Aramco, SABIC, and SEC.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-5 bg-navy/80 border border-primary/50 rounded-sm">
                  <p className="text-3xl font-display font-black text-primary">500+</p>
                  <p className="text-steel uppercase tracking-wider text-xs">Projects Delivered</p>
                </div>
                <div className="p-5 bg-navy/80 border border-primary/50 rounded-sm">
                  <p className="text-3xl font-display font-black text-primary">100+</p>
                  <p className="text-steel uppercase tracking-wider text-xs">Satisfied Industrial Clients</p>
                </div>
              </div>

              <Link to="/about" className="inline-flex items-center justify-center gap-2 uppercase tracking-wider font-bold text-black bg-primary py-4 px-8 border-2 border-secondary-foreground hover:bg-gold-light transition-colors">
                More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services — horizontal scroll cards */}
      <section className="py-20 border-b border-steel/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-0">
            <div>
              <p className="text-primary text-xs uppercase tracking-[0.3em] font-bold mb-2">Our Expertise</p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold">WHAT WE DO</h2>
            </div>
            <div className="hidden md:block h-px w-1/3 bg-steel/20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-steel/10">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="bg-foreground p-12 md:p-14 group hover:bg-navy-light transition-colors min-h-[18rem]"
              >
                <span className="text-primary/30 font-display text-5xl md:text-6xl font-extrabold">0{i + 1}</span>
                <h3 className="font-display text-2xl md:text-3xl font-black mt-4 mb-3">{s.title}</h3>
                <p className="text-steel text-base md:text-lg leading-relaxed">{s.description}</p>
                <Link to={`/${s.id}`} className="text-primary text-sm font-bold mt-6 inline-flex items-center gap-1 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients marquee */}
      <section className="py-16 border-b border-steel/10 bg-navy-light/20">
        <div className="container mx-auto px-6 overflow-hidden">
          <p className="text-steel text-xs uppercase tracking-[0.2em] font-bold mb-6">Trusted By Leading Industries</p>
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: [0, -1200, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {clientsData.map((client) => {
              const src = new URL(`../assets/clients/${client.file}`, import.meta.url).href;
              return (
                <div key={client.name} className="flex items-center justify-center px-6 py-4 bg-white rounded-sm min-w-[200px] h-[70px]">
                  <img
                    src={src}
                    alt={client.name}
                    className="max-h-[50px] max-w-[90%] object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const next = e.currentTarget.nextElementSibling as HTMLElement;
                      if (next) next.style.display = "block";
                    }}
                  />
                  <div className="hidden text-primary font-display font-black text-sm uppercase tracking-wider text-center">
                    {client.name}
                  </div>
                </div>
              );
            })}
            {clientsData.map((client, idx) => {
              const src = new URL(`../assets/clients/${client.file}`, import.meta.url).href;
              return (
                <div key={`dup-${client.name}-${idx}`} className="flex items-center justify-center px-6 py-4 bg-white rounded-sm min-w-[200px] h-[70px]">
                  <img
                    src={src}
                    alt={client.name}
                    className="max-h-[50px] max-w-[90%] object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const next = e.currentTarget.nextElementSibling as HTMLElement;
                      if (next) next.style.display = "block";
                    }}
                  />
                  <div className="hidden text-primary font-display font-black text-sm uppercase tracking-wider text-center">
                    {client.name}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default PreviewFour;
