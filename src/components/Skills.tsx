import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};
type SkillBlockProps = {
  title: string;
  skills: string[];
  badgeColor: string;
};

const SectionTitle = ({ children }: SectionTitleProps) => (
  <h2 className="text-3xl font-bold font-serif text-gray-800 dark:text-dark-heading mb-8 border-l-4 border-signal-blue pl-4">
    {children}
  </h2>
);

const SkillBlock = ({ title, skills, badgeColor }: SkillBlockProps) => (
  <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg p-6">
    <h3 className="text-lg font-bold text-gray-700 dark:text-dark-heading mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className={`font-mono text-sm px-3 py-1 rounded-md ${badgeColor}`}>
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const devTools = {
    title: "Development Tools",
    skills: ["Xilinx Vivado", "Vitis", "ESP-IDF", "STM32Cube", "Arduino IDE", "Visual Studio", "VS Code"],
    badgeColor: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
  };

  const architectures = {
    title: "Chips & Architectures",
    skills: ["Zynq 7020 (Cortex A9)", "ESP32", "STM32 (Cortex M3, Cortex M4)", "ESP8266"],
    badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300",
  };

  const languages = {
    title: "Languages & Others",
    skills: ["C/C++", "C#", "Python", "Verilog", "SystemVerilog", "Tcl", "FASM", "Git", "Linux Shell Script"],
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  };

  const protocols = {
    title: "Communication Protocols",
    skills: ["AXI4-Full/Lite/Stream", "PCIe", "Ethernet", "SPI", "I2C", "UART", "WiFi", "MQTT", "OTA"],
    badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
  };

  return (
    <section id="skills" className="py-16">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillBlock {...languages} />
        <SkillBlock {...protocols} />
        <SkillBlock {...devTools} />
        <SkillBlock {...architectures} />
      </div>
    </section>
  );
};

export default Skills;
