import React from 'react';
import Banner from '../banner';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb';

interface LayoutProps {
  children: React.ReactNode;
  breadcrumbItems?: { label: string; href?: string }[];
}

const Layout: React.FC<LayoutProps> = ({ children, breadcrumbItems }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Banner />
      {breadcrumbItems && (
        <div className="flex justify-center items-center mb-12">
          <Breadcrumb className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <BreadcrumbList>
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    {item.href ? (
                      <BreadcrumbLink href={item.href} className="text-blue-600 dark:text-blue-400">
                        {item.label}
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="text-gray-900 dark:text-gray-100">
                        {item.label}
                      </BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbItems.length - 1 && (
                    <BreadcrumbSeparator className="text-gray-500 dark:text-gray-400" />
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      )}
      <main className="flex-grow flex flex-col items-center justify-center w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;