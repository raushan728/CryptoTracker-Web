import React, { useState, useEffect } from 'react';
import CryptoCard from '../components/CryptoCard';
import Spinner from '../components/Spinner';

function Market() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false');
        if (!response.ok) throw new Error('Could not fetch price data!');
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCryptoData();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-red-500 text-2xl mt-10">Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Top Cryptocurrencies by Market Cap</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coins.map(coin => (
          <CryptoCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
}

export default Market;