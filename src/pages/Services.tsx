import { motion } from "framer-motion";
import { services } from "@/data/siteData";
import { ArrowRight, Shield, Cog, Truck, Headphones, Zap, DollarSign } from "lucide-react";
import { useParams } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-foreground font-body text-secondary-foreground">
      {/* Page Header */}
      <section className="relative py-16 sm:py-24 lg:py-32 border-b border-steel/10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="text-primary text-xs uppercase tracking-[0.3em] font-bold mb-4">
              Our Services
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[0.95] mb-6 max-w-3xl break-words">
              COMPREHENSIVE<br />
              <span className="text-gradient-gold">CALIBRATION</span><br />
              SOLUTIONS
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-steel text-base sm:text-lg max-w-2xl">
              From precision flow measurement to dimensional metrology, we deliver ISO/IEC 17025 accredited services across all calibration needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* All Services Grid */}
      <section id="services" className="py-14 sm:py-20 border-b border-steel/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <motion.div id={service.id}
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group"
              >
                <div className="bg-navy-light/10 border border-steel/20 p-10 group-hover:border-primary/50 group-hover:bg-navy-light/20 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-display text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-steel mb-6 leading-relaxed text-sm">{service.description}</p>
                  <a
                    href={`/${service.id}`}
                    className="text-primary text-sm font-bold inline-flex items-center gap-2 uppercase tracking-wider group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 sm:py-20 border-b border-steel/10 bg-navy-light/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-extrabold mb-4">Why Choose PicsArabia?</h2>
            <p className="text-steel max-w-2xl mx-auto">
              We deliver comprehensive calibration and measurement solutions backed by expertise, accreditation, and customer-first service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Accredited & Certified Services", description: "ISO/IEC 17025 accredited laboratory with full compliance and trusted credentials" },
              { icon: Cog, title: "Customized & Solution-based Approach", description: "Tailored solutions designed to meet your specific calibration and operational needs" },
              { icon: Truck, title: "Pickup & Delivery", description: "Convenient on-site collection and delivery services for your instruments and equipment" },
              { icon: Headphones, title: "Trusted After-Sales Support", description: "Dedicated technical support and follow-up care ensuring long-term partnership" },
              { icon: Zap, title: "Quick Turnaround", description: "Fast service cycles without compromising on accuracy or quality standards" },
              { icon: DollarSign, title: "Competitive Pricing", description: "Cost-effective calibration solutions that deliver exceptional value for your investment" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="relative text-center"
                >
                  <div className="flex flex-col items-center">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-2">{item.title}</h4>
                    <p className="text-steel text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-steel text-lg mb-8">Ready to discuss your calibration needs?</p>
          <a
            href="/contact"
            className="bg-primary text-primary-foreground font-bold px-10 py-5 inline-flex items-center gap-3 text-sm uppercase tracking-wider hover:bg-gold-light transition-colors text-lg"
          >
            Request a Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
