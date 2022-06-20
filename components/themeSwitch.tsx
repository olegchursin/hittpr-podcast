import { FiMoon, FiSun } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  // read more: https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const colorModeIcon = theme === 'dark' ? <FiSun /> : <FiMoon />;

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center rounded-full bg-gray-200 p-3 dark:bg-gray-800"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {colorModeIcon}
    </button>
  );
};

export default ThemeSwitch;
