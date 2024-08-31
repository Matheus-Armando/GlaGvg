import React from 'react';

const Banner: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-black-500 p-4">
      <img src="/img/gvgBanner.png" alt="Banner principal" className="mx-auto" />
    </header>
  );
}

export default Banner;