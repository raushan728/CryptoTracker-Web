import React from 'react';

function Header() {
  return (
    <header className="bg-gray-900 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg className="h-8 w-8 text-teal-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 10v-1m0 0c-1.11 0-2.08-.402-2.599-1M9.401 15c-.52 0-1-.198-1.401-.5M12 16c1.657 0 3-.895 3-2s-1.343-2-3-2-3-.895-3-2 1.343-2 3-2" />
            </svg>
            <h1 className="text-2xl font-bold text-white lg:text-3xl">Crypto Tracker</h1>
          </div>
          <p className="text-teal-400 font-semibold">Live Market & News</p>
        </div>
      </div>
    </header>
  );
}

export default Header;