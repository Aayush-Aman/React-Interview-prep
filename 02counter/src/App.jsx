import { useState } from "react";

function App() {
  let [counter,setCounter]= useState(15)


  const addValue=()=>{
    console.log("value added",counter);
    if(counter < 30)
    counter++;
    setCounter(counter)
  }
  const reduceValue=()=>{
    if(counter>0)
    counter--;
    setCounter(counter)
  }

  return (
    <>
      <h1>Hii</h1>
      <h2>Counter value :{counter}</h2>

      <button
      onClick={addValue}
      >Add value </button>
      <br />
      <button
      onClick={reduceValue}
      >Remove value </button>

    </>
  )
}

export default App
