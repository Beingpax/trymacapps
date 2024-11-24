import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });
  
  useEffect(() => {
    // Apply theme class to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Store theme preference
    localStorage.setItem('theme', theme);
    
    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', 
        theme === 'dark' ? '#111827' : '#ffffff'
      );
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl
        bg-white dark:bg-gray-800 
        text-gray-500 dark:text-gray-400
        hover:bg-gray-50 dark:hover:bg-gray-700/90
        border border-gray-200 dark:border-gray-700/50
        shadow-sm hover:shadow-md
        transition-all duration-300 ease-in-out
        group
        hover:-translate-y-0.5"
      aria-label="Toggle theme"
    >
      <span className="relative">
        {/* Sun icon */}
        <svg 
          className={`w-5 h-5 transition-all duration-300 transform
            ${theme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-0 opacity-0'}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" 
          />
        </svg>

        {/* Moon icon */}
        <svg 
          className={`w-5 h-5 transition-all duration-300 transform absolute top-0 left-0
            ${theme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
          />
        </svg>
      </span>

      {/* Highlight effect */}
      <span className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-colors duration-300" />
      
      {/* Active indicator */}
      <span className="absolute -bottom-px left-1/2 w-8 h-0.5 -translate-x-1/2 rounded-full
        bg-primary/0 group-hover:bg-primary/40 dark:group-hover:bg-primary/60
        transition-all duration-300 scale-0 group-hover:scale-100" />
    </button>
  );
}