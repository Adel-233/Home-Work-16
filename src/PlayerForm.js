import { useState } from "react";
export default function PlayerForm(props) {
  const { handleAddPlayer } = props;
  const [state, setState] = useState({
    id: null,
    name: null,
    nationality: null,
    club: null,
    age: null,
    salary: null,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddPlayer(state);
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={handleChange}
          name="id"
          placeholder="Enter Your id"
          required
        />
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Enter Your Name"
          required
        />
        <input
          type="text"
          onChange={handleChange}
          name="nationality"
          placeholder="Enter Your nationality"
          required
        />
        <input
          type="text"
          onChange={handleChange}
          name="club"
          placeholder="Enter Your club"
          required
        />
        <input
          type="number"
          onChange={handleChange}
          name="age"
          placeholder="Enter Your age"
          required
        />
        <input
          type="text"
          onChange={handleChange}
          name="salary"
          placeholder="Enter Your salary"
          required
        />
        <input type="submit" value="add" />
      </form>
    </div>
  );
}
