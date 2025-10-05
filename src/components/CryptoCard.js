import React from 'react';

function CryptoCard({ coin }) {
  const priceChangeColor = coin.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400';

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:bg-gray-700 transform hover:-translate-y-2 transition-all duration-300 ease-in-out shadow-lg">
      <div className="flex items-center mb-4">
        <img src={coin.image} alt={`${coin.name} logo`} className="h-10 w-10 mr-4" />
        <div>
          <h2 className="text-2xl font-bold text-white">{coin.name}</h2>
          <p className="text-gray-400 uppercase text-sm">{coin.symbol}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-3xl font-semibold text-white">${coin.current_price.toLocaleString()}</p>
        <p className={`text-lg font-medium mt-1 ${priceChangeColor}`}>
          {coin.price_change_percentage_24h > 0 ? '▲' : '▼'} {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
      <div className="mt-6 text-gray-400 text-sm">
        <div className="flex justify-between">
          <span>Market Cap:</span>
          <span className="font-semibold text-white">${coin.market_cap.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

export default CryptoCard;