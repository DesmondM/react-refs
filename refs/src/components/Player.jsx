import React, {useState, useRef} from "react";

export default function Player() {
    const enteredName= useRef();
    const [name, setName] = useState("unknown entity");

    const handleSubmit = () => {
        setName(enteredName.current.value);
    }

  return (
    <section id="player">
      <h2>Welcome {name??'unknown entity'}</h2>
      <p>
        <input ref={enteredName} type="text"   />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
