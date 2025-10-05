import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-bold text-center mb-6 text-teal-400">About This Project</h1>
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <p className="text-lg leading-relaxed mb-4">
          This Crypto Tracker is a web application built for a college project. The goal is to provide a clean, modern, and user-friendly interface to track cryptocurrency prices and stay updated with the latest news in the crypto world.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The project is built using modern web technologies:
        </p>
        <ul className="list-disc list-inside mb-8 space-y-2 text-lg">
          <li><span className="font-bold">React:</span> For building a dynamic and component-based user interface.</li>
          <li><span className="font-bold">Tailwind CSS:</span> For rapid, utility-first styling and a responsive design.</li>
          <li><span className="font-bold">React Router:</span> To enable navigation between different pages in this single-page application.</li>
          <li><span className="font-bold">Public APIs:</span> CoinGecko for price data and CryptoCompare for news feeds.</li>
        </ul>

        <h2 className="text-3xl font-bold text-center mt-10 mb-4 text-teal-400">Authors</h2>
        <div className="flex justify-center items-center space-x-10">
            <div className="text-center">
                <p className="text-xl font-semibold">Raushan Kumar</p>
            </div>
            <div className="text-center">
                <p className="text-xl font-semibold">Rahul Kumar</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;