// BotSpecs.js
import React from 'react';
import { Link } from 'react-router-dom';

function BotSpecs({ bot, enlistBot }) {
  return (
    <div>
      <h2>{bot.name} Details</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <Link to="/">Back to List</Link>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
  );
}

export default BotSpecs;
