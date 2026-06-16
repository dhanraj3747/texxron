




// src/pages/SteamTurbinePage.tsx
import { Link } from "react-router";
import { 
  Gauge, Settings, Wifi, BatteryCharging, 
  GitMerge, Droplets, ArrowUpDown, Check, X 
} from "lucide-react";
import { Breadcrumb } from "../components/Breadcrumb";
import { PageTimestamp } from "../components/PageTimestamp";

const designFeatures = [
  { id: "mixed-pressure", icon: Gauge, title: "Mixed Pressure Induction", description: "Optimized for varying steam pressure conditions" },
  { id: "governors", icon: Settings, title: "Hydraulic Mechanical & Electronic Governors", description: "Precision speed control with multiple governor options" },
  { id: "remote-monitoring", icon: Wifi, title: "Remote Monitoring / Controls", description: "Advanced remote operation and diagnostics capability" },
  { id: "base-load", icon: BatteryCharging, title: "Base Load Operation", description: "Reliable continuous power generation" },
  { id: "parallel-operation", icon: GitMerge, title: "Parallel Operation with Local / National Grid", description: "Seamless grid synchronization capabilities" },
  { id: "oil-unit", icon: Droplets, title: "Oil Unit Integrated in Base Frame", description: "Compact design with built-in lubrication system" },
  { id: "pressure-apps", icon: ArrowUpDown, title: "High Pressure / Low Pressure Applications", description: "Flexible operation across pressure ranges" },
];

const generalSpecs = [
  "Quick Start capability",
  "Available with multi-stage option",
  "Both Mechanical or Electronic Governor options",
  "Power range up to 1.5 MW",
  "Oil lubrication or ball bearings",
  "Direct drive or with gearbox"
];

const applications = [
  "Synchronous & Induction Generator drive",
  "Pump / Fan / Blower drives",
  "Energy Conservation / Waste Heat Recovery",
  "Captive power plants",
  "Parallel to PRDS",
  "Solar thermal plants",
  "Waste incineration"
];

const bladeDesignPoints = [
  "Improved blade profile to optimise efficiency",
  "Special coating on the leading edge of blades to increase the blade strength and avoid erosion",
  "Specially designed T-root to support the blade under excessive thrust",
  "Modes, shape and natural frequency overcome non-steady forces due to stage flow interaction",
  "Evaluation of damping and generation of appropriate models",
  "Model analysis and dynamic stress determination",
  "Life estimation based on cumulative damage fatigue theories"
];

const turbineModels = [
  { name: "TXN20", inletPressure: "2 - 20 Bar A", inletTemperature: "D&S", flow: "3 - 12 TPH", speed: "3000", exhaustPressure: "0.1 - 4 Bar", power: "50 - 200 KW", gearBoxOption: false, governor: false, oilLubrication: false },
  { name: "TXN22", inletPressure: "8 - 20 Bar A", inletTemperature: "D&S", flow: "6 - 16 TPH", speed: "3000 - 6500", exhaustPressure: "0.1 - 4 Bar", power: "200 - 1000 KW", gearBoxOption: true, governor: true, oilLubrication: true },
  { name: "TXN24", inletPressure: "10 - 40 Bar A", inletTemperature: "D&S", flow: "10 - 24 TPH", speed: "3000 - 6500", exhaustPressure: "0.1 - 8 Bar", power: "500 - 1500 KW", gearBoxOption: true, governor: true, oilLubrication: true },
];

export function SteamTurbinePage() {
  return (
    <div>
      {/* HERO — 1 IMAGE */}
      <section className="bg-[#1A2A3A] text-white py-12">
        <div className="site-shell">
          <Breadcrumb items={[{ label: "Products", path: "/products" }, { label: "Steam Turbine" }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-6">
            <div>
              <div className="font-[var(--font-mono)] text-[11px] text-[#FF6B35] tracking-widest uppercase mb-2">
                Saturation Steam Turbine
              </div>
              <h1 className="font-[var(--font-heading)] text-[28px] md:text-[40px] leading-tight mb-4">
                Efficiency by Design — Assured Quality
              </h1>
              <p className="text-white/60 text-[14px] md:text-[15px] leading-relaxed mb-6">
                Complete energy solutions for captive power, waste heat recovery, and grid-parallel operations. 
                Custom-engineered for your steam parameters.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-5 py-2.5 rounded-lg text-[13px] transition-colors">
                  Request Quote
                </Link>
                <a href="#models" className="border border-white/30 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg text-[13px] transition-colors">
                  View Models
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/15 bg-[#0F1A28]">
              <img 
                src="/imageAssets/img37.jpeg" 
                alt="Steam Turbine 3D Assembly" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN FEATURES — NO IMAGES */}
      <section className="py-14 md:py-20 bg-[#F8F9FA]">
        <div className="site-shell">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#1A2A3A] mb-2">Design Features</h2>
            <div className="w-12 h-1 bg-[#FF6B35] mx-auto rounded" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {designFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} className="bg-white p-6 rounded-xl border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-[#FFF0EB] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-[15px] mb-2">{feature.title}</h3>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GENERAL SPECIFICATIONS — NO IMAGES */}
      <section className="py-10 border-b border-[#E5E7EB]">
        <div className="site-shell">
          <div className="bg-[#1A2A3A] text-white rounded-xl p-6 md:p-8">
            <h3 className="font-[var(--font-heading)] text-lg mb-4">General Specifications</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              {generalSpecs.map((spec, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                  <span className="text-[13px] text-white/80">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT IMAGES — 3 IMAGES FROM YOUR UPLOADS */}
      <section className="py-14 md:py-20">
        <div className="site-shell">
          <div className="text-center mb-10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl mb-2">Product Gallery</h2>
            <p className="text-[14px] text-[#6B7280]">Turbine rotor assembly, blade profiles, and installed units</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F8F9FA] rounded-xl p-4 border border-[#E5E7EB]">
              <img src="/imageAssets/img10.jpeg" alt="Steam Turbine Rotor Assembly" className="w-full h-auto rounded-lg" />
              <p className="text-[12px] text-[#6B7280] mt-2 text-center">Turbine rotor assembly</p>
            </div>
            <div className="bg-[#F8F9FA] rounded-xl p-4 border border-[#E5E7EB]">
              <img src="/imageAssets/img9.jpeg"  alt="Steam Turbine Blade Profile" className="w-full h-auto rounded-lg" />
              <p className="text-[12px] text-[#6B7280] mt-2 text-center">Precision machined blade profile</p>
            </div>
            <div className="bg-[#F8F9FA] rounded-xl p-4 border border-[#E5E7EB]">
              <img src="/imageAssets/img8.jpeg" alt="Installed Steam Turbine Unit" className="w-full h-auto rounded-lg" />
              <p className="text-[12px] text-[#6B7280] mt-2 text-center">Installed steam turbine unit</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS — TEXT ONLY */}
      <section className="py-14 md:py-20 bg-[#F8F9FA]">
        <div className="site-shell">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl mb-6 text-center">Applications</h2>
            <ul className="space-y-3">
              {applications.map((app, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                  <span className="text-[14px] text-[#374151]">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BLADE DESIGN — TEXT ONLY */}
      <section className="py-14 md:py-20">
        <div className="site-shell">
          <div className="text-center mb-10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl mb-2">Blade Design</h2>
            <p className="text-[14px] text-[#6B7280] max-w-2xl mx-auto">
              Specially engineered blades for saturation turbine applications with advanced metallurgy and protective coatings
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {bladeDesignPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#F8F9FA] p-4 rounded-lg">
                <Check className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                <span className="text-[13px] text-[#374151] leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TURBINE MODELS — TABLE ONLY */}
      <section id="models" className="py-14 md:py-20 bg-[#1A2A3A] text-white">
        <div className="site-shell">
          <div className="text-center mb-10">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl mb-2">Turbine Models</h2>
            <p className="text-[14px] text-white/60">Standard model range for saturation steam turbine applications. Custom configurations available.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-[11px] font-[var(--font-mono)] text-[#FF6B35] tracking-wider uppercase">Parameters / Features</th>
                  <th className="py-3 px-4 text-[13px] font-[var(--font-heading)]">TXN20</th>
                  <th className="py-3 px-4 text-[13px] font-[var(--font-heading)]">TXN22</th>
                  <th className="py-3 px-4 text-[13px] font-[var(--font-heading)]">TXN24</th>
                </tr>
              </thead>
              <tbody className="text-[13px]">
                <tr className="border-b border-white/10"><td className="py-3 px-4 text-white/60">Inlet Pressure</td><td className="py-3 px-4">2 - 20 Bar A</td><td className="py-3 px-4">8 - 20 Bar A</td><td className="py-3 px-4">10 - 40 Bar A</td></tr>
                <tr className="border-b border-white/10"><td className="py-3 px-4 text-white/60">Inlet Temperature</td><td className="py-3 px-4">D&S</td><td className="py-3 px-4">D&S</td><td className="py-3 px-4">D&S</td></tr>
                <tr className="border-b border-white/10"><td className="py-3 px-4 text-white/60">Flow</td><td className="py-3 px-4">3 - 12 TPH</td><td className="py-3 px-4">6 - 16 TPH</td><td className="py-3 px-4">10 - 24 TPH</td></tr>
                <tr className="border-b border-white/10"><td className="py-3 px-4 text-white/60">Speed (RPM)</td><td className="py-3 px-4">3000</td><td className="py-3 px-4">3000 - 6500</td><td className="py-3 px-4">3000 - 6500</td></tr>
                <tr className="border-b border-white/10"><td className="py-3 px-4 text-white/60">Exhaust Pressure</td><td className="py-3 px-4">0.1 - 4 Bar</td><td className="py-3 px-4">0.1 - 4 Bar</td><td className="py-3 px-4">0.1 - 8 Bar</td></tr>
                <tr className="border-b border-white/10"><td className="py-3 px-4 text-white/60">Power</td><td className="py-3 px-4">50 - 200 KW</td><td className="py-3 px-4">200 - 1000 KW</td><td className="py-3 px-4">500 - 1500 KW</td></tr>
                <tr className="border-b border-white/10"><td className="py-3 px-4 text-white/60">Gear Box Option</td><td className="py-3 px-4"><X className="w-4 h-4 text-red-400" /></td><td className="py-3 px-4"><Check className="w-4 h-4 text-green-400" /></td><td className="py-3 px-4"><Check className="w-4 h-4 text-green-400" /></td></tr>
                <tr className="border-b border-white/10"><td className="py-3 px-4 text-white/60">Governor (Mech / Elec)</td><td className="py-3 px-4"><X className="w-4 h-4 text-red-400" /></td><td className="py-3 px-4"><Check className="w-4 h-4 text-green-400" /></td><td className="py-3 px-4"><Check className="w-4 h-4 text-green-400" /></td></tr>
                <tr><td className="py-3 px-4 text-white/60">Oil Lubrication</td><td className="py-3 px-4"><X className="w-4 h-4 text-red-400" /></td><td className="py-3 px-4"><Check className="w-4 h-4 text-green-400" /></td><td className="py-3 px-4"><Check className="w-4 h-4 text-green-400" /></td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {turbineModels.map((model) => (
              <div key={model.name} className="bg-white/5 border border-white/10 rounded-lg p-5">
                <h3 className="font-[var(--font-heading)] text-lg mb-3">{model.name}</h3>
                <div className="space-y-2 text-[12px]">
                  <div className="flex justify-between"><span className="text-white/50">Power</span><span>{model.power}</span></div>
                  <div className="flex justify-between"><span className="text-white/50">Flow</span><span>{model.flow}</span></div>
                  <div className="flex justify-between"><span className="text-white/50">Inlet</span><span>{model.inletPressure}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* CTA */}
      <section className="py-12 bg-[#FF6B35] text-white">
        <div className="site-shell text-center">
          <h2 className="font-[var(--font-heading)] text-xl md:text-2xl mb-3">Need a Custom Steam Turbine Solution?</h2>
          <p className="text-[14px] text-white/80 mb-6 max-w-xl mx-auto">
            Contact our engineering team for specifications tailored to your steam parameters and application.
          </p>
          <Link to="/contact" className="inline-block bg-white text-[#FF6B35] px-6 py-2.5 rounded text-[13px] font-medium hover:bg-white/90 transition-colors">
            Contact Sales
          </Link>
        </div>
      </section>

      <PageTimestamp lastUpdated="June 2026" nextAudit="Q3 2026" />
    </div>
  );
}