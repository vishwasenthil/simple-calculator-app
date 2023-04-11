import React, {useState} from "react";
import './App.css';

function App() {
  let [answer, setAnswer] = useState(0);
  let [input, setInput] = useState(0);

  let operators = ["+", "-", "*", "/", "c", "ac"];
  let [currOperator, setCurrOperator] = useState(``);

  function handleClick(e) {
    //TODO: finish function
    e.preventDefault();
    console.log(currOperator);
  }

  return (
    <>
      <header>
        <h1>calculator</h1>
      </header>
      <main>
        <form onSubmit={handleClick}>
          <input type="number" onChange={e=>setInput(e.target.value)}/>
          <p>{answer}</p>
          {
            operators.map(operator=>{
              return (
                <button key={operator} type="submit" onClick={()=>setCurrOperator({operator})}>{operator}</button>
              );
            })
          }
        </form>
      </main>
    </>
  );
}

export default App;
