import mv_lv from "./mv-lv-substations.png";
import transmission_line from "./transmission-line.png";
import renewable from "./renewable.png";
import Battery_energy from "./Battery-energy.png";
import control_system from "./control-system.png";
import procurement_support from "./procurement-support.png";
import standard_quality from "./standard-quality.png";
import earthing from "./earthing.png";

export const service_data = [
  {
    id: 1,
    name: "Transmission Line Design",
    titles: [
      "Expert design services for transmission lines.",
      "Optimizing efficiency and safety.",
    ],
    img: transmission_line,
  },
  {
    id: 2,
    name: "Earthing System Design",
    titles: ["Specialized earthing system design.", "Ensuring safety."],
    img: earthing,
  },

  {
    id: 3,
    name: "SCADA and Control System Design",
    titles: [
      "Design and implementation of SCADA systems.",
      "Reliable monitoring and control.",
    ],
    img: control_system,
  },
  {
    id: 4,
    name: "Battery Energy Storage Design",
    titles: [
      "Advanced design for battery energy storage systems.",
      "Enhancing energy efficiency.",
    ],
    img: Battery_energy,
  },
  {
    id: 5,
    name: "Renewable Power plant Design – Solar Farm and Wind Farm",
    titles: [
      "Innovative design for solar farms.",
      "Wind farm design for maximum energy generation.",
    ],
    img: renewable,
  },
  {
    id: 6,
    name: "HV/MV/LV Substation / Switching station Design upto 760kV",
    titles: [
      "Comprehensive design solutions for HV/MV/LV substations.",
      "Switching station design up to 760kV.",
    ],
    img: mv_lv,
  },
  {
    id: 7,
    name: "Electrical Equipment Selection & Procurement Support",
    titles: [
      "Professional support for electrical equipment selection.",
      "Procurement support ensuring quality.",
    ],
    img: procurement_support,
  },
  {
    id: 8,
    name: "Quality Assurance and Control",
    titles: [
      "Ensuring the highest standards of quality.",
      "Control in all aspects of electrical design.",
    ],
    img: standard_quality,
  },
];
