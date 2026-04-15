import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const serviceItems = [
  { id: "instrument-calibration", label: "Instrument Calibration Services" },
  { id: "shutdown-maintenance", label: "Turnaround & Shutdown Maintenance" },
  { id: "field-services", label: "Field Services" },
  { id: "prover-calibration", label: "Prover Calibration Services" },
  { id: "industrial-trading", label: "Industrial Trading" },
];

const SiteHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg bg-[#050d1e] text-white">
      <div className="hidden md:block border-b border-primary/30 bg-gold text-black">
        <div className="container mx-auto flex flex-col gap-2 px-4 py-2 text-xs text-black/90 sm:px-6 sm:text-sm md:flex-row md:items-center md:justify-between md:text-base overflow-visible">
          <div className="flex items-center gap-2 sm:gap-3 min-h-fit">
            <span className="font-semibold">Email:</span>
            <a href="mailto:sales@picsarabia.com" className="break-all transition-colors hover:text-white active:text-white">sales@picsarabia.com</a>
          </div>
          <div className="flex flex-col items-start gap-2 min-h-fit sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Phone:</span>
              <a href="tel:+966138021276" className="whitespace-nowrap transition-colors hover:text-white active:text-white">(+966) 13 8021276</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Location:</span>
              <a
                href="https://maps.google.com/?q=Al+Khobar+34644,+KSA"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap transition-colors hover:text-white active:text-white"
              >
                Al Khobar 34644, KSA
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-6 py-2 bg-[#050d1e] text-white">
        <Link to="/" className="flex items-center gap-0.5 min-w-[220px]">
          <img src={logo} alt="PicsArabia" className="h-12 w-12" />
          <span className="text-2xl md:text-4xl font-black tracking-wider">PICSARABIA</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 text-xs md:text-sm font-bold uppercase tracking-widest whitespace-nowrap">
          <Link to="/" className="text-white hover:text-gold transition-colors">Home</Link>
          <div className="group relative">
            <Link to="/about" className="text-white hover:text-gold transition-colors">About Us</Link>
            <div className="absolute left-0 top-full z-50 hidden min-w-[220px] rounded border border-white/15 bg-[#08132c] p-2 shadow-2xl group-hover:block">
              <Link to="/about" className="block px-3 py-2 text-xs text-white hover:bg-white/10">About PicsArabia</Link>
              <Link to="/about/founder" className="block px-3 py-2 text-xs text-white hover:bg-white/10">Founder</Link>
            </div>
          </div>
          <div className="group relative">
            <Link to="/services" className="text-white hover:text-gold transition-colors">Our Services</Link>
            <div className="absolute left-0 top-full z-50 hidden min-w-[260px] rounded border border-white/15 bg-[#08132c] p-2 shadow-2xl group-hover:block">
                {serviceItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/services/${item.id}`}
                    className="block px-3 py-2 text-xs text-white hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>
          <Link to="/projects" className="text-white hover:text-gold transition-colors">Projects</Link>
          <Link to="/certifications" className="text-white hover:text-gold transition-colors">Certifications</Link>
          <Link to="/careers" className="text-white hover:text-gold transition-colors">Career</Link>
          <Link to="/contact" className="text-white hover:text-gold transition-colors">Contact Us</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center text-white hover:text-gold transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Get Quote */}
        <Link
          to="/contact"
          className="hidden lg:block bg-gold px-4 py-2 md:px-5 md:py-2 text-xs md:text-sm font-bold uppercase text-white shadow-lg hover:bg-gold-dark transition-colors"
        >
          Get Quote
        </Link>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#08132c]">
          <nav className="flex flex-col px-6 py-4 gap-2">
            <Link to="/" className="text-white hover:text-gold transition-colors py-2">Home</Link>
            <details className="py-2">
              <summary className="text-white hover:text-gold transition-colors cursor-pointer">About Us</summary>
              <div className="flex flex-col gap-2 mt-2 ml-4">
                <Link to="/about" className="text-white hover:text-gold transition-colors text-sm">About PicsArabia</Link>
                <Link to="/about/founder" className="text-white hover:text-gold transition-colors text-sm">Founder</Link>
              </div>
            </details>
            <details className="py-2">
              <summary className="text-white hover:text-gold transition-colors cursor-pointer">Our Services</summary>
              <div className="flex flex-col gap-2 mt-2 ml-4">
                {serviceItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/services/${item.id}`}
                    className="text-white hover:text-gold transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link to="/projects" className="text-white hover:text-gold transition-colors py-2">Projects</Link>
            <Link to="/certifications" className="text-white hover:text-gold transition-colors py-2">Certifications</Link>
            <Link to="/careers" className="text-white hover:text-gold transition-colors py-2">Career</Link>
            <Link to="/contact" className="text-white hover:text-gold transition-colors py-2">Contact Us</Link>
            <Link
              to="/contact"
              className="bg-gold px-4 py-3 text-xs md:text-sm font-bold uppercase text-white shadow-lg hover:bg-gold-dark transition-colors mt-4"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
