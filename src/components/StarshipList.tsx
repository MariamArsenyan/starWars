import React, { useEffect, useState } from 'react';
import { StarshipCard } from './StarshipCard';
import logo from '../assets/logo.png';

type Starship = {
  name: string;
  model: string;
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
    return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-5 border-b border-gray-700">
        <div className="flex items-center justify-between">
        <img
          src={logo}
          alt="Star Wars Logo Center"
          className="w-[15%] h-auto mb-3 ml-43p"
        />
          <div className="flex items-center space-x-6 text-sm uppercase text-gray-400">
            <a
              href="#"
              className="hover:text-white transition-all hover:border-b hover:border-white"
            >
              Log In
            </a>
            <a
              href="#"
              className="hover:text-white transition-all hover:border-b hover:border-white"
            >
              Sign Up
            </a>
          </div>
        </div>
        <nav className="flex justify-center border-t border-b border-gray-700 gap-10 mt-4">
          <a
            href="#"
            className="flex justify-end text-gray-400 uppercase text-base pt-2 pb-2 w-full text-center"
          >
            <span className="inline-block hover:border-b-2 hover:border-blue-500 transition-all">
              Home
            </span>
          </a>
          <a
            href="#"
            className="flex justify-start text-white uppercase text-base pt-2 pb-2 w-full text-center"
          >
            <span className="inline-block border-b-2 border-blue-500">
              Starships
            </span>
          </a>
        </nav>
      </header>

      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-[70%] p-5 flex flex-col gap-4">
          {starships.map((ship) => (
            <StarshipCard key={ship.name} name={ship.name} model={ship.model} />
          ))}
        </div>
      </div>
    </div>
  );
};
