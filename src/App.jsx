import "./App.css";
//react hooks
import { useState, useRef } from "react";

const number = Math.trunc(Math.random() * 20) + 1;
function App() {
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const inputRef = useRef(null);

  const handleCheck = () => {
    //comprobar si el valor introducido es igual al valor introducido

    console.log(inputRef.current.value);
    const inputName = inputRef.current.value;
    if (!inputName === number) {
      //hemos ganado
    } else if (inputName > number) {
      //el valor introducido es mayor que el numero aleatorio
      //poner mensaje 
      setmessage('Too high!')
    } else {
      //el valor introducido es menor que el numero aleatorio
      setmessage('Too low!')
    }
    }
      
    }
    setScore(score - 1);
  };

  return (
    <>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
        <div className="number">?</div>
      </header>
      <main>
        <section className="left">
          <input type="number" className="guess" ref={inputRef} />
          <button className="btn check" onClick={handleCheck}>
            Check!
          </button>
        </section>
        <section className="right">
          <p className="message">Start guessing...</p>
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
