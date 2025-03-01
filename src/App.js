import React, { useState, useEffect } from "react";

function App() {
  const [count,setCount]=useState(0);
  const [text,setText]=useState("");
   useEffect(()=>{
    document.title=text;
   },[text]);
   useEffect(()=>{
    setTimeout(()=>setCount(0),2000)},[]);
   useEffect(()=>{
    console.log("useeffect rendering")
   });

  console.log("Component rendering");
 function handleChange(event){
  setText(event.target.value)
 }
  return (
    <div>
  <button onClick={()=>setCount((count)=>count+1)}>i've been clicked {count} times</button>
  <input type="text" placeholder="Type away..." value={text} onChange={handleChange}/>
  </div>
  )
}

export default App;
