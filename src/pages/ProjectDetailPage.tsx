import { useEffect, useState } from "react"; // 👈 1. 애니메이션 효과를 위해 두 가지를 import 합니다.
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

// --- 프로젝트 데이터베이스 ---
const projectDatabase: { [key: string]: any } = {
  // ... (이전과 동일한 프로젝트 데이터)
  "1": {
    title: "LMB: LoRa 및 GPS 기반 긴급 택시 호출 시스템",
    description:
      "인터넷 연결 없이 LoRa 통신과 GPS를 활용하여 긴급 상황에서 신속하고 효율적으로 택시를 호출할 수 있는 휴대용 기기 개발 프로젝트입니다.",
    background:
      "여행 중 스마트폰 방전으로 교통편 확보에 어려움을 겪었던 개인적인 경험과, 대중교통 시스템이 부족한 거주 지역의 불편함을 해결하고자 프로젝트를 시작하게 되었습니다.",
    teamInfo: "개인 프로젝트",
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
    teamInfo: "개인 프로젝트",
  },
  "3": {
    title: "FLP: LoRa 기반 단체 이동 이탈 감지 시스템",
    description:
      "단체 이동 중 인원 이탈을 실시간으로 감지하고, 인솔자와 이탈자 모두에게 경고를 전달하는 LoRa 기반 이탈 감지 시스템입니다. 스마트폰 앱 없이 독립적으로 동작하는 착용형 단말기를 직접 설계 및 제작한 팀 프로젝트입니다.",
    background:
      "단체 체험학습 등에서 아동이 인솔자로부터 이탈하여 발생하는 안전사고를 예방하고자 프로젝트를 기획했습니다. 기존 위치 추적 앱은 스마트폰 보유 및 네트워크 연결이 필수적이라 저연령 사용자에게 부적합하며, Bluetooth 기반 제품은 통신 거리가 짧다는 한계가 있었습니다. 이를 극복하기 위해 LoRa 통신을 채택하여 통신 거리와 기기 의존성 문제를 해결하고자 했습니다.",
    teamInfo: "총 3명의 팀 프로젝트로, 펌웨어/하드웨어, 서버, 안드로이드 앱 개발을 각각 분담하여 진행했습니다.",
    features: [
      "스마트폰 없이 독립적으로 동작하는 착용형 단말기(Host, Terminal)",
      "LoRa 통신을 이용한 최대 8km의 넓은 통신 반경 확보",
      "1~5분 주기의 빠른 위치 정보 갱신",
      "관리자용 Android 앱을 통한 실시간 위치 모니터링 및 이탈 알림",
      "이탈 발생 시 사용자 단말기에서 발생하는 단계별 경고음",
    ],
    myRole: [
      "**펌웨어 개발**: Host(ESP32) 및 Terminal(STM32) 기기의 전체 펌웨어 로직을 C언어로 개발했습니다. GPS 데이터 파싱, LoRa 통신 프로토콜 구현, 이탈 감지 알고리즘 및 단계별 경고음 출력 로직을 담당했습니다.",
      "**하드웨어 설계**: KiCAD를 사용하여 Host 및 Terminal 기기의 회로를 설계하고 PCB를 제작했습니다. 각 부품의 데이터시트를 분석하여 회로를 구성하고, 안정적인 동작을 위한 전원부 및 안테나 회로를 설계했습니다.",
      "**시스템 통합 및 테스트**: 개발된 펌웨어를 직접 제작한 PCB에 포팅하고, 서버 및 Android 앱과 연동하여 전체 시스템의 End-to-End Test를 주도하며 안정성을 확보했습니다.",
    ],
    retrospective:
      "LoRa 기반의 무선 통신 과정에서 두 장치가 동시에 송신을 시도하면 패킷 충돌이 발생하여 데이터가 소실되는 문제를 경험했습니다. 이 문제를 해결하기 위해 Host 단에서 송·수신을 제어하는 방식을 적용하여 안정적인 통신을 구현할 수 있었습니다. 이를 통해 임베디드 시스템은 현실 세계와 직접적으로 상호작용하며, 다양한 물리적 제약과 환경적 변수에 크게 영향을 받는다는 사실을 깊이 체감할 수 있었습니다. 또한 직접 PCB를 설계하고 제작하는 과정을 통해 회로의 동작 원리에 대해 보다 심도 있는 이해를 쌓을 수 있었습니다.",
  },
};

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const projectData = projectId ? projectDatabase[projectId] : null;

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, [projectId]);

  if (!projectData) {
  }

  return (
    <div
      className={`min-h-screen pcb-background bg-cover text-dark-text py-12 page ${visible ? "page-enter-active" : ""}`}
    >
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

        <SectionTitle>프로젝트 인원</SectionTitle>
        <p className="text-dark-text leading-relaxed">{projectData.teamInfo}</p>

        <SectionTitle>주요 기능</SectionTitle>
        <ul className="list-disc list-inside text-dark-text space-y-2">
          {projectData.features?.map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {projectData.myRole ? (
          <>
            <SectionTitle>담당 역할</SectionTitle>
            <ul className="list-disc list-inside text-dark-text space-y-2">
              {projectData.myRole.map((item: string, index: number) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
              ))}
            </ul>
          </>
        ) : (
          projectData.implementation && (
            <>
              <SectionTitle>핵심 구현 내용</SectionTitle>
              <ul className="list-disc list-inside text-dark-text space-y-2">
                {projectData.implementation.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )
        )}

        <SectionTitle>프로젝트 회고</SectionTitle>
        <p className="text-dark-text leading-relaxed bg-dark-bg p-4 rounded-md border border-dark-border">
          {projectData.retrospective}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
