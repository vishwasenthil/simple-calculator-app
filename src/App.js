import React, {useState, useRef} from "react";
import './App.css';

function App() {
  let [answer, setAnswer] = useState(0);
  let [input, setInput] = useState(0);

  let operators = ["+", "-", "*", "/", "c", "ac"];
  let [currOperator, setCurrOperator] = useState(``);

  let memory = useRef([]);

  function handleClick(e) {
    //TODO: finish function
    e.preventDefault();
    switch(currOperator) {
      case `+`:
        setAnswer(answer+Number(input)); //Number(input) b/c input gets changed to string when value is entered
        break;
      case `-`:
        setAnswer(answer-Number(input)); //Number(input) b/c input gets changed to string when value is entered
        break;
      case `*`:
        setAnswer(answer*Number(input)); //Number(input) b/c input gets changed to string when value is entered
        break;
      case `/`:
        setAnswer(answer/Number(input)); //Number(input) b/c input gets changed to string when value is entered
        break;
      case `c`:
        setAnswer(0);
        break;
      case `ac`:
        memory.current.length = 0;
        setAnswer(0);
        break;
    }

    setInput(0);
    //updating memory
    if(currOperator != `ac`) {
      memory.current = [...memory.current, {
        equation:`${answer+currOperator+input}`,
        answer:answer
      }];
    }
    console.log(memory.current);
  }

  return (
    <>
      <header>
        <h1>calculator</h1>
      </header>
      <main>
        <form onSubmit={handleClick}>
          <input type="number" value={input} onChange={e=>setInput(e.target.value)}/>
          <p>{answer}</p>
          {
            operators.map(operator=>{
              return (
                <button key={operator} type="submit" onClick={()=>setCurrOperator(operator)}>{operator}</button>
              );
            })
          }
        </form>
      </main>
    </>
  );
}

export default App;
