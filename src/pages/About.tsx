import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Zap, Shield, Handshake } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black font-body text-white">
      {/* Page Header */}
      <section id="about" className="relative py-16 sm:py-24 lg:py-32 border-b border-steel/10 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="text-primary text-xs uppercase tracking-[0.3em] font-bold mb-4">
              PICSARABIA FOR MEASUREMENT CO.
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[0.95] mb-6 max-w-3xl break-words">
              DEFINING ACCURACY,<br />
              <span className="text-gradient-gold">DELIVERING TRUST</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-steel text-base sm:text-lg max-w-2xl">
              Trusted and accredited calibration, instrumentation, automation, and industrial services across Saudi Arabia (Oil & Gas, Petrochemicals, Power, Manufacturing, Construction, EPC).
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-14 sm:py-20 border-b border-steel/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-4xl font-extrabold mb-6 text-white">About Our Company</h2>
              <p className="text-steel/70 mb-4 leading-relaxed">
                PICSARABIA for Measurement Co. is a
trusted and accredited provider of
calibration, instrumentation, automation,
and industrial services across the Kingdom
of Saudi Arabia. We proudly support
critical sectors including Oil & Gas,
Petrochemicals, Power, Manufacturing,
Construction, and EPC projects
              </p>
              <p className="text-steel mb-6 leading-relaxed">
                Since our inception, PICSARABIA has built a
strong reputation for precision, reliability,
and fast turnaround times. Our strength
lies in a highly skilled team of engineers
and technicians, supported by ISO/IEC
17025-accredited laboratories, ISO 9001
certification, and vendor approvals from
leading organizations such as Saudi
Aramco, SABIC, and SEC.
We understand that precise measurement
and reliable instrumentation are vital for
safe and efficient operations. That is why
our solutions are designed to deliver
accuracy, compliance, and operational
excellence, ensuring our clients achieve
their goals with confidence.
              </p>
              <a href="/contact" className="bg-primary text-primary-foreground font-bold px-8 py-4 inline-flex items-center gap-3 text-sm uppercase tracking-wider hover:bg-gold-light transition-colors">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-navy-light/20 border border-steel/20 p-12">
              <h3 className="font-display text-2xl font-bold mb-8">Key Highlights</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-primary text-xl font-extrabold flex-shrink-0">✓</span>
                  <span className="text-steel">ISO/IEC 17025 Accredited Laboratory</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-xl font-extrabold flex-shrink-0">✓</span>
                  <span className="text-steel">5+ Years in Precision Calibration</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-xl font-extrabold flex-shrink-0">✓</span>
                  <span className="text-steel">150+ Projects Successfully Completed</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-xl font-extrabold flex-shrink-0">✓</span>
                  <span className="text-steel">85+ Satisfied Industrial Clients</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-xl font-extrabold flex-shrink-0">✓</span>
                  <span className="text-steel">45+ Professional Team Members</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Message and Accreditations */}

      {/* Vision & Mission */}
      <section className="py-14 sm:py-20 border-b border-steel/10 bg-navy-light/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "Our mission is to deliver world-class, accredited, and cost-effective calibration, instrumentation, and industrial services that ensure accuracy, reliability, and compliance. We empower industries to achieve operational safety, efficiency, and performance in line with international standards.",
              },
              {
                icon: Zap,
                title: "Our Vision",
                description: "To be the most trusted partner of choice in Saudi Arabia and beyond, setting the benchmark for innovation, technical expertise, and customer-focused excellence in calibration and industrial services.",
              },
              {
                icon: Users,
                title: "Our Values",
                description: "Integrity, precision, innovation, and customer commitment. We believe in transparent service delivery and long-term partnerships with our clients.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group"
              >
                <div className="bg-foreground p-8 border border-steel/20 group-hover:border-primary/50 transition-colors h-full">
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-steel text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-bold mb-2">Professional Excellence</p>
            <h2 className="font-display text-4xl font-extrabold">Our Expert Team</h2>
          </div>
          <div className="bg-navy-light/20 border border-steel/20 p-12 rounded-sm">
            <p className="text-steel text-center max-w-2xl mx-auto leading-relaxed">
              Our team consists of experienced metrology professionals, certified calibration technicians, and quality assurance specialists. With decades of combined experience in precision measurement and calibration services, we are committed to delivering excellence in every project we undertake.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
