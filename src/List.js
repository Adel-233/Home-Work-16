import React from "react";

export default function List(props) {
  const { Players, handleRemovePlayer } = props;
  const handleClick = (id) => {
    handleRemovePlayer(id);
  };
  return (
    <div>
      {Players.map((Player) => {
        return (
          <div key={Player.id}>
            <h1>name : {Player.name}</h1>
            <h1>nationality : {Player.nationality}</h1>
            <h1>club : {Player.club}</h1>
            <h1>age : {Player.age}</h1>
            <h1>salary : {Player.salary}</h1>
            <button
              onClick={() => {
                handleClick(Player.id);
              }}
            >
              detete
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
