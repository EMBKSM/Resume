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
            <p className="font-bold text-lg text-gray-800 dark:text-dark-heading">회사명 (YYYY.MM ~ YYYY.MM)</p>
            <p className="text-md text-gray-600 dark:text-dark-text mb-2">직책 - 팀명</p>
            <ul className="list-disc list-inside text-light-text dark:text-dark-text space-y-1">
              <li>주요 업무 1: 간략한 설명</li>
              <li>주요 업무 2: 간략한 설명</li>
            </ul>
          </div>
        </div>

        {/* --- 학력(Education) --- */}
        <div>
          <h3 className="text-2xl font-bold text-gray-700 dark:text-dark-heading mb-6">Education</h3>
          <div className="relative border-l-2 border-light-border dark:border-dark-border ml-2 pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-signal-blue rounded-full border-4 border-light-bg dark:border-dark-bg"></div>
            <p className="font-bold text-lg text-gray-800 dark:text-dark-heading">대학교 이름 (YYYY.MM ~ YYYY.MM)</p>
            <p className="text-md text-gray-600 dark:text-dark-text">전공명 (학사/석사)</p>
          </div>
        </div>

        {/* --- 자격증 및 수상(Certifications & Awards) --- */}
        <div>
          <h3 className="text-2xl font-bold text-gray-700 dark:text-dark-heading mb-6">Certifications & Awards</h3>
          <ul className="list-disc list-inside text-light-text dark:text-dark-text space-y-1 pl-4">
            <li>자격증 혹은 수상 내역 (YYYY.MM)</li>
            <li>자격증 혹은 수상 내역 (YYYY.MM)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
