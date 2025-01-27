import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from './common/Navbar';
import { StarshipInfo } from './StarshipInfo';
import { Pilots } from './Pilots';
import { Films} from './Films';


type Pilot = {
  name: string;
  url: string;
};

type Film = {
  title: string;
  episode_id: number;
};

type IStarship = {
  id: string;
  name: string;
  model: string;
  cost_in_credits: string;
  max_atmosphering_speed: string;
  manufacturer: string;
  length: string;
  crew: string;
  passengers: string;
};

export const StarshipDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [starship, setStarship] = useState<IStarship | null>(null);
  const [pilots, setPilots] = useState<Pilot[]>([]);
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://swapi.py4e.com/api/starships/${id}/`);
        if (!response.ok) throw new Error('Failed to fetch starship details');

        const data = await response.json();
        setStarship({
          id: id || '',
          name: data.name,
          model: data.model,
          cost_in_credits: data.cost_in_credits,
          max_atmosphering_speed: data.max_atmosphering_speed,
          manufacturer: data.manufacturer,
          length: data.length,
          crew: data.crew,
          passengers: data.passengers,
        });

        const pilotPromises = data.pilots.map((url: string) => fetch(url).then((res) => res.json()));
        const pilotsData = await Promise.all(pilotPromises);
        setPilots(
          pilotsData.map((pilot: any, index: number) => ({
            name: pilot.name,
            url: data.pilots[index],
          }))
        );

        const filmPromises = data.films.map((url: string) => fetch(url).then((res) => res.json()));
        const filmsData = await Promise.all(filmPromises);
        setFilms(
          filmsData.map((film: any) => ({
            title: film.title,
            episode_id: film.episode_id,
          }))
        );
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) return <div className="text-white">Loading starship details...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!starship) return <div className="text-white">Starship not found</div>;

  return (
    <div className="min-h-screen bg-black text-white font-exo-2">
      <Navbar />
      <div className="p-5">
        <h2 className="text-start text-2xl font-bold p-2 border-t border-b border-gray-700 gap-10 mt-4">
          Starship
        </h2>
        <StarshipInfo starship={starship} />

        <h2 className="text-start text-2xl font-bold p-2 border-t border-b border-gray-700 gap-10 mt-4">
          Pilots
        </h2>
        <Pilots pilots={pilots} />

        <h2 className="text-start text-2xl font-bold p-2 border-t border-b border-gray-700 gap-10 mt-4">
          Films
        </h2>
        <Films films={films} />
      </div>
    </div>
  );
}
