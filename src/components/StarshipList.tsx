import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StarshipCard } from './StarshipCard';

import video from '../assets/208861_small.mp4';
import { Navbar } from './common/Navbar';

type Starship = {
  name: string;
  model: string;
  url: string;
};

export const StarshipList: React.FC = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await fetch('https://swapi.py4e.com/api/starships/');
        if (!response.ok) {
          throw new Error('Failed to fetch starships');
        }
        const data = await response.json();
        setStarships(data.results);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, []);

  if (loading) {
    return <p className="text-white text-center mt-10">Loading starships...</p>;
  }

  if (error) {
    return (
      <p className="text-red-500 text-center mt-10">
        Error: {error}
      </p>
    );
  }

  return (
    <div className="body min-h-screen bg-black text-white ">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[80vh] relative">
        <video className="w-full h-auto absolute top-0 left-0 object-cover z-0" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="w-[70%] p-5 flex flex-col gap-4 z-10 relative font-exo-2">
          {starships.map(ship =>
            <Link
              key={ship.name}
              to={`/starship/${encodeURIComponent(ship.url.split('/').slice(-2, -1)[0])}`}
              className="p-1 rounded shadow-md hover:bg-[#fade4b] transition-all bg-gray-700"
            >
              <StarshipCard name={ship.name} model={ship.model} />
            </Link>,
          )}
        </div>
      </div>
    </div>
  );
};
