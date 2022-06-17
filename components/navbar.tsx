import { useTheme } from 'next-themes';

import { FiMoon, FiSun } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const colorModeIcon = theme === 'dark' ? <FiSun /> : <FiMoon />;

  return (
    <header>
      Navbar{' '}
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="p-3 h-12 w-12 order-2 md:order-3"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {colorModeIcon}
      </button>
    </header>
  );
};

export default Navbar;
