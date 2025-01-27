import React from 'react';

type StarshipInfoProps = {
  starship: {
    name: string;
    model: string;
    cost_in_credits: string;
    max_atmosphering_speed: string;
    manufacturer: string;
    length: string;
    crew: string;
    passengers: string;
    id: string;
  };
};

export const StarshipInfo: React.FC<StarshipInfoProps> = ({ starship }) => (
  <div className="p-1 mt-5 rounded shadow-md border-2 border-gray-800 hover:border-[#fade4b] transition-all bg-transparent">
    <div className="flex items-center gap-10">
      <img
        src={`https://starwars-visualguide.com/assets/img/starships/${starship.id}.jpg`}
        alt={starship.name}
        className="w-2/5 h-auto object-contain mx-auto mb-4"
      />
      <div className="w-3/5 min-h-[400px] bg-[#1D1E1F] p-6 rounded-md border-l-4 border-red-500 shadow-md m-10">
        <h3 className="text-2xl font-bold mb-2">{starship.name}</h3>
        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
        </p>
        <div className="flex justify-between mt-5">
          <div>
            <p><strong>Model:</strong> {starship.model}</p>
            <p><strong>Cost in Credits:</strong> {starship.cost_in_credits}</p>
            <p><strong>Atmospheric Speed:</strong> {starship.max_atmosphering_speed}</p>
          </div>
          <div>
            <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
            <p><strong>Length:</strong> {starship.length}</p>
            <p><strong>Crew:</strong> {starship.crew}</p>
            <p><strong>Passengers:</strong> {starship.passengers}</p>
          </div>
        </div>
        <button
          className="relative left-[79%] top-12 w-36 h-11 rounded-full border-2 border-[#fade4b] bg-black hover:bg-[#fade4b] hover:text-black transition-all duration-300 mt-4"
          onClick={() => (window.location.href = '/')}
        >
          Back
        </button>
      </div>
    </div>
  </div>
)
