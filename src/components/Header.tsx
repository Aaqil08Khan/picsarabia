import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="border-b border-steel/20 sticky top-0 z-50 bg-foreground/95 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-10 text-xs text-steel border-b border-steel/10">
          <div className="flex items-center gap-6">
            <a href="mailto:sales@picsarabia.com" className="hover:text-primary transition-colors">
              sales@picsarabia.com
            </a>
            <a href="tel:+966138021276" className="hover:text-primary transition-colors">
              (+966) 13 8021276
            </a>
          </div>
          <div className="text-steel">Al Khobar 34644, KSA</div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="PicsArabia" className="h-10" />
            <span className="font-display text-lg font-extrabold tracking-tight">PICSARABIA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-xs uppercase tracking-[0.15em] font-semibold">
            <Link
              to="/"
              className="px-4 py-2 text-steel hover:text-primary transition-colors duration-300"
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("about")}
                className="px-4 py-2 text-steel hover:text-primary transition-colors duration-300 flex items-center gap-1 group-hover:text-primary"
              >
                About Us
                <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-foreground border border-steel/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  to="/about/company"
                  className="block px-4 py-3 text-steel hover:text-primary hover:bg-navy-light transition-colors border-b border-steel/10"
                >
                  About Company
                </Link>
                <Link
                  to="/about/team"
                  className="block px-4 py-3 text-steel hover:text-primary hover:bg-navy-light transition-colors border-b border-steel/10"
                >
                  Our Team
                </Link>
                <Link
                  to="/about/vision"
                  className="block px-4 py-3 text-steel hover:text-primary hover:bg-navy-light transition-colors"
                >
                  Vision & Mission
                </Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("services")}
                className="px-4 py-2 text-steel hover:text-primary transition-colors duration-300 flex items-center gap-1 group-hover:text-primary"
              >
                Our Services
                <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-foreground border border-steel/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  to="/services/flow-calibration"
                  className="block px-4 py-3 text-steel hover:text-primary hover:bg-navy-light transition-colors border-b border-steel/10"
                >
                  Flow Calibration
                </Link>
                <Link
                  to="/services/pressure-temperature"
                  className="block px-4 py-3 text-steel hover:text-primary hover:bg-navy-light transition-colors border-b border-steel/10"
                >
                  Pressure & Temperature
                </Link>
                <Link
                  to="/services/metering"
                  className="block px-4 py-3 text-steel hover:text-primary hover:bg-navy-light transition-colors border-b border-steel/10"
                >
                  Dimensional Metrology
                </Link>
                <Link
                  to="/services/field-services"
                  className="block px-4 py-3 text-steel hover:text-primary hover:bg-navy-light transition-colors border-b border-steel/10"
                >
                  Field Services
                </Link>
                <Link
                  to="/services/training"
                  className="block px-4 py-3 text-steel hover:text-primary hover:bg-navy-light transition-colors"
                >
                  Training & Consultation
                </Link>
              </div>
            </div>

            <Link
              to="/projects"
              className="px-4 py-2 text-steel hover:text-primary transition-colors duration-300"
            >
              Projects
            </Link>

            <Link
              to="/certifications"
              className="px-4 py-2 text-steel hover:text-primary transition-colors duration-300"
            >
              Certifications
            </Link>

            <Link
              to="/careers"
              className="px-4 py-2 text-steel hover:text-primary transition-colors duration-300"
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className="px-4 py-2 text-steel hover:text-primary transition-colors duration-300"
            >
              Contact Us
            </Link>
          </nav>

          <Link
            to="/quote"
            className="bg-primary hover:bg-gold-light text-primary-foreground text-xs font-bold uppercase tracking-wider px-6 py-2.5 transition-colors duration-300"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
