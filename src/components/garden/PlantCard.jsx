import React from 'react';

const PlantCard = ({ plant, onPlant, userTokens }) => {
  const canAfford = userTokens >= plant.cost;

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <div className="text-center text-4xl mb-2">{plant.image}</div>
      <h4 className="font-medium text-center">{plant.name}</h4>
      <p className="text-sm text-green-600 text-center mt-1">
        🌱 {plant.cost} tokens
      </p>
      <button
        onClick={() => onPlant(plant)}
        disabled={!canAfford}
        className={`w-full mt-2 px-4 py-2 rounded-lg text-sm ${
          canAfford
            ? 'bg-green-500 text-white hover:bg-green-600'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        Plant
      </button>
    </div>
  );
};

export default PlantCard;