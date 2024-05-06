import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = props => {
  //your code here
    console.log(props)
  return (
    <div className="ui four column grid">
      <div className="row">
        {props.bots.map(bot => {
          return <BotCard key={bot.id} bot={bot} renderSpecs={props.renderSpecs} handleClick={props.handleClick} />
        })}
        Collection of all bots
      </div>
    </div>
  );
};

export default BotCollection;
