import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN');
        if (!response.ok) throw new Error('Could not fetch news data!');
        const data = await response.json();
        setNews(data.Data.slice(0, 12));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNewsData();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Latest Crypto News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map(article => (
          <a href={article.url} key={article.id} target="_blank" rel="noopener noreferrer" className="block p-6 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 transition duration-300 ease-in-out shadow-lg">
            <img src={article.imageurl} alt={article.title} className="rounded-md w-full h-40 object-cover mb-4" />
            <h3 className="text-white font-bold text-lg mb-2 leading-snug">{article.title}</h3>
            <p className="text-gray-400 text-sm">Source: {article.source}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default News;