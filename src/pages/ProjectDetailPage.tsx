import { useParams, Link } from "react-router-dom";
import type { ReactNode } from "react";

// --- 타입 정의 ---
type SectionTitleProps = {
  children: ReactNode;
};

// --- 재사용 컴포넌트 ---
const SectionTitle = ({ children }: SectionTitleProps) => (
  <h3 className="text-2xl font-bold text-dark-heading mb-4 mt-8 border-l-4 border-signal-orange pl-3">{children}</h3>
);

// --- 프로젝트 데이터 ---
// id: 1 => LMB 프로젝트, id: 2 => AXI 프로젝트
const projectDatabase: { [key: string]: any } = {
  "1": {
    title: "LMB: LoRa 및 GPS 기반 긴급 택시 호출 시스템",
    description:
      "인터넷 연결 없이 LoRa 통신과 GPS를 활용하여 긴급 상황에서 신속하고 효율적으로 택시를 호출할 수 있는 휴대용 기기 개발 프로젝트입니다.",
    background:
      "여행 중 스마트폰 방전으로 교통편 확보에 어려움을 겪었던 개인적인 경험과, 대중교통 시스템이 부족한 거주 지역의 불편함을 해결하고자 프로젝트를 시작하게 되었습니다.",
    features: [
      "LoRa 통신을 활용한 비인터넷 환경에서의 택시 호출",
      "GPS(Ublox NEO-M8)를 이용한 정확한 위치 정보 전송",
      "RSSI 신호 강도 기반 최적의 택시 자동 배차",
      "버튼 하나로 동작하는 간편한 UX",
    ],
    implementation: [
      "LILYGO® TTGO LoRa32 V2.1 모듈을 기반으로 C++ 펌웨어 개발",
      "ESP32의 고유 ID를 통신 ID로 활용, RSSI 값과 함께 `struct`로 관리하고 `priority_queue`(최소 힙)를 사용하여 가장 가까운 모듈(택시)을 효율적으로 탐색",
      "LoRa 패킷의 첫 바이트에 모듈 ID를 기록하고, `peek()` 함수를 활용하여 수신 측에서 자신을 가리키는 패킷이 아닐 경우 읽지 않고 무시하는 방식으로 1:N 통신 충돌 문제 해결",
      "호출 버튼 입력 시 GPS 좌표를 포함한 LoRa 패킷을 전송하도록 전체 시스템 로직 구현",
    ],
    retrospective:
      "초기에는 RSSI 신호 강도만으로 거리 측정을 구현하는 것이 막막했으나, C++의 `operator` 오버로딩과 `priority_queue`를 깊이 있게 공부하며 해결책을 찾을 수 있었습니다. 이 경험을 통해 언어에 대한 깊은 이해가 코드의 활용 범위와 질을 극적으로 향상시킨다는 것을 깨달았습니다. 또한, 모든 기기가 하나의 LoRa 패킷을 동시에 바라보고 먼저 읽는 쪽이 소비하는 통신 특성 때문에 어려움을 겪었지만, 덕분에 LoRa 통신 방식에 대해 더 깊이 연구하고 해결하는 과정에서 임베디드 통신 시스템에 대한 이해도를 높일 수 있었습니다.",
  },
  "2": {
    title: "AXI-Stream 기반 고속 이미지 프로세싱 IP 코어 설계",
    description:
      "Zynq UltraScale+ MPSoC 환경에서 고속으로 입력되는 이미지 데이터를 실시간으로 처리하기 위한 FPGA 기반 IP 코어를 설계하고 검증한 프로젝트입니다.",
    // 여기에 AXI 프로젝트의 상세 내용을 추가할 수 있습니다.
  },
};

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const projectData = projectId ? projectDatabase[projectId] : null;

  if (!projectData) {
    return (
      <div className="min-h-screen pcb-background bg-cover text-dark-text py-12">
        <div className="max-w-4xl mx-auto p-8 font-sans bg-dark-card/80 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
          <Link to="/" className="inline-block mb-8 text-signal-blue hover:underline transition-colors">
            &larr; 이력서로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold font-serif mb-4 text-dark-heading">프로젝트를 찾을 수 없습니다.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pcb-background bg-cover text-dark-text py-12">
      <div className="max-w-4xl mx-auto p-8 font-sans bg-dark-card/80 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
        <Link to="/" className="inline-block mb-8 text-signal-blue hover:underline transition-colors">
          &larr; 이력서로 돌아가기
        </Link>

        <h1 className="text-4xl font-bold font-serif mb-4 text-dark-heading">{projectData.title}</h1>
        <p className="text-lg text-dark-text leading-relaxed border-l-2 border-pcb-green pl-4">
          {projectData.description}
        </p>

        <SectionTitle>프로젝트 배경</SectionTitle>
        <p className="text-dark-text leading-relaxed">{projectData.background}</p>

        <SectionTitle>주요 기능</SectionTitle>
        <ul className="list-disc list-inside text-dark-text space-y-2">
          {projectData.features.map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <SectionTitle>핵심 구현 내용</SectionTitle>
        <ul className="list-disc list-inside text-dark-text space-y-2">
          {projectData.implementation.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <SectionTitle>프로젝트 회고</SectionTitle>
        <p className="text-dark-text leading-relaxed bg-dark-bg p-4 rounded-md border border-dark-border">
          {projectData.retrospective}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
