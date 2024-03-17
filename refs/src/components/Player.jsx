import React, {useState} from "react";

export default function Player() {
    const [name, setName] = useState("unknown entity");
    const [didSubmit, setDidSubmit] = useState(false);

    const handleSetName = (event) => {
        setDidSubmit(false);
        setName(event.target.value);
    }

    const handleSubmit = () => {
        setDidSubmit(true);
    }

  return (
    <section id="player">
      <h2>Welcome {didSubmit? name:'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleSetName} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
