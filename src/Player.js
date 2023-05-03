import { useState } from "react";
import List from "./List";
import PlayerForm from "./PlayerForm";
const Player = () => {
  const [state, setState] = useState([
    {
      id: 1,
      name: "William Saliba",
      nationality: "France",
      club: "Arsenal",
      age: 22,
      salary: "4 million",
    },
    {
      id: 2,
      name: "Federico  Valverde",
      nationality: "Uruguay",
      club: "Real Madrid",
      age: 24,
      salary: "8 million",
    },
    {
      id: 3,
      name: "Mike Maignan",
      nationality: "France",
      club: "AC Milan",
      age: 27,
      salary: "6 million",
    },
    {
      id: 4,
      name: "Mohamed Salah",
      nationality: "Egypt",
      club: "Liverpool",
      age: 30,
      salary: "20 million",
    },
  ]);
  const handleRemovePlayer = (id) => {
    let newState = state.filter((Player) => {
      return Player.id !== id;
    });

    setState(newState);
  };

  const handleAddPlayer = (Player) => {
    setState([...state, Player]);
  };
  return (
    <div>
      <List Players={state} handleRemovePlayer={handleRemovePlayer} />
      <PlayerForm handleAddPlayer={handleAddPlayer} />
    </div>
  );
};

export default Player;
