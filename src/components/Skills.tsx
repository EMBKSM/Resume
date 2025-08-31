import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

type SkillBlockProps = {
  title: string;
  skills: string[];
};

const SectionTitle = ({ children }: SectionTitleProps) => (
  <h2 className="text-3xl font-bold font-serif text-gray-800 dark:text-dark-heading mb-8 border-l-4 border-signal-blue pl-4">
    {children}
  </h2>
);

const SkillBlock = ({ title, skills }: SkillBlockProps) => (
  <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg p-6">
    <h3 className="text-lg font-bold text-gray-700 dark:text-dark-heading mb-4">{title}</h3>
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {/* 'skills'가 string[] 타입으로 지정되었으므로 'skill'은 자동으로 string으로 추론됩니다. */}
      {skills.map((skill) => (
        <span key={skill} className="font-mono text-md text-pcb-green">
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
  };
  const protocolSkills = {
    title: "Communication Protocols",
    skills: ["AXI4-Full/Lite/Stream", "PCIe", "Ethernet", "SPI", "I2C", "UART"],
  };
  const langSkills = {
    title: "Languages & Others",
    skills: ["C/C++", "Python", "Tcl", "Git", "Linux Shell Script"],
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
