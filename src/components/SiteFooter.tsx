import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="bg-navy text-white pt-14 pb-10">
      <div className="container mx-auto grid gap-8 px-6 md:grid-cols-4">
        <div>
          <h4 className="font-display font-bold text-lg">PICSARABIA</h4>
          <p className="mt-3 text-sm text-steel/70">Leading calibration and metrology service provider in KSA.</p>
        </div>
        <div>
          <h5 className="font-semibold uppercase tracking-wider text-sm mb-3">Services</h5>
          <ul className="space-y-2 text-sm text-steel/80">
            <li>
              <Link to="/services" className="hover:text-primary transition-colors">Our Services</Link>
            </li>
            <li>
              <Link to="/services/instrument-calibration" className="hover:text-primary transition-colors">Instrument Calibration Services</Link>
            </li>
            <li>
              <Link to="/services/shutdown-maintenance" className="hover:text-primary transition-colors">Turnaround & Shutdown Maintenance</Link>
            </li>
            <li>
              <Link to="/services/field-services" className="hover:text-primary transition-colors">Field Services</Link>
            </li>
            <li>
              <Link to="/services/prover-calibration" className="hover:text-primary transition-colors">Prover Calibration Services</Link>
            </li>
            <li>
              <Link to="/services/industrial-trading" className="hover:text-primary transition-colors">Industrial Trading</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold uppercase tracking-wider text-sm mb-3">Company</h5>
          <ul className="space-y-2 text-sm text-steel/80">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary transition-colors">About PicsArabia</Link>
            </li>
            <li>
              <Link to="/certifications" className="hover:text-primary transition-colors">Certifications</Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold uppercase tracking-wider text-sm mb-3">Contact</h5>
          <p className="text-sm text-steel/80">sales@picsarabia.com</p>
          <p className="text-sm text-steel/80">(+966) 13 8021276</p>
          <p className="text-sm text-steel/80">Al Khobar, KSA</p>
          <a
            href="https://www.linkedin.com/company/picsarabia/posts/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-steel/80 transition-colors hover:text-primary"
            aria-label="PICSARABIA LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-steel/20 mt-8 pt-6 text-center text-sm text-steel/70">
        © {new Date().getFullYear()} PICSARABIA. All rights reserved.
      </div>
    </footer>
  );
};

export default SiteFooter;
