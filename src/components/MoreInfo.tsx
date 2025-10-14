import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => (
  <h2 className="text-3xl font-bold font-serif text-gray-800 dark:text-dark-heading mb-8 border-l-4 border-signal-blue pl-4">
    {children}
  </h2>
);

const MoreInfo = () => {
  return (
    <section id="more-info" className="py-16">
      <SectionTitle>More Information</SectionTitle>
      <div className="space-y-12">
        {/* --- 경력(Work Experience) --- */}
        <div>
          <h3 className="text-2xl font-bold text-gray-700 dark:text-dark-heading mb-6">Work Experience</h3>
          <div className="relative border-l-2 border-light-border dark:border-dark-border ml-2 pl-8 pb-4">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-signal-blue rounded-full border-4 border-light-bg dark:border-dark-bg"></div>
            <p className="font-bold text-lg text-gray-800 dark:text-dark-heading">신입 (Newcomer)</p>
            <p className="text-md text-gray-600 dark:text-dark-text mt-2">
              프로젝트 경험을 통해 실무 역량을 쌓아온 준비된 신입 엔지니어입니다.
            </p>
          </div>
        </div>

        {/* --- 학력(Education) --- */}
        <div>
          <h3 className="text-2xl font-bold text-gray-700 dark:text-dark-heading mb-6">Education</h3>
          <div className="relative border-l-2 border-light-border dark:border-dark-border ml-2 pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-signal-blue rounded-full border-4 border-light-bg dark:border-dark-bg"></div>
            <p className="font-bold text-lg text-gray-800 dark:text-dark-heading">
              대덕소프트웨어마이스터고등학교 (2024 ~ 2027)
            </p>
            <p className="text-md text-gray-600 dark:text-dark-text">임베디드소프트웨어과</p>
          </div>
        </div>

        {/* --- 자격증 및 수상(Certifications & Awards) --- */}
        <div>
          <h3 className="text-2xl font-bold text-gray-700 dark:text-dark-heading mb-6">Certifications & Awards</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-700 dark:text-dark-heading mb-3">Awards</h4>
              <ul className="list-disc list-inside text-light-text dark:text-dark-text space-y-1 pl-4">
                <li className="flex justify-between">
                  <span>빛가람 에너지밸리 소프트웨어 경진대회 우수상 (2024.12)</span>
                  <span>한전KDN</span>
                </li>
                <li className="flex justify-between">
                  <span>2025 교내해커톤 대회 우수상 (2025.07)</span>
                  <span>대덕소프트웨어마이스터고등학교</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-700 dark:text-dark-heading mb-3">Certifications</h4>
              <ul className="list-disc list-inside text-light-text dark:text-dark-text space-y-1 pl-4">
                <li>정보처리기능사 (2025.04.18, No. 25401280425E)</li>
                <li>전기기능사 (필기 합격)</li>
                <li>전자기능사 (필기 합격)</li>
                <li>전자캐드기능사 (필기 합격)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
