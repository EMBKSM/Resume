import type { ReactNode } from "react";

// --- 타입 정의 ---
type SectionTitleProps = {
  children: ReactNode;
};
type SkillBlockProps = {
  title: string;
  skills: string[];
  badgeColor: string;
};

// --- 재사용 컴포넌트 ---
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
  const hdlSkills = {
    title: "HDL & FPGA Tools",
    skills: ["Verilog", "VHDL", "SystemVerilog", "Xilinx Vivado", "Intel Quartus", "ModelSim"],
    badgeColor: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
  };
  const protocolSkills = {
    title: "Communication Protocols",
    skills: ["AXI4-Full/Lite/Stream", "PCIe", "Ethernet", "SPI", "I2C", "UART"],
    badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
  };
  const langSkills = {
    title: "Languages & Others",
    skills: ["C/C++", "Python", "Tcl", "Git", "Linux Shell Script"],
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  };

  return (
    <section id="skills" className="py-16">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillBlock {...hdlSkills} />
        <SkillBlock {...protocolSkills} />
        <SkillBlock {...langSkills} />
      </div>
    </section>
  );
};

export default Skills;
