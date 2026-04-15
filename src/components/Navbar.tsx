import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

interface NavbarProps {
  variant: "light" | "dark" | "transparent";
}

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Clients & Partners", to: "/clients-partners" },
  { label: "Certifications", to: "/certifications" },
  { label: "Career", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

const Navbar = ({ variant }: NavbarProps) => {
  const isDark = variant === "dark" || variant === "transparent";
  const bgClass = variant === "transparent" 
    ? "bg-transparent" 
    : variant === "dark" 
      ? "bg-navy" 
      : "bg-background";

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className={`${isDark ? "bg-navy" : "bg-sand"} px-4 sm:px-6`}>
        <div className="border-b border-border/20">
          <div className="w-full py-2 sm:py-3">
            <div className="w-full flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:gap-5 text-xs sm:text-sm md:text-base text-white/90 font-medium">
              <a href="mailto:sales@picsarabia.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="break-words sm:whitespace-nowrap">sales@picsarabia.com</span>
              </a>

              <span className="hidden sm:inline text-primary/40">•</span>

              <a href="tel:+966138021276" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="whitespace-nowrap">(+966) 13 8021276</span>
              </a>

              <span className="hidden sm:inline text-primary/40">•</span>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="whitespace-nowrap">Al Khobar, KSA</span>
              </div>
            </div>
          </div>

          <div className="container mx-auto flex items-center justify-between py-3">
            <div className="flex items-center gap-0.5">
              <img src={logo} alt="PicsArabia" className="h-10" />
              <span className={`font-display text-xl font-bold ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
                PICS<span className="text-primary">ARABIA</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Nav */}
      <nav className={`${bgClass} ${variant === "transparent" ? "absolute top-[52px] left-0 right-0 z-50" : ""} border-b border-border/20`}>
        <div className="container mx-auto px-6 overflow-x-hidden">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-0">
              {navItems.map((item, i) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`min-w-[120px] sm:min-w-[140px] md:min-w-0 px-3 py-2 text-[0.78rem] sm:text-sm font-medium text-center transition-all ${
                    i === 0
                      ? "bg-primary text-primary-foreground"
                      : isDark
                        ? "text-primary-foreground/70 hover:text-primary"
                        : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
    </header>
  );
};

export default Navbar;
