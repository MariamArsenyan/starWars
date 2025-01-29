import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StarshipCard } from "./StarshipCard";
import video from '../../assets/208861_small.mp4';
import { Navbar } from "../common/Navbar";

type Starship = { name: string; model: string; url: string };

export const StarshipList: React.FC = () => {
  const [data, setData] = useState<{ starships: Starship[]; error: string | null }>({
    starships: [],
    error: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.py4e.com/api/starships/")
      .then((res) => res.ok ? res.json() : Promise.reject("Failed to fetch starships"))
      .then((data) => setData({ starships: data.results, error: null }))
      .catch((err) => setData({ starships: [], error: String(err) }))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[80vh] relative">
        <video className="w-full h-auto absolute top-0 left-0 object-cover z-0" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="w-[70%] p-5 flex flex-col gap-4 z-10 relative font-exo-2">
          {loading && <Message text="Loading starships..." />}
          {data.error && <Message text={`Error: ${data.error}`} isError />}
          {!loading && !data.error &&
            data.starships.map((ship) => (
              <Link
                key={ship.name}
                to={`/starship/${ship.url.split("/").slice(-2, -1)[0]}`}
                className="p-1 rounded shadow-md hover:bg-[#fade4b] transition-all bg-gray-700"
              >
                <StarshipCard name={ship.name} model={ship.model} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

const Message: React.FC<{ text: string; isError?: boolean }> = ({ text, isError }) => (
  <p className={`text-center mt-10 ${isError ? "text-red-500" : "text-white"}`}>{text}</p>
);
