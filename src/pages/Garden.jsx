import React from 'react';
import useUserStore from '../store/userStore';
import { PLANTS } from '../data/plants';
import PlantGrid from '../components/garden/PlantGrid';
import PlantStore from '../components/garden/PlantStore';

const Garden = () => {
  const { user, addToGarden } = useUserStore();

  const handlePlantPurchase = (plant) => {
    if (user.tokens >= plant.cost) {
      addToGarden(plant);
    }
  };

  return (
    <div className="p-4 pt-16 pb-20">
      <h2 className="text-xl font-bold mb-4">My Garden</h2>
      <PlantGrid plants={user.garden} />
      <PlantStore
        plants={PLANTS}
        onPlant={handlePlantPurchase}
        userTokens={user.tokens}
      />
    </div>
  );
};

export default Garden;