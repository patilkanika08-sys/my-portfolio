import { useState } from "react";

function App1() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  function addName() {
    if (name.trim() === "") return;

    setNames([...names, name]);
    setName("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Names</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addName}> Add Name</button>
      <hr />
      {names.map((n, index) => (
        <h3 key={index}>{n}</h3>
      ))}
    </div>
  );
}

export default App1;