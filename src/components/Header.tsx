const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 border-b border-light-border dark:border-dark-border">
      <div>
        <h1 className="font-serif text-3xl font-bold text-gray-800 dark:text-dark-heading">김민준</h1>
        <p className="text-md text-signal-blue font-semibold">Embedded FPGA / RTL Design Engineer</p>
      </div>
      <div className="flex items-center space-x-6">
        <nav className="hidden sm:flex space-x-6 text-md">
          <a
            href="#skills"
            className="text-light-text dark:text-dark-text hover:text-signal-blue dark:hover:text-pcb-green transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-light-text dark:text-dark-text hover:text-signal-blue dark:hover:text-pcb-green transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-light-text dark:text-dark-text hover:text-signal-blue dark:hover:text-pcb-green transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
