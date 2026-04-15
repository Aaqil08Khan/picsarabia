import { motion } from "framer-motion";
import { clientsData } from "@/data/clientsData";

const ClientsPartners = () => {
  return (
    <div className="min-h-screen bg-black text-white font-body">
      <section className="py-16 sm:py-20 lg:py-24 border-b-4 border-primary bg-[#070d14]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[0.08em] sm:tracking-[0.14em] md:tracking-[0.2em] mb-6 break-words">Clients & Partners</h1>
          <p className="text-steel/80 text-base sm:text-lg leading-relaxed mb-8">
            PICSARABIA works with the leading names in industry and energy, offering industrial calibration, instrumentation, and support services with proven quality and trusted results.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20 bg-[#0b0f18]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-[0.08em] sm:tracking-[0.15em] mb-8">Our Partners</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Meter Engineers",
                description: "Leading metrology consulting and instrumentation deployment for industrial facilities.",
                url: "https://meterengineers.com/",
              },
              {
                name: "Panametrics",
                description: "Global ultrasonic flow and gas analysis solutions for electric, gas, and utilities.",
                url: "https://www.panametrics.com/",
              },
              {
                name: "Valmet Energy Solutions",
                description: "Energy production and sustainable performance services, with turnkey instrumentation support.",
                url: "https://www.valmet.com/energyproduction/energy-solutions/",
              },
            ].map((partner, index) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#0f1625] p-6 sm:p-8 rounded-sm transition-all hover:bg-navy-light"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl sm:text-5xl font-display font-black text-primary/20">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-wide sm:tracking-wider text-white">{partner.name}</h3>
                </div>
                <p className="text-steel/70 leading-relaxed mb-7">{partner.description}</p>
                <span className="opacity-0 group-hover:opacity-100 block text-primary text-sm font-bold uppercase tracking-wider transition-opacity">
                  Learn more about {partner.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-[0.08em] sm:tracking-[0.15em] mb-8">Our Clients</h2>
          <div className="overflow-hidden border-2 border-primary p-6 bg-[#0d1220]">
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              initial={{ x: 0 }}
              animate={{ x: [0, -1200, 0] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {clientsData.map((client) => {
                const src = new URL(`../assets/clients/${client.file}`, import.meta.url).href;
                return (
                  <div key={client.name} className="flex items-center justify-center px-4 sm:px-6 py-4 bg-white rounded-sm min-w-[160px] sm:min-w-[200px] h-[72px] sm:h-[80px]">
                    <img
                      src={src}
                      alt={client.name}
                      className="max-h-[60px] max-w-[90%] object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const next = e.currentTarget.nextElementSibling as HTMLElement;
                        if (next) next.style.display = "block";
                      }}
                    />
                    <div className="hidden text-primary font-display font-black text-lg uppercase tracking-wider text-center">
                      {client.name}
                    </div>
                  </div>
                );
              })}
              {clientsData.map((client, idx) => {
                const src = new URL(`../assets/clients/${client.file}`, import.meta.url).href;
                return (
                  <div key={`dup-${client.name}-${idx}`} className="flex items-center justify-center px-4 sm:px-6 py-4 bg-white rounded-sm min-w-[160px] sm:min-w-[200px] h-[72px] sm:h-[80px]">
                    <img
                      src={src}
                      alt={client.name}
                      className="max-h-[60px] max-w-[90%] object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const next = e.currentTarget.nextElementSibling as HTMLElement;
                        if (next) next.style.display = "block";
                      }}
                    />
                    <div className="hidden text-primary font-display font-black text-lg uppercase tracking-wider text-center">
                      {client.name}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20 border-t border-steel/20 bg-[#080f17]">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl grid gap-6 md:grid-cols-2">
          <div className="border-2 border-primary p-6 bg-[#0d1320]">
            <h2 className="font-display text-3xl font-extrabold mb-4">Certified Vendor Network</h2>
            <ul className="list-disc list-inside text-steel/80 space-y-2 leading-relaxed">
              <li>ISO/IEC 17025:2017 Accredited Laboratory</li>
              <li>ISO 9001:2015 Certification</li>
              <li>Approved / Registered Vendor (Saudi Aramco, SABIC, SEC)</li>
            </ul>
          </div>
          <div className="border-2 border-primary p-6 bg-[#0d1320]">
            <h2 className="font-display text-3xl font-extrabold mb-4">How We Partner</h2>
            <p className="text-steel/80 leading-relaxed">
              We integrate with partner teams using transparent communication, compliance governance, and on-time execution. Our support includes procurement alignment, instrumentation deployment, and long-term maintenance planning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPartners;
