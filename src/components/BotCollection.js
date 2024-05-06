// BotCollection.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BotCollection({ enlistBot,}) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/bots")
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      <div>
        {bots.map(bot => (
          <div key={bot.id}>
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => enlistBot(bot)}>Enlist</button>
            <Link to={`/bots/${bot.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
