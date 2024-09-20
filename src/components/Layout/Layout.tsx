import React from 'react';
import Banner from '../banner';
import { Card, CardHeader } from '../ui/card';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Banner />
      {title && (
        <div className="flex justify-center items-center flex-grow mb-12">
          <Card className="max-w-max">
            <CardHeader className="bg-gray-200 dark:bg-gray-800 text-center py-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
            </CardHeader>
          </Card>
        </div>
      )}
      <main className="flex-grow flex flex-col items-center justify-center w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;