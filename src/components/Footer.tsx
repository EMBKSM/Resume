import { useState } from "react";

const Footer = () => {
  const [phoneCopied, setPhoneCopied] = useState(false);
  const phoneNumber = "010-3382-7925";

  const handlePhoneClick = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setPhoneCopied(true);
      setTimeout(() => {
        setPhoneCopied(false);
      }, 2000);
    });
  };

  return (
    <footer id="contact" className="text-center py-12 mt-16 border-t border-light-border dark:border-dark-border">
      <h2 className="text-3xl font-bold font-serif text-gray-800 dark:text-dark-heading mb-4">Contact</h2>
      <p className="text-lg text-gray-600 dark:text-dark-text mb-6 max-w-2xl mx-auto">
        하드웨어와 소프트웨어의 경계를 넘어, 최적의 솔루션을 만들어갈 새로운 도전을 환영합니다.
      </p>
      <div className="flex justify-center items-center space-x-8 text-signal-blue font-semibold text-lg">
        <a href="mailto:embksm@gmail.com" className="hover:underline dark:hover:text-pcb-green transition-colors">
          Email
        </a>

        {/* 전화번호를 위한 버튼과 툴팁 */}
        <div className="relative">
          <button
            onClick={handlePhoneClick}
            className="hover:underline dark:hover:text-pcb-green transition-colors focus:outline-none"
          >
            Phone
          </button>
          {phoneCopied && (
            <div
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                         px-3 py-2 bg-gray-800 text-white text-xs rounded-md shadow-lg 
                         transition-opacity duration-300 text-center w-max"
            >
              {phoneNumber}
              <span className="block text-green-400 font-bold">Copied!</span>
            </div>
          )}
        </div>

        <a
          href="https://github.com/EMBKSM"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline dark:hover:text-pcb-green transition-colors"
        >
          GitHub
        </a>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-10">© 2025 김성민. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
