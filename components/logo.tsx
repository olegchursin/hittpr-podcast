import React from 'react';

const Logo = () => {
  return (
    <div className="flex cursor-pointer items-center gap-2 md:gap-4">
      <img className="h-8 md:h-12" src="/img/logo.png" alt="Logo" />
      <h1 className="text-xl text-gray-800 dark:text-white md:text-2xl">
        Давай
      </h1>
    </div>
  );
};

export default Logo;
