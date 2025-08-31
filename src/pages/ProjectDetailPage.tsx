import { useParams, Link } from "react-router-dom";

const ProjectDetailPage = () => {
  const { projectId } = useParams();

  const projectData = {
    id: projectId,
    title: `프로젝트 ${projectId} 상세 페이지`,
    description:
      "여기에는 프로젝트의 상세한 내용, 사용한 기술, 설계 아키텍처 다이어그램, 나의 역할, 배운 점 등을 자세하게 작성합니다.",
  };

  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      {/* 이력서 메인으로 돌아가는 링크 */}
      <Link to="/" className="inline-block mb-8 text-blue-600 hover:underline transition-colors">
        &larr; 이력서로 돌아가기
      </Link>

      <h1 className="text-4xl font-bold font-serif mb-4 text-gray-800">{projectData.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{projectData.description}</p>

      {/* 여기에 프로젝트와 관련된 더 상세한 내용을 추가할 수 있습니다.
        - 기술 스택
        - 시스템 아키텍처 이미지
        - 문제 해결 과정
        - 결과 및 성과 (수치화된 데이터)
      */}
    </div>
  );
};

export default ProjectDetailPage;
