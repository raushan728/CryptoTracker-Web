import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';

function Exchanges() {
    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/exchanges?per_page=15');
                if (!response.ok) throw new Error('Could not fetch exchanges!');
                const data = await response.json();
                setExchanges(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchExchanges();
    }, []);

    if (loading) return <Spinner />;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Top Crypto Exchanges</h2>
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <table className="min-w-full text-white">
                    <thead className="bg-gray-700">
                        <tr>
                            <th className="py-3 px-4 text-left">Rank</th>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Country</th>
                            <th className="py-3 px-4 text-left">Year Est.</th>
                            <th className="py-3 px-4 text-left">Trust Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exchanges.map(ex => (
                            <tr key={ex.id} className="border-b border-gray-700 hover:bg-gray-600">
                                <td className="py-3 px-4">{ex.trust_score_rank}</td>
                                <td className="py-3 px-4 flex items-center">
                                    <img src={ex.image} alt={ex.name} className="h-6 w-6 mr-3 rounded-full"/>
                                    {ex.name}
                                </td>
                                <td className="py-3 px-4">{ex.country || 'N/A'}</td>
                                <td className="py-3 px-4">{ex.year_established || 'N/A'}</td>
                                <td className="py-3 px-4 text-teal-400 font-bold">{ex.trust_score} / 10</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Exchanges;