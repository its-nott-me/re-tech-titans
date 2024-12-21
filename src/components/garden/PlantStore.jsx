import React from 'react';
import PlantCard from './PlantCard';

const PlantStore = ({ plants, onPlant, userTokens }) => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-3">Plant Store</h3>
      <div className="grid grid-cols-2 gap-4">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onPlant={onPlant}
            userTokens={userTokens}
          />
        ))}
      </div>
    </div>
  );
};

export default PlantStore;