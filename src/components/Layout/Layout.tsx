import React from 'react';
import Banner from '../banner';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb';

interface LayoutProps {
  children: React.ReactNode;
  breadcrumbItems?: { label: string; href?: string }[];
}

const Layout: React.FC<LayoutProps> = ({ children, breadcrumbItems }) => {
  const defaultBreadcrumbItems = [{ label: 'Home', href: '/' }, ...(breadcrumbItems || [])];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Banner />
      {defaultBreadcrumbItems && (
        <div className="flex justify-center items-center mb-12">
          <Breadcrumb>
            <BreadcrumbList>
              {defaultBreadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    {item.href ? (
                      <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {index < defaultBreadcrumbItems.length - 1 && <BreadcrumbSeparator />}
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