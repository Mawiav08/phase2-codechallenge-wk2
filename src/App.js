import './App.css';
// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';

function App() {
  const [army, setArmy] = useState([]);
  const [bots, setBots] = useState([]);
  const [sortedBy, setSortedBy] = useState(null);

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

  const sortBy = (criteria) => {
    const sortedBots = [...bots].sort((a, b) => a[criteria] - b[criteria]);
    setBots(sortedBots);
    setSortedBy(criteria);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <SortBar sortBy={sortBy} />
            <BotCollection bots={sortedBy ? bots : army} enlistBot={enlistBot} />
          </Route>
          <Route path="/your-bot-army">
            <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
          </Route>
          <Route path="/bots/:botId" component={BotSpecs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

