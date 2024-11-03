// src/SlotMachine.js
import React, { useState } from 'react';

const items = [
  { type: 'Weapon', rarity: 'Common', count: 1 },
  { type: 'Consumable', rarity: 'Rare', count: 1 },
  { type: 'Material', rarity: 'Epic', count: 2 },
  // Add more items as needed
];

const getRandomItem = () => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

const SlotMachine = () => {
  const [reward, setReward] = useState(null);

  const spin = () => {
    const newReward = getRandomItem();
    setReward(newReward);
  };

  return (
    <div>
      <h1>Slot Machine</h1>
      <button onClick={spin}>Spin</button>
      {reward && (
        <div>
          <h2>You Won:</h2>
          <p>Type: {reward.type}</p>
          <p>Rarity: {reward.rarity}</p>
          <p>Count: {reward.count}</p>
        </div>
      )}
    </div>
  );
};

export default SlotMachine;
