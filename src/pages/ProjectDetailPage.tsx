import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => (
  <h3 className="text-2xl font-bold text-dark-heading mb-4 mt-8 border-l-4 border-signal-orange pl-3">{children}</h3>
);

const projectDatabase: { [key: string]: any } = {
  "1": {
    title: "LMB: LoRa 및 GPS 기반 긴급 택시 호출 시스템",
    description:
      "인터넷 연결 없이 LoRa 통신과 GPS를 활용하여 긴급 상황에서 신속하고 효율적으로 택시를 호출할 수 있는 휴대용 기기 개발 프로젝트입니다.",
    background:
      "여행 중 스마트폰 방전으로 교통편 확보에 어려움을 겪었던 개인적인 경험과, 대중교통 시스템이 부족한 거주 지역의 불편함을 해결하고자 프로젝트를 시작하게 되었습니다.",
    teamInfo: "개인 프로젝트",
    features: [
      "LoRa 통신을 활용한 비인터넷 환경에서의 택시 호출",
      "GPS를 이용한 정확한 위치 정보 전송",
      "RSSI 신호 강도 기반 최적의 택시 자동 배차",
      "버튼 하나로 동작하는 간편한 UX",
    ],
    implementation: [
      "LILYGO® TTGO LoRa32 V2.1 모듈을 기반으로 C++ 펌웨어 개발",
      "ESP32의 고유 ID를 통신 ID로 활용, RSSI 값과 함께 struct로 관리하고 priority_queue를 사용하여 가장 가까운 모듈을 효율적으로 탐색",
      "LoRa 패킷의 첫 바이트에 모듈 ID를 기록하고, peek() 함수를 활용하여 수신 측에서 자신을 가리키는 패킷이 아닐 경우 읽지 않고 무시하는 방식으로 1:N 통신 충돌 문제 해결",
      "호출 버튼 입력 시 GPS 좌표를 포함한 LoRa 패킷을 전송하도록 전체 시스템 로직 구현",
    ],
    retrospective:
      "초기에는 RSSI 신호 강도만으로 거리 측정을 구현하는 것이 막막했으나, C++의 operator 오버로딩과 priority_queue를 깊이 있게 공부하며 해결책을 찾을 수 있었습니다. 이 경험을 통해 언어에 대한 깊은 이해가 코드의 활용 범위와 질을 극적으로 향상시킨다는 것을 깨달았습니다.또한, LoRa의 브로드캐스트 통신 특성상 범위 내 모든 기기가 하나의 패킷을 동시에 수신하게 되는데, 이로 인해 사실상 가장 먼저 응답하는 기기가 해당 작업을 선점하도록 만드는 애플리케이션 로직 구현에 어려움을 겪었습니다. 하지만 덕분에 LoRa 통신 방식과 다중 기기 간의 경쟁 조건을 고려한 시스템 설계에 대해 더 깊이 연구하고 해결하는 과정에서 임베디드 통신 시스템에 대한 이해도를 높일 수 있었습니다.",
  },
  "2": {
    title: "AXI-Stream 기반 고속 이미지 프로세싱 IP 코어 설계",
    description:
      "Zynq UltraScale+ MPSoC 환경에서 고속으로 입력되는 이미지 데이터를 실시간으로 처리하기 위한 FPGA 기반 IP 코어를 설계하고 검증한 프로젝트입니다.",
    background:
      "소프트웨어만으로는 실시간 처리가 어려운 고해상도 영상 데이터나 머신비전 시스템의 처리 속도 한계를 극복하고자 프로젝트를 기획했습니다. CPU의 순차적 연산 방식에서 벗어나, FPGA의 병렬 처리 능력을 활용하여 데이터 처리 파이프라인을 하드웨어로 구현함으로써 높은 Throughput과 Low Latency 성능을 확보하고자 했습니다.",
    teamInfo: "개인 프로젝트",
    features: [
      "고속 데이터 전송을 위한 표준 AXI-Stream 프로토콜을 사용하여 데이터를 실시간 입출력",
      "입력되는 영상의 Grayscale 변환 및 Sobel Edge Detection 필터를 하드웨어 로직으로 구현하여 실시간 처리 수행",
      "FPGA의 병렬 처리 아키텍처를 통해 픽셀 단위의 파이프라인을 구축하여 고속의 데이터 처리",
      "설계된 IP 코어를 Zynq MPSoC의 PL에 통합하고, PS와 연동하여 전체 시스템 제어",
    ],
    implementation: [
      "PL RTL 구현내용:",
      "고속 실시간 이미지 데이터 입출력을 위한 표준 AXI-Stream 프로토콜 마스터 및 슬레이브 인터페이스 로직 구현",
      "입력되는 픽셀 데이터를 실시간으로 변환하는 Grayscale 변환 하드웨어 로직 설계",
      "Grayscale 데이터를 입력받아 엣지를 검출하는 Sobel Edge Detection 필터 하드웨어 로직 구현",
      "픽셀 클럭 단위로 데이터가 처리될 수 있도록 병렬 처리 파이프라인 아키텍처를 구축하여 높은 Throughput 확보",
      "AXI-Stream의 TVALID/TREADY 핸드셰이크를 관리하고, 다운스트림의 백프레셔 발생 시 데이터 유실 없이 파이프라인을 일시 중지시키는 FSM(Finite State Machine) 설계",
      "",
      "PS Control & Verification 구현 내용:",
      "Zynq MPSoC의 PS에서 C/C++ 코드를 통해 PL에 통합된 이미지 프로세싱 IP 코어의 레지스터를 제어하여 동작(시작, 정지, 파라미터 설정) 관리",
      "IP 코어의 신뢰성 검증을 위해 SystemVerilog를 사용한 테스트벤치 환경 구축",
      "SystemVerilog의 제약 기반 무작위 테스트 기법(rand)을 도입하여, 정상적인 데이터 외 TVALID/TREADY 신호가 불규칙하게 발생하는 다양한 엣지 케이스와 코너 케이스를 자동으로 생성 및 테스트",
      "SVA(SystemVerilog Assertions)를 사용하여 Grayscale 변환 값이나 Sobel 필터의 엣지 검출 값이 예상되는 범위와 일치하는지 실시간으로 모니터링하고, 프로토콜 타이밍 위반 및 잠재적 하드웨어 오류 식별",
      "PS와 PL 간의 데이터 연동을 통해 CPU(PS)가 하드웨어 가속(PL) 결과를 받아 후속 처리를 수행하는 이기종 컴퓨팅 시스템의 소프트웨어 제어 플로우 구현",
    ],
    // --- [수정됨] 'retrospective' 내용 변경 ---
    retrospective:
      "AXI-Stream 프로토콜의 TVALID와 TREADY 핸드셰이크 메커니즘을 완벽하게 이해하고 타이밍을 맞추는 과정이 초기 가장 큰 난관이었습니다. 단순히 데이터를 전송하는 것을 넘어, 다운스트림 모듈에서 백프레셔가 발생했을 때 데이터 유실 없이 파이프라인을 일시 중지시키는 FSM을 구현하는 데 많은 시간이 걸렸습니다. 초기 설계에서는 이 타이밍 오류로 인해 데이터가 유실되는 문제를 겪었으며, 시뮬레이션 파형을 픽셀 클럭 단위로 세밀하게 분석하며 FSM의 상태 전이 로직을 수정, 보완했습니다. 특히, 설계한 IP 코어의 신뢰성을 확보하기 위해 SystemVerilog를 이용한 검증 환경을 구축했습니다. 단순한 Verilog 테스트벤치를 넘어, SystemVerilog의 rand 키워드를 활용한 제약 기반 무작위 테스트를 도입했습니다. 이를 통해 정상적인 이미지 데이터뿐만 아니라, TVALID와 TREADY 신호가 불규칙하게 발생하는 다양한 엣지 케이스와 코너 케이스를 자동으로 생성하여 IP를 테스트했습니다. 또한, assertion(SVA)을 사용하여 Grayscale 변환 값이나 Sobel 필터의 엣지 검출 값이 예상되는 범위와 일치하는지 실시간으로 모니터링했습니다. 이 과정에서 시뮬레이션상에서만 발견할 수 있는 잠재적인 하드웨어 오류를 사전에 식별하고 디버깅할 수 있었습니다. 이 프로젝트를 통해 설계부터 검증까지의 전체 FPGA 개발 흐름을 깊이 있게 깨닫고 공부할 수 있었습니다. 소프트웨어만으로는 해결할 수 없는 성능의 한계를 하드웨어 가속을 통해 극복하는 구체적인 방법을 배웠으며, Zynq MPSoC 환경에서 PS와 PL이 협력하는 이기종 컴퓨팅 시스템에 대한 실질적인 이해를 높이는 계기가 되었습니다.",
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
    myRole: ["전반적인 회로 설계", "PCB Artwork", "전체 Firmware 담당"],
    implementation: [
      "433MHz 대역 통신을 위해 SX1278 모듈 기반의 안테나 매칭을 포함한 LoRa RF 공통 회로 설계",
      "MCP73831(Li-Po 충전) 및 AP2112K-3.3(LDO)을 사용하여 USB-C/배터리 입력을 받는 3.3V 전원 시스템 공통 회로 구성",
      "CP2104 USB-to-UART 브릿지 IC와 USB-C 커넥터를 사용한 PC 시리얼 통신 및 펌웨어 다운로드 공통 회로 구현",
      "L86-M33 GPS 모듈을 탑재하여 위치 정보 수집을 위한 공통 회로 및 안테나 인터페이스 설계",
      "Host(ESP32) 보드에 펌웨어의 효율적인 디버깅을 위한 JTAG 인터페이스 회로 추가 설계",
      "Host(ESP32) 펌웨어는 C 언어와 ESP-IDF(FreeRTOS)를 기반으로, Terminal(STM32F103) 펌웨어는 C 언어와 HAL 라이브러리를 기반으로 개발하여 LoRa 통신 시스템을 구축",
      "Terminal은 UART2로 GPS 모듈의 NMEA 센텐스를 파싱하며, 5초 주기 또는 '호출'/'위험' 버튼 입력 시 고유 ID, GPS 좌표, Target ID, 위험 상태를 \"ID,Lat,Lon,TargetID,Danger\" 형식의 문자열 패킷으로 LoRa 전송",
      "",
      "Host는 SPI를 통해 이 LoRa 패킷을 수신, split_lora_response 함수로 파싱하여 Target ID를 확인하고, TerminalDevice 구조체 배열로 관리되는 단말기 목록의 최신 GPS 좌표와 위험 상태를 갱신",
      "Host는 Wi-Fi(AP+STA 모드)로 인터넷에 연결하며, WSS 클라이언트를 통해 원격 서버로 모든 단말기 정보와 자체 GPS 수신 정보를 통합하여 주기적으로 JSON 전송",
      "Wi-Fi AP 모드에서 Captive Portal 기능을 포함한 웹 서버를 구동하여 사용자에게 Wi-Fi 연결 정보 및 AP 정보 설정 페이지를 제공하며, 이 설정값들과 등록된 단말기 ID 목록은 NVS에 영속 저장",
      "특정 GPIO 버튼(CTRL + FIND_HOST) 조합을 통해 10초간 '단말기 등록 모드'로 진입하며, 이 동안 수신된 \"REG,<ID>,<TARGET_ID>\" 형식의 LoRa 등록 요청 패킷을 처리하여 새로운 단말기를 시스템에 추가하고 NVS에 저장",
    ],
    retrospective:
      "LoRa 기반의 무선 통신 시스템을 구축하는 과정에서, 다수의 Terminal(STM32F103) 장치가 위험 또는 호출 신호를 Host(ESP32) 장치로 동시에 전송할 때 패킷 충돌이 발생하여, 가장 중요했던 긴급 데이터가 유실되는 심각한 문제를 경험했습니다. 이를 해결하기 위해, 각 Terminal이 개별적인 타이머나 버튼 입력에 따라 무분별하게 송신하는 초기 방식을 버리고, Host가 중앙에서 전체 송·수신 흐름을 제어하는 MAC 프로토콜을 도입했습니다. 이 방식을 통해 Terminal 간의 송신 타이밍이 겹치지 않도록 조율하여, 데이터 충돌을 원천적으로 방지하고 안정적인 1:N 통신 채널을 구현할 수 있었습니다. 이 경험을 통해 임베디드 시스템은 FreeRTOS 태스크 스케줄링이나 HAL 라이브러리 콜백 같은 펌웨어 코드의 논리만으로 문제를 해결할 수 있지 아니함을 느꼈습니다. 그리고 433MHz 대역의 SX1278 LoRa 통신은 건물, 지형 같은 물리적 환경 변수에 따라 통신 가능 거리가 민감하게 변화한다는 것을 직접체감하였습니다. 또한, MCP73831로 배터리를 충전하고 AP2112K LDO로 3.3V를 공급받는 두 장치의 전력 소모를 최소화하기 위하여, 펌웨어의 Sleep 모드와 하드웨어의 대기 전류를 함께 최적화하는 복합적인 접근을 하게 하였고, 이러한 하드웨어의 본질적인 제약조건을 바로 느끼게 되었습니다. 프로젝트를 기획후 보드를 제작하기 위해서 ESP32 WROOM과 STM32F103C8T6을 메인으로 하는 2종의 Custom PCB를 직접 설계하고 제작한 경험은, 회로의 동작 원리에 대한 심도 있는 지식을 얻게 하였습니다. 데이터시트를 기반으로 SX1278의 RF 임피던스 매칭 회로를 구성하고, 노이즈에 민감한 L86-M33 GPS 모듈의 전원부를 아날로그/디지털로 분리하며, CP2104의 USB-UART 인터페이스를 설계하는 과정은 단순히 부품을 배선해보는 것이 아닌 수많은 변수가 있는 현실에서 이러한 변수들을 막고 완벽하게 설계 해야한다는 깨달음을 얻게 하였습니다. 마지막으로 JTAG 디버깅 회로를 구현하고 RF 성능을 확보하기 위해 PCB 패턴과 접지를 처리하고 PCB 설계 규칙을 공부하는 경험은, 안정적이고 효율적인 하드웨어를 만들 수 있게된 발판이 되었습니다.",
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
    return null;
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

        {projectData.myRole && (
          <>
            <SectionTitle>담당 역할</SectionTitle>
            <ul className="list-disc list-inside text-dark-text space-y-2">
              {projectData.myRole.map((item: string, index: number) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
              ))}
            </ul>
          </>
        )}

        {projectData.implementation && (
          <>
            <SectionTitle>핵심 구현 내용</SectionTitle>
            <ul className="list-disc list-inside text-dark-text space-y-2">
              {projectData.implementation.map((item: string, index: number) =>
                item === "" ? <li key={index} className="list-none h-3"></li> : <li key={index}>{item}</li>
              )}
            </ul>
          </>
        )}

        <SectionTitle>프로젝트 회고</SectionTitle>
        {/* --- [수정됨] 회고 내용이 p 태그 안에서 올바르게 렌더링됨 --- */}
        <p className="text-dark-text leading-relaxed bg-dark-bg p-4 rounded-md border border-dark-border">
          {projectData.retrospective}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
