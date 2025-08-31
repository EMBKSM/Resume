import { Link } from "react-router-dom";
import type { ReactNode } from "react"; // ReactNode 타입을 import합니다.

// SectionTitle 컴포넌트의 props 타입을 정의합니다.
type SectionTitleProps = {
  children: ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => (
  <h2 className="text-3xl font-bold font-serif text-gray-800 dark:text-dark-heading mb-8 border-l-4 border-signal-blue pl-4">
    {children}
  </h2>
);

const projectsData = [
  {
    id: 1,
    title: "AXI-Stream 기반 고속 이미지 필터 IP 설계",
    device: "Zynq UltraScale+ MPSoC",
    role: "RTL 설계 및 검증",
    tags: ["Verilog", "AXI4-Stream", "Timing Closure"],
  },
  {
    id: 2,
    title: "PCIe를 통한 FPGA 데이터 수집 시스템",
    device: "Artix-7",
    role: "PL 설계 및 시스템 통합",
    tags: ["VHDL", "PCIe", "DMA"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-8">
        {projectsData.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id} className="block group">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 border-2 border-transparent hover:border-signal-blue dark:hover:border-pcb-green rounded-lg bg-light-card dark:bg-dark-card transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="md:col-span-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-dark-heading group-hover:text-signal-blue dark:group-hover:text-pcb-green">
                  {project.title}
                </h3>
                <p className="mt-2 font-semibold text-gray-600 dark:text-dark-text">
                  담당 역할: <span className="font-normal">{project.role}</span>
                </p>
                <p className="font-semibold text-gray-600 dark:text-dark-text">
                  Target Device:{" "}
                  <span className="font-mono text-sm bg-gray-200 dark:bg-dark-bg px-2 py-1 rounded">
                    {project.device}
                  </span>
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-300 text-xs font-semibold px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4 flex items-center justify-center bg-gray-100 dark:bg-dark-bg rounded-md p-4 border border-dashed border-light-border dark:border-dark-border">
                <p className="text-center text-sm text-gray-500">
                  설계 아키텍처
                  <br />
                  (Block Diagram)
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
