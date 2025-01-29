import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../common/Navbar";
import { StarshipInfo } from "./StarshipInfo";
import { PilotsCard } from "../cards/PilotsCard";
import { FilmsCard } from "../cards/FilmsCard";

type Starship = {
  id: string;
  name: string;
  model: string;
  cost_in_credits: string;
  max_atmosphering_speed: string;
  manufacturer: string;
  length: string;
  crew: string;
  passengers: string;
  pilots: string[];
  films: string[];
};

export const StarshipDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<{ starship: Starship | null; pilots: any[]; films: any[] }>({
    starship: null,
    pilots: [],
    films: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(`https://swapi.py4e.com/api/starships/${id}/`);
        if (!res.ok) throw new Error("Failed to fetch starship details");

        const starship = await res.json();
        const [pilots, films] = await Promise.all([
          Promise.all(starship.pilots.map((url: string) => fetch(url).then((r) => r.json()))),
          Promise.all(starship.films.map((url: string) => fetch(url).then((r) => r.json()))),
        ]);

        setData({
          starship: { id: id || "", ...starship },
          pilots,
          films,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) return <div className="text-white">Loading starship details...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!data.starship) return <div className="text-white">Starship not found</div>;

  return (
    <div className="min-h-screen bg-black text-white font-exo-2">
      <Navbar />
      <div className="p-5">
        <Section title="Starship">
          <StarshipInfo starship={data.starship} />
        </Section>

        <Section title="Pilots">
          <PilotsCard pilots={data.pilots} />
        </Section>

        <Section title="Films">
          <FilmsCard films={data.films} />
        </Section>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h2 className="text-start text-2xl font-bold p-2 border-t border-b border-gray-700 mt-4">{title}</h2>
    {children}
  </div>
);
