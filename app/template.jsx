"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();

  // 애니메이션 효과 정의 (페이드 인/아웃)
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -20 },
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.main
        key={pathname} // 경로가 바뀔 때마다 애니메이션을 트리거하기 위한 key
        variants={variants}
        initial="hidden" // 초기 상태
        animate="enter" // 나타날 때 상태
        exit="exit" // 사라질 때 상태
        transition={{ type: "linear", duration: 0.3 }} // 애니메이션 속도 및 방식
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
