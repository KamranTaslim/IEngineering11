import mv_lv from "../../assets/mv-lv-substations.jpg";
import transmission_line from "../../assets/transmission-line.jpg";
import renewable from "../../assets/renewable.jpg";
import Battery_energy from "../../assets/Battery-energy.jpg";
import control_system from "../../assets/control-system.jpg";
import procurement_support from "../../assets/procurement-support.jpg";
import standard_quality from "../../assets/standard-quality.jpg";
import earthing from "../../assets/earthing.jpg";

export const service_Detail_data = [
  {
    id: 1,
    name: "Transmission Line Design",
    titles: [
      "Basic Primary System Design Drawings (Route Plan Layouts, Profile, and Sections Layouts)",
      "Conductor Selection and Sizing",
      "Sag Tension Calculation in PLS-CADD",
      "Earthing System Drawings",
      "Tower Selection and Type",
      "Insulator Selection",
      "Steady-State and Transient Analysis",
      "Specification and Data Sheet for Conductor and OPGW Cables",
      "Specification and Data Sheet for Towers and Insulators",
      "Fitting Schedule",
      "Cable Schedules and Bill of Quantities",
      "Professional Support for Electrical Equipment Selection",
      "Procurement Support Ensuring Quality",
    ],
    img: transmission_line,
  },
  {
    id: 2,
    name: "Earthing System Design",

    titles: [
      "Soil Resistivity Analysis",
      "Preparation of HV Earthing System Designs",
      "HV Earthing System Modelling and Analysis using SES CDEGS software",
      "Earth Potential Rise (EPR) Assessment",
      "Calculation of Touch, Step, and Transfer Voltages",
      "Post-construction Fall of Potential (FOP) Resistance Measurement and Analysis",
      "Third-party Design Audits",
      "HV Earthing System Feasibility Studies",
      "Impressed Voltage Studies",
    ],

    img: earthing,
  },

  {
    id: 3,
    name: "SCADA and Control System Design",

    titles: [
      "System Architecture Design",
      "Network Topology: Designing communication network architecture (Ethernet, fiber optics, wireless) for reliable data transmission",
      "Redundancy: Implementing strategies (dual-path communication, redundant servers) to enhance system reliability",
    ],

    img: control_system,
  },
  {
    id: 4,
    name: "Battery Energy Storage Design",

    titles: [
      "Energy Capacity Determination: Determining required kWh based on application needs (peak shaving, load shifting, etc.)",
      "Power Output Specification: Specifying kW/MW to meet instantaneous demands and ensure grid stability",
      "System Configuration Design: Designing layout and battery arrangement for desired voltage, capacity, and output",
      "Inverter Selection and Compatibility: Choosing inverters to convert DC to AC for grid/local use, ensuring compatibility",
      "Power Electronics System Design: Designing PCS for efficient charge/discharge cycles, voltage/frequency regulation, grid support",
      "Interconnection Requirements Design: Designing to meet grid codes/regulatory requirements, ensuring stability and protection",
      "Grid Services Integration: Integrating BESS for grid ancillary services (frequency regulation, peak shaving, voltage support)",
      "SCADA and EMS Integration: Implementing SCADA/EMS to monitor, control, optimize BESS in real-time for grid conditions",
    ],

    img: Battery_energy,
  },
  {
    id: 5,
    name: "Renewable Power plant Design – Solar Farm and Wind Farm",
    titles: [
      "Innovative design for solar farms.",
      "Wind farm design for maximum energy generation.",
      "Basic Primary System Design Drawings.",
      "Load Flow Calculation using ETAP/DigSilent/PSSE software.",
      "AC & DC loss Calculation.",
      "MV reticulation design.",
      "Study & modelling of the solar farms using PVSyst software.",
      "Harmonic Filter Design for Solar Farm.",
      "PV Array racking Plan / Elevation design.",
      "MVPS Plan and Elevation design.",
      "String connection and Harness cable design.",
      "Piercing Connector Design and Sizing.",
      "DC and AC Cable Design using CYMCAP software.",
      "Earthing System design.",
      "Under-ground services layout.",
      "Cable Schedules and Bill of Quantities.",
      "Lightning Risk assessment (as per AS 1768).",
      "Specification of Central/String Inverter.",
      "Specification and datasheet of AC and DC cables.",
      "Specification and datasheet of Combiner Boxes.",
      "Specification and datasheet of SCADA system.",
      "Specification and datasheet of CCTV.",
      "Specification and datasheet of Weather station.",
      "Specification and datasheet of PPC.",
      "Specification and Data Sheet for Solar PV Module.",
      "Protection and Relay Setting reports using ETAP Software.",
      "MMS Design.",
      "Grid Integration - Support required for R1 and R2 testing and grid connection.",
    ],

    img: renewable,
  },
  {
    id: 6,
    name: "HV/MV/LV Substation / Switching station Design upto 760kV",

    titles: [
      "Basic Primary System Design Drawings (SLD, Layouts, Sections)",
      "Earthing System Design using CDEGS Software",
      "Insulation Co-ordination with EMTP Software",
      "Fault Level and Protection Report using ETAP Software",
      "Short Circuit Force Calculation",
      "Structural Interface",
      "Civil Interface",
      "Bus Bar and Conductor Selection and Sizing",
      "Lightning Protection Report with CDEGS Software",
      "HV Cable Sizing using CYMCAP Software",
      "Combined Solar Farm Fault Level Analysis with ETAP",
      "Harmonic Filter Design",
      "Arc Flash Studies",
      "Protection SLD and Secondary System Design",
      "SCADA Architectural Drawings",
      "SCADA Panel Schematic and GA Drawings",
      "Substation Automation System Drawings",
      "Transformer Specification and Datasheet",
      "Specification and Data Sheet for CB, CT, CVT, Isolator, SA, Power Cables",
      "Specification and Data Sheet for AIS and GIS Switchgear Panels",
      "Specification and Data Sheet for Optical Fiber Cable",
      "Cable Schedules and Bill of Quantities",
    ],

    img: mv_lv,
  },
  {
    id: 7,
    name: "Electrical Equipment Selection & Procurement Support",
    titles: [
      "Equipment Selection Calculations and Reports",
      "Component Evaluation: Selecting transformers, switchgear, circuit breakers, cables, control panels, and protective devices based on technical specs, reliability, efficiency, and lifecycle costs",
    ],

    img: procurement_support,
  },
  {
    id: 8,
    name: "Quality Assurance and Control",
    titles: [
      "Quality Standards: Establishing QA protocols to ensure procured equipment meets standards and performance criteria",
      "Inspection and Testing: Conducting FAT and SAT to verify equipment functionality and compliance before installation",
    ],
    img: standard_quality,
  },
];
