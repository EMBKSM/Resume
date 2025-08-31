const Footer = () => {
  return (
    <footer id="contact" className="text-center py-12 mt-16 border-t border-light-border dark:border-dark-border">
      <h2 className="text-3xl font-bold font-serif text-gray-800 dark:text-dark-heading mb-4">Contact</h2>
      <p className="text-lg text-gray-600 dark:text-dark-text mb-6 max-w-2xl mx-auto">
        새로운 기회에 대해 언제나 열려있습니다. 기술적 도전을 함께할 기회를 기다립니다. 편하게 연락 주세요.
      </p>
      <div className="flex justify-center items-center space-x-8 text-signal-blue font-semibold text-lg">
        <a href="mailto:your.email@example.com" className="hover:underline dark:hover:text-pcb-green transition-colors">
          Email
        </a>
        <a
          href="https://github.com/EMBKSM"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline dark:hover:text-pcb-green transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline dark:hover:text-pcb-green transition-colors"
        >
          LinkedIn
        </a>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-10">© 2025 김민준. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
