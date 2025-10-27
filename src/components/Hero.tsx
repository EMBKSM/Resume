const Hero = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-heading mb-3">
        저는 펌웨어부터 RTL까지, 시스템을 관통하는 FPGA 엔지니어입니다
      </h2>
      <div className="text-lg text-light-text dark:text-dark-text space-y-4 leading-relaxed max-w-4xl">
        <p>
          저는 C/C++, C#, FASM을 기반으로 한 펌웨어 및 시스템 소프트웨어 개발 경험과, Verilog를 활용한 RTL 설계 및 검증
          역량을 함께 갖춘 엔지니어입니다. 하드웨어와 소프트웨어를 모두 아우르는 이 양방향 기술 스택은, 시스템 레벨에서
          발생하는 복잡한 문제를 근본적으로 해결하고, 인터페이스 최적화를 통해 효율적이고 안정적인 성능을 구현하는 데
          강력한 시너지를 발휘 할 수 있습니다.
        </p>
        <p>
          AXI, PCIe와 같은 표준 프로토콜 기반의 IP 설계부터 고속 데이터 처리 시스템 구현까지, 저는 저수준 하드웨어
          제어부터 상위 레벨 애플리케이션까지 통합적으로 개발할 수 있는 역량을 보유하고 있습니다. 이를 통해 단순한 기능
          구현을 넘어, 시스템 전체를 바라보며 성능과 확장성을 극대화하는 개발자 입니다.
        </p>
        {/* // 원본의 스킬 요약 태그입니다. 필요하다면 주석을 해제하거나 새롭게 구성하세요.
          <p className="font-mono text-sm text-pcb-green">
            // 주요 역량: RTL Design & Verification, FPGA Implementation, C/C++/Python/C#/FASM, System-Level Debugging
          </p> 
        */}
      </div>
    </section>
  );
};

export default Hero;
