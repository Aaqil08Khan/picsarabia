import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Award, ClipboardCheck } from "lucide-react";
import isoIecImg from "@/assets/isoiec.png";
import isoIafImg from "@/assets/iso iaf.png";
import ilacmraImg from "@/assets/ilac mra.png";
import saudiAccImg from "@/assets/saudi accredation centre.png";
import aramcoVendorImg from "@/assets/aramco vendor.png";
import sabicVendorImg from "@/assets/sabic vendor.png";
import saudiElecImg from "@/assets/saudi electric.png";
import swccImg from "@/assets/swcc.png";

const certificationCards = [
  { title: "ISO/IEC 17025:2017", logo: isoIecImg },
  { title: "ISO 9001:2015", logo: isoIafImg },
  { title: "ILAC-MRA", logo: ilacmraImg },
  { title: "Saudi Accreditation Centre", logo: saudiAccImg },
];

const vendorCards = [
  { name: "Saudi Aramco", logo: aramcoVendorImg },
  { name: "SABIC", logo: sabicVendorImg },
  { name: "Saudi Electricity Company", logo: saudiElecImg },
  { name: "SWCC", logo: swccImg },
];

const Certifications = () => (
  <main className="min-h-screen bg-black text-white font-body pb-24">
    <section className="py-16 sm:py-20 lg:py-24 border-b-4 border-primary bg-[#070d14]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[0.08em] md:tracking-[0.14em] mb-4 break-words">Accreditations & Approvals</h1>
        <p className="text-steel/80 text-base sm:text-lg leading-relaxed max-w-3xl">
          Internationally certified and trusted vendor providing ISO/IEC 17025 calibration services, ISO 9001 quality management, and approved vendor status with key national clients.
        </p>
      </div>
    </section>

    <section className="py-14 sm:py-16 lg:py-20 bg-[#0b0f18]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl grid gap-8 sm:gap-10 lg:grid-cols-2 mb-8">
        <div className="p-6 sm:p-8 bg-[#0d1220] rounded-sm transition-all hover:bg-[#0f1825] hover:-translate-y-1">
          <h2 className="font-display text-2xl sm:text-3xl font-black uppercase mb-6">ISO Accreditation</h2>
          <ul className="space-y-4 text-steel/80">
            <li className="flex gap-3 items-start">
              <ShieldCheck className="w-6 h-6 text-primary mt-1" />
              <div>
                <span className="font-bold text-white uppercase tracking-wider">ISO/IEC 17025:2017</span>
                <p className="mt-1">Accredited laboratory for testing and calibration with scope covering pressure, temperature, electrical, dimensional, and flow instrumentation.</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle className="w-6 h-6 text-primary mt-1" />
              <div>
                <span className="font-bold text-white uppercase tracking-wider">ISO 9001:2015</span>
                <p className="mt-1">Quality management system for consistent service delivery, continuous improvement, and customer satisfaction.</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Award className="w-6 h-6 text-primary mt-1" />
              <div>
                <span className="font-bold text-white uppercase tracking-wider">ILAC-MRA / GCC Recognition</span>
                <p className="mt-1">Mutual recognition agreements ensuring international acceptance of calibration certificates.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="p-6 sm:p-8 bg-[#0d1220] rounded-sm transition-all hover:bg-[#0f1825] hover:-translate-y-1">
          <h2 className="font-display text-2xl sm:text-3xl font-black uppercase mb-6">Approved Vendor Network</h2>
          <ul className="space-y-4 text-steel/80">
            <li className="flex gap-3 items-center"><ClipboardCheck className="w-5 h-5 text-primary" /> <span className="font-bold text-white">Saudi Aramco (Vendor ID: 10056571)</span></li>
            <li className="flex gap-3 items-center"><ClipboardCheck className="w-5 h-5 text-primary" /> <span className="font-bold text-white">SABIC (Vendor ID: 508307)</span></li>
            <li className="flex gap-3 items-center"><ClipboardCheck className="w-5 h-5 text-primary" /> <span className="font-bold text-white">Saudi Electricity Company (Vendor ID: 5013955)</span></li>
            <li className="flex gap-3 items-center"><ClipboardCheck className="w-5 h-5 text-primary" /> <span className="font-bold text-white">SWCC (Approved Vendor)</span></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl border-t border-steel/30 pt-8">
        <p className="text-steel/70 text-base leading-relaxed">
          <span className="text-primary font-bold">PICSARABIA</span> has also received appreciation from various clients for delivering high-quality services and supporting mission-critical operations.
        </p>
      </div>
    </section>

    <section className="py-14 sm:py-16 border-t border-steel/20 bg-[#080f17]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <h3 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-[0.08em] sm:tracking-[0.15em] mb-8">Our Certifications</h3>
        <motion.div
          className="relative overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          <motion.div
            className="flex w-max gap-4 sm:gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          >
            {[...certificationCards, ...certificationCards].map((card, index) => (
              <div key={`${card.title}-${index}`} className="min-w-[200px] h-[70px] rounded-sm bg-white flex items-center justify-center px-6 py-4">
                <img src={card.logo} alt={card.title} className="max-h-[50px] max-w-[90%] object-contain" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>

    <section className="py-14 sm:py-16 border-t border-steel/20 bg-[#0b0f18]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <h3 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-[0.08em] sm:tracking-[0.15em] mb-8">Approved Vendors</h3>
        <motion.div
          className="relative overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          <motion.div
            className="flex w-max gap-5 sm:gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          >
            {[...vendorCards, ...vendorCards].map((vendor, index) => (
              <div key={`${vendor.name}-${index}`} className="min-w-[200px] h-[70px] rounded-sm bg-white flex items-center justify-center px-6 py-4">
                <img src={vendor.logo} alt={vendor.name} className="max-h-[50px] max-w-[90%] object-contain" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  </main>
);

export default Certifications;
