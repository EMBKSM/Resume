const Hero = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-heading mb-3">
        저는 펌웨어부터 RTL까지, 시스템을 관통하는 FPGA 엔지니어입니다
      </h2>
      <div className="text-lg text-light-text dark:text-dark-text space-y-4 leading-relaxed max-w-4xl">
        <p>
          저는 펌웨어와 시스템 소프트웨어 개발, 그리고 Verilog를 활용한 RTL 설계 및 검증까지 아우르는 폭넓은 기술 역량을
          보유하고 있으며 C/C++, C#, 기반의 펌웨어 프로그래밍 경험을 통해 저수준 하드웨어 제어에 익숙하며, 동시에 AXI,
          PCIe 등 표준 프로토콜을 활용한 IP 설계와 고속 데이터 처리 시스템 개발을 수행해본 경헙이 있습니다.
        </p>
        <p>
          하드웨어와 소프트웨어를 함께 이해하고 통합할 수 있는 이러한 개발 경험은 복잡한 시스템 레벨 문제를 근본적으로
          해결하고, 인터페이스 최적화를 통해 효율적이면서도 안정적인 성능을 구현하는 데 이점이 있습니다. 저는 이러한
          경험을 바탕으로, 단순한 구현을 넘어 시스템 전체를 바라보며 최적의 성능과 확장성을 추구하는 방향의 지향하고
          있습니다.
        </p>
        {/* 
          <p className="font-mono text-sm text-pcb-green">
            // 주요 역량: RTL Design & Verification, FPGA Implementation, C/C++/Python/C#/FASM, System-Level Debugging
          </p> 
        */}
      </div>
    </section>
  );
};

export default Hero;
