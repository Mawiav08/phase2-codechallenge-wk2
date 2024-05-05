// SortBar.js
import React from 'react';

function SortBar({ sortBy }) {
  return (
    <div>
      <button onClick={() => sortBy('health')}>Sort by Health</button>
      <button onClick={() => sortBy('damage')}>Sort by Damage</button>
      <button onClick={() => sortBy('armor')}>Sort by Armor</button>
    </div>
  );
}

export default SortBar;
