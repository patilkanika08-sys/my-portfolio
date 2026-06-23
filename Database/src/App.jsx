import { useState,useEffect} from "react";
import { supabase } from "./supabase";
function App() {
  const [name, setName] = useState("");
  const [names,setNames] = useState([]);
  async function addName() {
    await supabase.from('people').insert({name:name})
    setName("");
    fetchname();
  }
async function fetchname() {
  const {data} = await supabase.from("people").select("*")
  setNames(data)
  console.log(data)

}
 async function deleteName(id){
  await supabase.from("people").delete().eq("id",id);
  fetchname();
 }
useEffect(()=> {
  fetchname();
},[])
  return (
    <div style={{ padding: "20px" }}>
      <h1>CURDS</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addName}>
        addName
        </button>
      
      <hr />
      {names.map((n) => (
        <h2 key={n.id}>{n.name}<button onClick ={()=>deleteName(n.id)}>d</button></h2>
      ))}
    </div>
  );
}

export default App;