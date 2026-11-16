import {
  Cable,
  Cpu,
  Headset,
  MonitorCog,
  Network,
  Router,
  ShieldCheck,
  Wifi,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "./Skills";
import connectedDevices from "../assets/connected-devices.webp";
import NetworkDiagram from "./NetworkDiagram";
import MaintenanceDiagram from "./MaintenanceDiagram";
import { RackDiagram, WifiDiagram } from "./NetworkExtras";

const networkServices = [
  {
    icon: Network,
    title: "Network Design & Installation",
    description:
      "Site survey, LAN/WAN design and tidy installation for offices, schools and shops — planned so it still holds up when the team grows.",
  },
  {
    icon: Router,
    title: "Router & Switch Configuration",
    description:
      "VLANs, routing, DHCP/DNS and firewall rules set up and documented, rather than left on factory defaults.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Setup & Coverage",
    description:
      "Access point placement, separate SSIDs for staff and guests, and channel tuning for reliable coverage across the building.",
  },
  {
    icon: Cable,
    title: "Structured Cabling",
    description:
      "Cat5e/Cat6 termination, patch panels, labelling and end-to-end testing, so faults are easy to trace later.",
  },
  {
    icon: Wrench,
    title: "Troubleshooting & Maintenance",
    description:
      "Fault finding for slow links, dropped connections, loops and cabling damage, plus scheduled health checks.",
  },
  {
    icon: Headset,
    title: "Support & Monitoring",
    description:
      "Remote and on-site support, uptime monitoring and backups for the machines and services running on your network.",
  },
];

const maintenanceServices = [
  {
    icon: Cpu,
    title: "Computer Repair & Upgrades",
    description:
      "Hardware diagnostics, RAM and SSD upgrades, cleaning, fan and power fixes, and part replacement for desktops and laptops.",
  },
  {
    icon: MonitorCog,
    title: "Software Setup & Maintenance",
    description:
      "OS installation and updates, drivers, antivirus, office tools and printer setup, plus recovery of data from machines that will not boot.",
  },
];

function GroupHeading({ children }) {
  return (
    <h3 className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-cyan-300/90">
      <span className="h-px w-6 bg-cyan-400/40" />
      {children}
    </h3>
  );
}

function ServiceCards({ items }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="glass rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/25"
        >
          <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
            <Icon size={18} />
          </span>
          <h4 className="mb-2 font-display text-base sm:text-lg font-semibold text-white">
            {title}
          </h4>
          <p className="text-sm leading-relaxed text-slate-400">{description}</p>
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24">
      <div className="absolute left-0 top-1/3 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-cyan-600/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="// it & network support"
          title="IT & Network Services"
          subtitle="Beyond software: I design, install and support the networks an organisation runs on, and keep the computers on it working."
        />

        <div className="mb-10 md:mb-12">
          <GroupHeading>Network &amp; connectivity</GroupHeading>

          <div className="glass mb-5 overflow-hidden rounded-2xl p-4 sm:mb-6 sm:p-6">
            <NetworkDiagram />
          </div>

          <div className="mb-6 grid grid-cols-1 gap-5 sm:mb-8 sm:grid-cols-2 sm:gap-6">
            <figure className="glass overflow-hidden rounded-2xl p-4 sm:p-5">
              <RackDiagram />
              <figcaption className="mt-2 text-center text-xs text-slate-500">
                Switch cabinet, patch panel and outlets
              </figcaption>
            </figure>
            <figure className="glass overflow-hidden rounded-2xl p-4 sm:p-5">
              <WifiDiagram />
              <figcaption className="mt-2 text-center text-xs text-slate-500">
                Wi-Fi coverage across a floor plan
              </figcaption>
            </figure>
          </div>

          <figure className="glass mx-auto mb-6 max-w-2xl overflow-hidden rounded-2xl p-4 sm:mb-8 sm:p-5">
            <img
              src={connectedDevices}
              alt="Isometric illustration of a house surrounded by connected devices — TV, speakers, camera, printer, washing machine, smart locks, phone and laptop"
              width={900}
              height={800}
              loading="lazy"
              decoding="async"
              className="mx-auto block h-auto max-h-[420px] w-auto max-w-full rounded-xl"
            />
            <figcaption className="mt-3 text-center text-xs text-slate-500">
              Every device on the network — from access points to printers and
              cameras — installed, documented and supported
            </figcaption>
          </figure>

          <ServiceCards items={networkServices} />
        </div>

        <div className="mb-10 md:mb-12">
          <GroupHeading>Computer maintenance</GroupHeading>

          <div className="glass mb-5 overflow-hidden rounded-2xl p-4 sm:mb-6 sm:p-6">
            <MaintenanceDiagram />
          </div>

          <ServiceCards items={maintenanceServices} />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl glass p-5 sm:flex-row sm:p-6">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <ShieldCheck size={20} className="hidden shrink-0 text-cyan-300 sm:block" />
            <p className="text-sm text-slate-300">
              Need a network installed, a computer repaired or your IT kept in
              order? Tell me the setup and what is going wrong.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            Request IT support
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
