import React from 'react';

const Logo = () => {
  return (
    <div className="flex cursor-pointer items-center gap-4">
      <img className="h-12" src="/img/logo.png" alt="Logo" />
      <h1 className="text-gray-800 dark:text-white">Давай</h1>
    </div>
  );
};

export default Logo;
