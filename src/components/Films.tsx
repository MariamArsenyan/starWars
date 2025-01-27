import React from 'react';

type Film = {
  title: string;
  episode_id: number;
};

type FilmsProps = {
  films: Film[];
};

export const Films: React.FC<FilmsProps> = ({ films }) => (
  <div className="flex gap-4 p-1 mt-5 rounded shadow-md border-2 border-gray-800 hover:border-[#fade4b] transition-all bg-transparent">
    {films.map((film, index) => (
      <div key={index} className="text-center flex flex-col items-center bg-[#1d1e1f] rounded-b-md">
        <img
          src={`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`}
          alt={film.title}
          className="w-[219.79px] h-[283.13px] object-cover border-b-2 border-red-500 rounded-t-md hover:animate-pulse"
        />
        <p>{film.title}</p>
        <p>Episode {film.episode_id}</p>
      </div>
    ))}
  </div>
);
