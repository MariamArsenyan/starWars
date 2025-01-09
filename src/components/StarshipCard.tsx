import React from 'react';

type StarshipCardProps = {
  name: string;
  model: string;
};

export const StarshipCard: React.FC<StarshipCardProps> = ({ name, model }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-md shadow-md border border-gray-700">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-400">{model}</p>
    </div>
  );
};
