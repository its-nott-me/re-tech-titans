import React from 'react';

const PlantGrid = ({ plants }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {plants.map((plant, index) => (
        <div
          key={index}
          className="aspect-square bg-green-50 rounded-lg flex items-center justify-center text-4xl"
        >
          {plant.image}
        </div>
      ))}
    </div>
  );
};

export default PlantGrid;