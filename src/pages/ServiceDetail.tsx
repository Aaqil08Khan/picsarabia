import { useParams, Link } from "react-router-dom";
import { services } from "@/data/siteData";
import heroControlroom from "@/assets/hero-controlroom.jpg";
import heroIndustrial from "@/assets/hero-industrial.jpg";
import heroRefinery from "@/assets/hero-refinery.jpg";
import heroPrecision from "@/assets/hero-precision.jpg";
import custodyMetering from "@/assets/custody-metering-solutions.avif";
import rotatingEquipment from "@/assets/rotating-equipment.jpeg";

const serviceDetails = {
  "instrument-calibration": {
    hero: heroPrecision,
    title: "Instrument Calibration Services",
    summary:
      "Comprehensive instrument calibration for flow, pressure, temperature, and process measurement systems.",
    content: [
      "PICSARABIA has emerged as a leader in instrument calibration based on our deep metrology expertise and ISO/IEC 17025 accreditation.",
      "We support in-house and on-site calibrations for flow, pressure, temperature, level, and analytical instrumentation with traceable references and documented uncertainty.",
      "Our calibrations include turbine, positive displacement, Coriolis, ultrasonic, and prover-based flow systems for custody transfer and process control.",
    ],
  },
  "shutdown-maintenance": {
    hero: heroRefinery,
    title: "Shutdown Maintenance Services",
    summary:
      "Shutdown and turnaround support with integrated instrument maintenance, calibration, and re-commissioning.",
    content: [
      "During planned shutdowns, PICSARABIA mobilizes certified teams to deliver rapid, reliable calibration and repair services.",
      "We perform comprehensive system audits, loop checks, and troubleshooting to minimize downtime and ensure safe restart.",
      "Our workflows integrate with client maintenance systems for traceability, reporting, and ISO compliance.",
    ],
  },
  "field-services": {
    hero: heroIndustrial,
    title: "Field Services",
    summary:
      "On-site instrumentation and calibration services for critical assets at manufacturing, petrochemical, and utility facilities.",
    content: [
      "Our field services include instrument installation checks, loop validation, onsite calibration, and performance tuning.",
      "We are equipped to support remote and remote-line assets with mobile calibration labs and partner logistics.",
      "Field reporting is delivered with clear status updates, calibration certificates, and maintenance recommendations.",
    ],
  },
  "prover-calibration": {
    hero: heroControlroom,
    title: "Prover Calibration Services",
    summary:
      "Prover and custody flow calibration for accurate fiscal metering and regulatory compliance.",
    content: [
      "PICSARABIA provides prover calibration with emulsion, master meter, and volumetric proving methods.",
      "We ensure traceability to national and international standards and deliver complete uncertainty budgets.",
      "Our services cover prover certification, meter factor verification, and proof from calibration to field commissioning.",
    ],
  },
  "industrial-trading": {
    hero: heroRefinery,
    title: "Industrial Trading",
    summary:
      "Instrumentation trading solutions for valves, actuators, spares, and calibration accessories.",
    content: [
      "We supply industrial-grade measurement instruments and spare parts from approved global vendors.",
      "Our trading portfolio includes flow metering products, control valves, actuators, and precision tools.",
      "Clients can access trusted technical sourcing and support for procurement and inventory management.",
    ],
  },
  "custody-metering": {
    hero: custodyMetering,
    title: "Custody Metering Solutions",
    summary:
      "High-accuracy custody transfer metering systems designed for fiscal measurement, compliance, and reliable high-value fluid transactions.",
    content: [
      "PICSARABIA delivers advanced custody metering solutions engineered for precise measurement of oil, gas, and refined products in high-value transfer operations.",

      "Our systems are designed in compliance with international standards and client-specific requirements, ensuring traceability, repeatability, and audit-ready performance for fiscal metering applications.",

      "We support the complete lifecycle of custody transfer systems including system design, meter selection, skid integration, calibration, and commissioning.",

      "Our expertise covers turbine meters, Coriolis meters, ultrasonic flow meters, and prover systems, ensuring accurate volume and mass measurement under varying process conditions.",

      "With a strong focus on Saudi Aramco, SABIC, and SEC compliance, we ensure that all custody metering systems meet strict regulatory, contractual, and operational requirements.",
    ],
  },
  "rotating-equipment": {
    hero: rotatingEquipment,
    title: "Rotating Equipment Maintenance",
    summary:
      "Comprehensive maintenance and reliability solutions for critical rotating equipment including pumps, compressors, and fuel separation systems.",
    content: [
      "PICSARABIA provides specialized maintenance services for rotating equipment essential to industrial operations, ensuring optimal performance, efficiency, and extended asset life.",

      "Our expertise covers pumps, compressors, turbines, and fuel separation systems, supporting both preventive and corrective maintenance strategies tailored to operational requirements.",

      "We perform detailed inspection, alignment, vibration analysis, balancing, and performance diagnostics to detect early faults and prevent unexpected failures.",

      "Our team ensures proper installation checks, lubrication management, seal and bearing replacement, and system optimization to maintain peak operational efficiency.",

      "All maintenance activities are carried out in compliance with international standards and client specifications, ensuring reliability, safety, and minimal downtime across critical facilities."
    ],
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find((s) => s.id === serviceId);
  const details = serviceId ? serviceDetails[serviceId] : undefined;

  if (!service || !details) {
    return (
      <main className="min-h-screen bg-[#0a1322] text-white pb-24">
        <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold mb-6">
            Service Not Found
          </h1>
          <p className="text-steel/70 mb-6">
            The requested service does not exist. Please choose a service from
            the menu.
          </p>
          <Link to="/services" className="text-primary hover:underline">
            Back to Services
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050c1f] text-white pb-24">
      <section className="relative h-[46vh] sm:h-[42vh] overflow-hidden bg-[#02070f] border-b border-primary/30">
        <img
          src={details.hero}
          alt={details.title}
          className="absolute inset-0 h-full w-full object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
        <div className="absolute inset-0 container mx-auto flex items-center px-4 sm:px-6">
          <div>
            <p className="text-primary uppercase tracking-[0.25em] font-bold text-sm">
              Our Services
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold mt-3 leading-tight break-words">
              {details.title}
            </h1>
            <p className="text-steel/70 mt-4 max-w-2xl text-sm sm:text-base">
              {details.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <aside className="space-y-3 bg-[#0f1b35] border border-primary/20 p-4">
            <h2 className="text-primary font-bold uppercase text-xs tracking-widest mb-3">
              Service Menu
            </h2>
            {services.map((serviceItem) => (
              <Link
                key={serviceItem.id}
                to={`/${serviceItem.id}`}
                className={`block rounded-sm border px-4 py-3 text-sm font-bold transition-all ${serviceItem.id === serviceId
                    ? "bg-primary text-black border-black"
                    : "bg-[#111f3b] text-white/90 border-white/10 hover:bg-primary/20 hover:text-primary"
                  }`}
              >
                {serviceItem.title}
              </Link>
            ))}
          </aside>

          <article className="bg-[#0a172f] border border-primary/20 p-6 sm:p-9 rounded-sm shadow-[8px_8px_0_rgba(255,197,0,0.2)]">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold mb-4">
              {details.title}
            </h2>
            {details.content?.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-steel/80 mb-4 leading-relaxed text-base sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
            <div className="border border-primary/30 rounded-sm p-4 mb-8">
              <h3 className="text-primary font-bold mb-2">How it Works</h3>
              <ul className="list-disc list-inside text-steel/80 leading-relaxed text-sm">
                <li>Initial equipment inspection and condition assessment</li>
                <li>Vibration analysis and fault diagnostics</li>
                <li>Maintenance planning and component servicing</li>
                <li>Performance testing and system optimization</li>
                <li>Final reporting with reliability recommendations</li>
              </ul>
            </div>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-black bg-primary px-6 py-3 uppercase tracking-wider font-bold hover:bg-gold transition-colors"
              >
                Request a quote
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
