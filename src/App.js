import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';

function App() {
  const [army, setArmy] = useState([]);
  const [bots, setBots] = useState([]);

  const enlistBot = (bot) => {
    setArmy([...army, bot]);
  };

  const releaseBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    // Implement logic to delete bot from backend
    setArmy(army.filter(b => b.id !== bot.id));
  };

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <BotCollection
                army={army}
                enlistBot={enlistBot}
                releaseBot={releaseBot}
                dischargeBot={dischargeBot}
              >
                <Route path="/" element={<YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />} />
                <Route path="/" element={<BotSpecs />} />
                <Route path="/" element={<SortBar />} />
              </BotCollection>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
