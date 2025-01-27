import React from 'react';

type Pilot = {
  name: string;
  url: string;
};

type PilotsListProps = {
  pilots: Pilot[];
};

export const Pilots: React.FC<PilotsListProps> = ({ pilots }) => {
  if (pilots.length === 0) {
    return <p className="text-white">This starship has no pilots.</p>;
  }

  return (
    <div className="flex gap-4 p-1 mt-5 rounded shadow-md border-2 border-gray-800 hover:border-[#fade4b] transition-all bg-transparent">
      {pilots.map((pilot, index) => (
        <div key={index} className="text-center">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${pilot.url.split('/').slice(-2, -1)}.jpg`}
            alt={pilot.name}
            className="w-[219.79px] h-[283.13px] object-cover border-gray-500 rounded-t-md hover:animate-pulse"
          />
          <p className="flex items-center justify-center relative z-10 w-[219.79px] h-[68.72px] border-t-2 border-red-500 bg-[#1d1e1f]">
            {pilot.name}
          </p>
        </div>
      ))}
    </div>
  );
}
