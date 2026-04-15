import { Droplets, Gauge, Wrench, BarChart3, Settings, GraduationCap, Activity, Cog  } from "lucide-react";

export const services = [
  {
    id: "instrument-calibration",
    icon: Gauge,
    title: "Instrument Calibration Services",
    description: "ISO/IEC 17025 accredited instrument calibration with full coverage of flow, pressure, temperature, and process sensors.",
  },
  {
    id: "shutdown-maintenance",
    icon: Settings,
    title: "Turnaround & Shutdown Maintenance",
    description: "Planned outage services including calibration, maintenance, and turnaround readiness for industrial utilities.",
  },
  {
    id: "field-services",
    icon: Wrench,
    title: "Field Services",
    description: "On-site support for instrument installation, verification, calibration and live troubleshooting.",
  },
  {
    id: "prover-calibration",
    icon: Droplets,
    title: "Prover Calibration Services",
    description: "Prover and custody flow meter calibration for fiscal metering, using certified proof plates and traceable standards.",
  },
  {
    id: "industrial-trading",
    icon: BarChart3,
    title: "Industrial Trading",
    description: "Industrial trading solutions for instrumentation, spares, and maintenance products with authorized vendor partnerships.",
  },
  {
    id: "custody-metering",
    icon: Activity,
    title: "Custody Metering Solutions",
    description: "Precision-engineered custody transfer metering solutions ensuring high-accuracy measurement and compliance for seamless high-value fluid transactions.",
  },
  {
  id: "rotating-equipment",
  icon: Cog,
  title: "Rotating Equipment Maintenance",
  description: "Maintenance and reliability services for rotating equipment including pumps, compressors, and fuel separation systems.",
},
];

export const stats = [
  { value: "11+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100+", label: "Satisfied Customers" },
  { value: "75+", label: "Professional Team" },
];

export const clients = [
  "SABIC",
  "SAUDI ARAMCO",
  "TASNEE",
  "Baker Hughes",
  "Rolls-Royce",
  "Bosch",
  "Siemens",
  "Panametrics",
];
