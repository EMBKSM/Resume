import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => (
  <h2 className="text-3xl font-bold font-serif text-dark-heading mb-8 border-l-4 border-signal-blue pl-4">
    {children}
  </h2>
);

// --- [최종 수정] ---
const projectsData = [
  {
    id: 4, // FLP
    title: "FLP: LoRa 기반 단체 이동 이탈 감지 시스템",
    device: "Custom PCB (STM32 & ESP32)",
    role: "팀 프로젝트 (펌웨어, 하드웨어 회로 설계 담당)",
    tags: ["C", "LoRa", "GPS", "STM32", "ESP32", "OTA", "KiCAD"],
  },
  {
    id: 3, // Health-Run
    title: "Health-Run: AI 러닝 자세 교정 시스템 (해커톤)",
    device: "Zynq-7020, 5x IMU Sensors",
    role: "팀 프로젝트 (FPGA PL/PS, 2x CNN 모델 설계 및 구현 담당)",
    tags: ["FPGA", "Verilog", "Zynq-7020", "AXI4-Stream", "On-Device AI", "CNN", "IMU", "Real-Time"],
  },
  {
    id: 2, // AXI
    title: "AXI-Stream 기반 고속 이미지 프로세싱 IP 코어 설계",
    device: "Zynq UltraScale+ MPSoC",
    role: "RTL 설계, 시뮬레이션 검증 및 PetaLinux 드라이버 연동",
    tags: ["Verilog", "AXI4-Stream", "Image Processing", "PetaLinux"],
  },
  {
    id: 1, // LMB
    title: "LMB: LoRa 및 GPS 기반 긴급 택시 호출 시스템",
    device: "ESP32 (TTGO LoRa32 V2.1)",
    role: "개인 프로젝트 (전체 시스템 설계 및 펌웨어 개발)",
    tags: ["C++", "LoRa", "GPS", "ESP32", "Embedded Systems"],
  },
];
// --- [수정 완료] ---

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-8">
        {projectsData.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id} className="block group">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 border-2 border-transparent hover:border-signal-blue dark:hover:border-pcb-green rounded-lg bg-dark-card transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="md:col-span-8">
                <h3 className="text-xl font-bold text-dark-heading group-hover:text-signal-blue dark:group-hover:text-pcb-green">
                  {project.title}
                </h3>
                <p className="mt-2 font-semibold text-dark-text">
                  담당 역할: <span className="font-normal">{project.role}</span>
                </p>
                <p className="font-semibold text-dark-text">
                  Target Device:{" "}
                  <span className="font-mono text-sm bg-dark-bg px-2 py-1 rounded">{project.device}</span>
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-600 text-gray-300 text-xs font-semibold px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4 flex items-center justify-center bg-dark-bg rounded-md p-4 border border-dashed border-dark-border">
                <p className="text-center text-sm text-gray-500">
                  프로젝트 상세 보기
                  <br />
                  (Click for Details)
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
