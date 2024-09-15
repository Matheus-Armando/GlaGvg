import React from 'react';
import Banner from '../banner';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
        <Banner />
      <main className="flex-grow flex flex-col items-center justify-center w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;