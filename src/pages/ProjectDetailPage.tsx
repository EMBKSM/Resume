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
    techStack: ["C/C++", "LoRa", "GPS", "RF", "TTGO LoRa32 V2.1", "ESP32"],
    description:
      "인터넷 연결 없이 LoRa 통신과 GPS를 활용하여 긴급 상황에서 신속하고 효율적으로 택시를 호출할 수 있는 휴대용 기기 개발 프로젝트이다.",
    background:
      "여행 중 스마트폰 방전으로 교통편 확보에 어려움을 겪었던 개인적인 경험과, 대중교통 시스템이 부족한 거주 지역의 불편함을 해결하고자 프로젝트를 시작하게 되었다.",
    teamInfo: "개인 프로젝트",
    features: [
      "LoRa 통신을 활용한 비인터넷 환경에서의 택시 호출",
      "GPS를 이용한 정확한 위치 정보 전송",
      "RSSI 신호 강도 기반 최적의 택시 자동 배차",
      "버튼 하나로 동작하는 간편한 UX",
    ],
    implementation: [
      "LILYGO® TTGO LoRa32 V2.1 모듈을 기반으로 C++ 펌웨어 개발",
      "ESP32의 고유 ID를 통신 ID로 활용, RSSI 값과 함께 struct로 관리하고 priority_queue를 사용하여 가장 가까운 모듈(택시)을 효율적으로 탐색",
      "LoRa 패킷의 첫 바이트에 모듈 ID를 기록하고, peek() 함수를 활용하여 수신 측에서 자신을 가리키는 패킷이 아닐 경우 읽지 않고 무시하는 방식으로 1:N 통신 충돌 문제 해결",
      "호출 버튼 입력 시 GPS 좌표를 포함한 LoRa 패킷을 전송하도록 전체 시스템 로직 구현",
    ],
    issues: [
      {
        problem: "RSSI 신호 강도만으로 거리 측정을 구현하는 것에 대한 초기 막막함",
        solutions: [
          "[해결] C++의 operator 오버로딩과 priority_queue를 깊이 있게 학습하고 적용하여 거리 측정 로직 구현",
        ],
      },
      {
        problem: "LoRa 브로드캐스트 통신 특성상 발생하는 다중 기기 간 경쟁 조건(Race Condition)",
        solutions: [
          "[해결] 가장 먼저 응답하는 기기가 작업을 선점(Preemption)하도록 하는 애플리케이션 로직을 연구 및 구현",
        ],
      },
    ],
    retrospective: [
      "프로그래밍 언어에 대한 깊은 이해가 코드의 활용 범위와 질을 극적으로 향상시킨다는 것을 깨달았고, 그에따라 코드가 매우 중요하다는 것을 느꼈다.",
      "LoRa 통신 방식과 다중 기기 간의 경쟁 조건을 고려한 시스템 설계를 깊이 연구하고 해결하는 과정에서 임베디드 통신 시스템에 대한 이해도를 높일 수 있었음.",
    ],
  },
  "2": {
    title: "AXI-Stream 기반 고속 이미지 프로세싱 IP 코어 설계",
    description:
      "Zynq UltraScale+ MPSoC 환경에서 고속으로 입력되는 이미지 데이터를 실시간으로 처리하기 위한 FPGA 기반 IP 코어를 설계하고 검증한 프로젝트이다.",
    background:
      "소프트웨어만으로는 실시간 처리가 어려운 고해상도 영상 데이터나 머신비전 시스템의 처리 속도 한계를 극복하고자 프로젝트를 기획하였으며, CPU의 순차적 연산 방식에서 벗어나, FPGA의 병렬 처리 능력을 활용하여 데이터 처리 파이프라인을 하드웨어로 구현함으로써 높은 Throughput과 Low Latency 성능을 확보하고자 했다.",
    teamInfo: "개인 프로젝트",
    features: [
      "고속 데이터 전송을 위한 표준 AXI-Stream 프로토콜을 사용하여 데이터를 실시간 입출력",
      "입력되는 영상의 Grayscale 변환 및 Sobel Edge Detection 필터를 하드웨어 로직으로 구현하여 실시간 처리 수행",
      "FPGA의 병렬 처리 아키텍처를 통해 픽셀 단위의 파이프라인을 구축하여 고속의 데이터 처리",
      "설계된 IP 코어를 Zynq MPSoC의 PL에 통합하고, PS와 연동하여 전체 시스템 제어",
    ],
    implementation: [
      {
        title: "PL RTL 구현내용:",
        details: [
          "고속 실시간 이미지 데이터 입출력을 위한 표준 AXI-Stream 프로토콜 마스터 및 슬레이브 인터페이스 로직 구현",
          "입력되는 픽셀 데이터를 실시간으로 변환하는 Grayscale 변환 하드웨어 로직 설계",
          "Grayscale 데이터를 입력받아 엣지를 검출하는 Sobel Edge Detection 필터 하드웨어 로직 구현",
          "픽셀 클럭 단위로 데이터가 처리될 수 있도록 병렬 처리 파이프라인 아키텍처를 구축하여 높은 Throughput 확보",
          "AXI-Stream의 TVALID/TREADY 핸드셰이크를 관리하고, 다운스트림의 백프레셔 발생 시 데이터 유실 없이 파이프라인을 일시 중지시키는 FSM(Finite State Machine) 설계",
        ],
      },
      {
        title: "PS Control & Verification 구현 내용:",
        details: [
          "Zynq MPSoC의 PS에서 C/C++ 코드를 통해 PL에 통합된 이미지 프로세싱 IP 코어의 레지스터를 제어하여 동작(시작, 정지, 파라미터 설정) 관리",
          "IP 코어의 신뢰성 검증을 위해 SystemVerilog를 사용한 테스트벤치 환경 구축",
          "SystemVerilog의 제약 기반 무작위 테스트 기법(rand)을 도입하여, 정상적인 데이터 외 TVALID/TREADY 신호가 불규칙하게 발생하는 다양한 엣지 케이스와 코너 케이스를 자동으로 생성 및 테스트",
          "SVA(SystemVerilog Assertions)를 사용하여 Grayscale 변환 값이나 Sobel 필터의 엣지 검출 값이 예상되는 범위와 일치하는지 실시간으로 모니터링하고, 프로토콜 타이밍 위반 및 잠재적 하드웨어 오류 식별",
          "PS와 PL 간의 데이터 연동을 통해 CPU(PS)가 하드웨어 가속(PL) 결과를 받아 후속 처리를 수행하는 이기종 컴퓨팅 시스템의 소프트웨어 제어 플로우 구현",
        ],
      },
    ],
    issues: [
      {
        problem: "AXI-Stream TVALID/TREADY 핸드셰이크의 복잡한 타이밍 이해 및 구현의 어려움",
        solutions: ["[해결] TVALID/TREADY 핸드셰이크 타이밍을 완벽히 이해하고 FSM 설계에 성공적으로 적용"],
      },
      {
        problem: "다운스트림 백프레셔 발생 시 데이터 유실 없이 파이프라인을 일시 중지시키는 FSM 구현",
        solutions: [
          "[해결] 다운스트림 모듈이 TREADY 신호를 LOW로 설정(de-assert)한 상태를 백프레셔로 감지하고, (TVALID=1 & TREADY=0) 데이터 유실 없이 파이프라인을 일시 정지(stall)시키는 안정적인 FSM 구현",
        ],
      },
      {
        problem: "초기 설계의 타이밍 오류로 인한 데이터 유실 문제 발생",
        solutions: ["[해결] 시뮬레이션 파형을 픽셀 클럭 단위로 세밀하게 분석하여 FSM 상태 전이 로직 수정 및 보완"],
      },
      {
        problem: "IP 코어의 신뢰성 확보를 위한 SystemVerilog 검증 환경 구축",
        solutions: [
          "[적용] rand 키워드를 활용한 제약 기반 무작위 테스트(Constrained Random Test) 도입",
          "[적용] TVALID/TREADY가 불규칙하게 발생하는 엣지 케이스 및 코너 케이스 자동 생성 및 테스트",
        ],
      },
      {
        problem: "시뮬레이션에서만 발견 가능한 잠재적 하드웨어 오류 식별 필요",
        solutions: [
          "[적용] SystemVerilog Assertion(SVA)을 사용해 Grayscale, Sobel 필터 값 등 주요 데이터 실시간 모니터링 및 디버깅",
        ],
      },
    ],
    retrospective: [
      "설계부터 검증까지의 전체 FPGA 개발 흐름을 깊이 있게 깨닫고 공부할 수 있었음.",
      "소프트웨어만으로는 해결할 수 없는 성능의 한계를 하드웨어 가속을 통해 극복하는 구체적인 방법을 배웠음.",
      "Zynq MPSoC 환경에서 PS와 PL이 협력하는 이기종 컴퓨팅 시스템에 대한 실질적인 이해를 높이는 계기가 되었음.",
      "Verilog와 System Verilog만이 아닌 HLS라는것이 있다는 것을 일게되어 다음 프로젝트에는 HLS를 사용하여 HW를 설계하면 합성까지의 시간을 단축시킬 수 있다는 새로운 사실을 알게되었다.",
    ],
  },
  "4": {
    title: "FLP: LoRa 기반 단체 이동 이탈 감지 시스템",
    description:
      "단체 이동 중 인원 이탈을 실시간으로 감지하고, 인솔자와 이탈자 모두에게 경고를 전달하는 LoRa 기반 이탈 감지 시스템이며, 스마트폰 앱 없이 독립적으로 동작하는 착용형 단말기를 직접 설계 및 제작한 팀 프로젝트이다.",
    background:
      "단체 체험학습 등에서 아동이 인솔자로부터 이탈하여 발생하는 안전사고를 예방하고자 프로젝트를 기획하였다. 기존 위치 추적 앱은 스마트폰 보유 및 네트워크 연결이 필수적이라 저연령 사용자에게 부적합하며, Bluetooth 기반 제품은 통신 거리가 짧다는 한계가 있었다. 이를 극복하기 위해 LoRa 통신을 채택하여 통신 거리와 기기 의존성 문제를 해결하고자 하였다.",
    teamInfo: "총 3명의 팀 프로젝트로, 펌웨어/하드웨어, 서버, 안드로이드 앱 개발을 각각 분담하여 진행",
    features: [
      "스마트폰 없이 독립적으로 동작하는 착용형 단말기(Host, Terminal)",
      "LoRa 통신을 이용한 최대 2km의 넓은 통신 반경 확보",
      "1~5초 주기의 빠른 위치 정보 갱신",
      "관리자용 Android 앱을 통한 실시간 위치 모니터링 및 이탈 알림",
      "이탈 발생 시 사용자 단말기에서 발생하는 단계별 경고음",
    ],
    // [수정됨] string[] -> { title, details }[] 데이터 구조로 변경
    myRole: [
      {
        title: "Hardware (H/W) 설계:",
        details: ["전반적인 회로 설계", "PCB Artwork"],
      },
      {
        title: "Firmware (F/W) 개발:",
        details: ["전체 Firmware 담당"],
      },
    ],
    implementation: [
      {
        title: "Hardware (공통 회로):",
        details: [
          "433MHz 대역 통신을 위해 SX1278 모듈 기반의 안테나 매칭을 포함한 LoRa RF 공통 회로 설계",
          "MCP73831(Li-Po 충전) 및 AP2112K-3.3(LDO)을 사용하여 USB-C/배터리 입력을 받는 3.3V 전원 시스템 공통 회로 구성",
          "CP2104 USB-to-UART 브릿지 IC와 USB-C 커넥터를 사용한 PC 시리얼 통신 및 펌웨어 다운로드 공통 회로 구현",
          "L86-M33 GPS 모듈을 탑재하여 위치 정보 수집을 위한 공통 회로 및 안테나 인터페이스 설계",
          "Host(ESP32) 보드에 펌웨어의 효율적인 디버깅을 위한 JTAG 인터페이스 회로 추가 설계",
        ],
      },
      {
        title: "Firmware (Host & Terminal):",
        details: [
          "Host(ESP32) 펌웨어는 C 언어와 ESP-IDF(FreeRTOS)를 기반으로, Terminal(STM32F103) 펌웨어는 C 언어와 HAL 라이브러리를 기반으로 개발하여 LoRa 통신 시스템을 구축",
          "Terminal은 UART2로 GPS 모듈의 NMEA 센텐스를 파싱하며, 5초 주기 또는 '호출'/'위험' 버튼 입력 시 고유 ID, GPS 좌표, Target ID, 위험 상태를 \"ID,Lat,Lon,TargetID,Danger\" 형식의 문자열 패킷으로 LoRa 전송",
          "Host는 SPI를 통해 이 LoRa 패킷을 수신, split_lora_response 함수로 파싱하여 Target ID를 확인하고, TerminalDevice 구조체 배열로 관리되는 단말기 목록의 최신 GPS 좌표와 위험 상태를 갱신",
          "Host는 Wi-Fi(AP+STA 모드)로 인터넷에 연결하며, WSS 클라이언트를 통해 원격 서버로 모든 단말기 정보와 자체 GPS 수신 정보를 통합하여 주기적으로 JSON 전송",
          "Wi-Fi AP 모드에서 Captive Portal 기능을 포함한 웹 서버를 구동하여 사용자에게 Wi-Fi 연결 정보 및 AP 정보 설정 페이지를 제공하며, 이 설정값들과 등록된 단말기 ID 목록은 NVS에 영속 저장",
          "특정 GPIO 버튼(CTRL + FIND_HOST) 조합을 통해 10초간 '단말기 등록 모드'로 진입하며, 이 동안 수신된 \"REG,<ID>,<TARGET_ID>\" 형식의 LoRa 등록 요청 패킷을 처리하여 새로운 단말기를 시스템에 추가하고 NVS에 저장",
        ],
      },
    ],
    issues: [
      {
        problem: "다수 터미널의 동시 송신으로 인한 패킷 충돌 및 긴급 데이터 유실 문제 발생",
        solutions: ["[해결] 개별 송신 방식 대신, Host가 중앙에서 전체 송수신 흐름을 제어하는 MAC 프로토콜 도입"],
      },
      {
        problem: "배터리로 동작하는 장치의 전력 소모 최소화 필요",
        solutions: ["[해결] 펌웨어의 Sleep 모드와 하드웨어의 대기 전류를 함께 최적화하는 복합적인 처전력 접근"],
      },
      {
        problem: "LoRa(SX1278) 모듈의 안정적인 RF 성능 확보 필요",
        solutions: ["[해결] 데이터시트를 기반으로 RF 임피던스 매칭 회로 구성"],
      },
      {
        problem: "GPS 모듈(L86-M33)이 전원부 노이즈에 민감하게 반응",
        solutions: ["[해결] 아날로그 전원부와 디지털 전원부를 분리하여 설계"],
      },
      {
        problem: "안정적인 하드웨어 동작, 디버깅, RF 성능 확보, 기기 소형화 등 복합적 과제",
        solutions: [
          "[해결] JTAG 디버깅 회로, RF 패턴, 접지 처리 및 PCB 설계 규격(DRC)을 준수하여 2종의 Custom PCB(ESP32, STM32) 직접 설계 및 제작",
        ],
      },
    ],
    retrospective: [
      "임베디드 시스템 문제는 FreeRTOS 태스크 스케줄링이나 HAL 콜백 같은 펌웨어 논리만으로 해결할 수 없음을 깨닫게 되었음.",
      "안정적인 1:N 통신을 위해서는 데이터 충돌을 원천적으로 방지하는 MAC 프로토콜과 같은 시스템 단위의 제어가 필수적임.",
      "433MHz LoRa 통신은 건물, 지형 등 물리적 환경 변수에 따라 통신 가능 거리가 민감하게 변화한다는 것을 직접 체감함.",
      "저전력 설계는 펌웨어의 Sleep 모드와 하드웨어의 정적인 제약조건이 명확히 이해하게 됨.",
      "Custom PCB 설계 및 제작 경험은 회로의 동작 원리에 대한 심도 있는 지식을 얻게 하였음.",
      "PCB 설계는 단순 배선이 아닌, RF 임피던스, 노이즈, 전원 분리 등 수많은 현실의 변수들을 제어하는 과정임을 깨닫게 됨.",
      "JTAG, RF 성능 확보를 위한 패턴 및 접지 처리, PCB 설계 규칙 학습 경험은 안정적이고 효율적인 하드웨어를 만들 수 있는 발판이 됨.",
    ],
  },
  "3": {
    title: "Health-Run: AI 러닝 자세 교정 시스템",
    description:
      "5개의 IMU 센서와 Zynq-7020 FPGA 기반 On-Device AI를 활용하여, 사용자의 러닝 자세를 실시간으로 분석하고 정확도를 피드백하는 시스템이다.",
    background:
      "해커톤(주제: AI·SW)에서 약 1일 12시간 동안 4인 팀으로 진행한 프로젝트입니다. 초기 휠체어 환자 모니터링 기획에서 러닝 자세 교정으로 주제에 맞게 프로젝트가 변경되었다.",
    teamInfo: "4인 IoT 융합팀 (기획/UI 1명, 프론트엔드 1명, 백엔드/IoT 1명, FPGA/HW 1명)",
    // [수정됨] string[] -> { title, details }[] 데이터 구조로 변경
    myRole: [
      {
        title: "데이터 수집 및 AI 모델 학습:",
        details: [
          "5채널 IMU 센서 데이터 수집 및 라벨링 (걷기, 뛰기, 정지, 잘못된 자세 등)",
          "Python/TensorFlow를 이용한 2종류의 CNN 모델 설계 및 학습 (자세 정확도 모델, 활동 구분 모델)",
        ],
      },
      {
        title: "FPGA (PL/PS) 시스템 구현:",
        details: [
          "PL 기반 I2C_Reader IP 설계 (FSM 로직으로 5개 센서 데이터 병렬 수집)",
          "PL 기반 CNN 추론 가속기(MAC IP) 하드웨어 로직 구현",
          "Zynq(PS)와 PL IP간의 AXI4-Lite 및 AXI4-Stream 인터페이스 연동",
          "두 개의 CNN 모델을 PL에서 병렬 처리하고, 최종 자세 정확도를 UART로 출력하는 시스템 구현",
        ],
      },
    ],
    features: [
      "5채널 IMU 센서 데이터를 FSM 기반 I2C_Reader IP로 실시간 병렬 수집",
      "Zynq-7020의 AXI4-Lite 및 AXI4-Stream 프로토콜을 통한 고속 데이터 전송",
      "PL 영역에서 2개의 CNN 모델(자세 정확도, 활동 구분)을 병렬로 동시 추론",
      "CNN 연산을 위한 커스텀 MAC IP 하드웨어 가속기 구현",
      "최종 추론 결과(자세 정확도)를 UART를 통해 실시간 피드백",
    ],
    implementation: [
      {
        title: "FPGA (PL/PS) & On-Device AI (담당)",
        details: [
          "5개의 가속도 센서 데이터를 병렬 수집하기 위해, FSM 로직으로 제어되는 I2C_Reader IP를 Verilog로 설계.",
          "Zynq-7020(PS)이 AXI4-Lite를 통해 I2C_Reader와 MAC IP들을 제어.",
          "I2C_Reader에서 수집된 5채널 데이터가 AXI4-Stream을 통해 CNN MAC IP로 고속 전송.",
          "CNN 연산을 수행하는 MAC IP들을 Verilog로 구현.",
          "두 개의 CNN 모델(1: 자세 정확도, 2: 걷기/뛰기/정지 구분)을 PL 영역에 구현하여 병렬로 처리.",
          "최종 자세 정확도 추론 결과를 PS를 거치지 않고 PL에서 직접 UART IP를 통해 외부로 출력.",
        ],
      },
    ],
    issues: [
      {
        problem: "커스텀 IP 간 Clock Domain이 달라 데이터 동기화 문제 발생",
        solutions: [
          "[해결] Clock Domain Crossing(CDC) 기법을 적용하여 비동기 FIFO(Async FIFO)를 설계, 서로 다른 클럭을 사용하는 IP(I2C_Reader, MAC IP) 간의 데이터를 안정적으로 동기화",
        ],
      },
      {
        problem: "시스템 클럭(PS)과 AXI4 버스 클럭(PL) 간의 속도 차이로 인한 병목 현상",
        solutions: [
          "[해결] AXI-Stream Data FIFO와 같은 버퍼링 로직을 사용하여 클럭 차이를 완충하고, AXI Interconnect 설정을 최적화하여 PS와 PL 간 데이터 전송 효율을 보장",
        ],
      },
    ],
    retrospective: [
      "해커톤을 진행하며 급한 일정에도 불구하고 Verilog RTL 설계는 단순한 기능 구현을 넘어, 구현한 로직이 의도대로 정확히 작동하는지 검증(Verification)하는 과정이 훨씬 더 중요하다는 것을 깨달았다.",
      "SystemVerilog 기반 테스트벤치를 구축하여 지속적인 검증을 수행한 경험은, 복잡한 시스템의 안정성 확보에 대한 중요성을 실감하는 계기가 되었다.",
      "CNN 모델의 연산 과정을 하드웨어(RTL)로 직접 구현하면서, MAC 연산 파이프라인과 데이터 흐름을 깊이 있게 고민하게 되었고, 이는 CNN 알고리즘 자체에 대한 이해도를 한층 더 높이는 계기가 되었다.",
    ],
  },
};
// --- [수정 완료] ---

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

        {projectData.techStack && (
          <div className="my-8">
            <h4 className="text-lg font-bold text-dark-heading mb-3 border-l-4 border-signal-orange pl-2">기술 스택</h4>
            <div className="flex flex-wrap gap-2 p-2">
              {projectData.techStack.map((tech: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-pcb-green/20 text-pcb-green text-sm font-medium rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <SectionTitle>프로젝트 배경</SectionTitle>
        <p className="text-dark-text leading-relaxed">{projectData.background}</p>

        <SectionTitle>프로젝트 인원</SectionTitle>
        <p className="text-dark-text leading-relaxed">{projectData.teamInfo}</p>

        {/* --- [수정됨] "담당 역할" 렌더링 로직 수정 --- */}
        {projectData.myRole && (
          <>
            <SectionTitle>담당 역할</SectionTitle>
            <ul className="list-none list-inside text-dark-text space-y-4">
              {projectData.myRole.map((item: any, index: number) => {
                // (CASE 1) { title, details } 객체 구조 (Project 3, 4)
                if (typeof item === "object" && item.title && item.details) {
                  return (
                    <li key={index} className="space-y-2">
                      <strong className="text-dark-heading text-lg">{item.title}</strong>
                      <div className="bg-dark-bg p-4 rounded-md border border-dark-border">
                        <ul className="list-disc list-outside space-y-2 pl-5">
                          {item.details.map((detail: string, dIndex: number) => (
                            <li key={dIndex}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }
                // (CASE 2 - Fallback) string[] 구조 (Project 1, 2)
                // 이 부분을 박스 스타일로 수정합니다.
                if (typeof item === "string") {
                  // 이 map 루프는 한 번만 실행되어야 하므로,
                  // 이 로직은 사실상 string[] 전체를 하나의 박스로 만듭니다.
                  // Project 1, 2는 myRole이 없으므로 이 코드는 실행되지 않지만,
                  // 혹시 모를 string[] 데이터에 대비해 수정합니다.
                  if (index === 0) {
                    // 배열의 첫 번째 항목일 때만 박스를 그림
                    return (
                      <li key={index} className="list-none">
                        <div className="bg-dark-bg p-4 rounded-md border border-dark-border">
                          <ul className="list-disc list-outside space-y-2 pl-5">
                            {/* 전체 projectData.myRole 배열을 매핑 */}
                            {projectData.myRole.map((roleItem: string, rIndex: number) => (
                              <li key={rIndex}>{roleItem}</li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    );
                  }
                  return null; // 첫 번째 항목 외에는 아무것도 렌더링하지 않음
                }
                return null;
              })}
            </ul>
          </>
        )}
        {/* --- [수정 완료] --- */}

        <SectionTitle>주요 기능</SectionTitle>
        <ul className="list-disc list-inside text-dark-text space-y-2">
          {projectData.features?.map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {projectData.implementation && (
          <>
            <SectionTitle>핵심 구현 내용</SectionTitle>
            <ul className="list-none list-inside text-dark-text space-y-4">
              {projectData.implementation.map((item: any, index: number) => {
                if (typeof item === "object" && item.title && item.details) {
                  return (
                    <li key={index} className="space-y-2">
                      <strong className="text-dark-heading text-lg">{item.title}</strong>
                      <div className="bg-dark-bg p-4 rounded-md border border-dark-border">
                        <ul className="list-disc list-outside space-y-2 pl-5">
                          {item.details.map((detail: string, dIndex: number) => (
                            <li key={dIndex}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }
                if (typeof item === "string") {
                  if (item === "") {
                    return <li key={index} className="list-none h-3"></li>;
                  }
                  // Project 1 (LMB)은 이 스타일을 유지
                  return (
                    <li key={index} className="list-disc ml-5">
                      {item}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </>
        )}

        {projectData.issues && (
          <>
            <SectionTitle>주요 이슈 및 해결</SectionTitle>
            <ul className="list-none list-inside text-dark-text space-y-4">
              {projectData.issues.map((issue: any, index: number) => (
                <li key={index} className="space-y-2">
                  <strong className="text-dark-heading">[이슈] {issue.problem}</strong>

                  {issue.solutions.map((solution: string, sIndex: number) => (
                    <div key={sIndex} className="bg-dark-bg p-4 rounded-md border border-dark-border">
                      <p style={{ whiteSpace: "pre-line" }}>{solution}</p>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </>
        )}

        <SectionTitle>프로젝트 회고</SectionTitle>
        <div className="text-dark-text leading-relaxed bg-dark-bg p-4 rounded-md border border-dark-border">
          {Array.isArray(projectData.retrospective) ? (
            <ul className="list-disc list-outside space-y-2 pl-5">
              {projectData.retrospective.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p style={{ whiteSpace: "pre-line" }}>{projectData.retrospective}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
