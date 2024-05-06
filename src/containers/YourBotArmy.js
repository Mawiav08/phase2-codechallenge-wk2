import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = props => {
  //your bot army code here...
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {props.myBots.map(bot => {
            return <BotCard key={bot.id} bot={bot} />
          })}
          Your Bot Army
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;