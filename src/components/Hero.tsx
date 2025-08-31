const Hero = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-heading mb-3">
        VHDL/Verilog를 이용한 고속 디지털 로직 설계 전문가
      </h2>
      <div className="text-lg text-light-text dark:text-dark-text space-y-4 leading-relaxed max-w-4xl">
        <p>
          Xilinx FPGA 기반 시스템에서 고속 데이터 처리 및 제어를 위한 RTL 설계를 수행합니다. AXI4 프로토콜 기반의 커스텀
          IP 설계 및 검증에 강점이 있으며, 타이밍 클로저와 리소스 최적화를 통해 시스템 성능을 극대화하는 문제 해결
          능력을 갖추고 있습니다.
        </p>
        <p className="font-mono text-sm text-pcb-green">
          // 주요 역량: RTL Design, Custom IP, Timing Closure, System Verification
        </p>
      </div>
    </section>
  );
};

export default Hero;
