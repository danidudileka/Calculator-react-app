import { useState } from "react";
import "./App.css";

function App() {
  const [calculation, setCalculation] = useState("");

  const [answer, setAnswer] = useState(0)

  const handleClick = (e) => {
    setCalculation(calculation + e.target.value);
  };

  const handleEqual = (e) => {
    setAnswer(eval(calculation))
  }

  return (
    <div class="container">
      <form>
        <div class="screen">
          <input type="text" value={calculation} className="calculation"/>
          <input type="text" value={answer} className="answer"/>
        </div>
        <input type="button" value="(" onClick={handleClick} />
        <input type="button" value=")" onClick={handleClick} />
        <input type="button" value="AC" onClick={(e) => {setCalculation(""), setAnswer(0)}} />
        <input
          type="button"
          value="DE"
          onClick={(e) => setCalculation(calculation.slice(0, -1))}
        />

        <input type="button" value="+" onClick={handleClick} className="operators"/>
        <input type="button" value="-" onClick={handleClick} className="operators"/>
        <input type="button" value="*" onClick={handleClick} className="operators"/>
        <input type="button" value="/" onClick={handleClick} className="operators"/>

        <input type="button" value="7" onClick={handleClick} />
        <input type="button" value="8" onClick={handleClick} />
        <input type="button" value="9" onClick={handleClick} />
        <input type="button" value="^" onClick={e => setCalculation(calculation + '**')} className="operators" />

        <input type="button" value="4" onClick={handleClick} />
        <input type="button" value="5" onClick={handleClick} />
        <input type="button" value="6" onClick={handleClick} />
        <input
          type="button"
          value="="
          class="span-row-3"
          onClick={handleEqual}
        />

        <input type="button" value="1" onClick={handleClick} />
        <input type="button" value="2" onClick={handleClick} />
        <input type="button" value="3" onClick={handleClick} />

        <input type="button" value="0" onClick={handleClick} />
        <input type="button" value="00" onClick={handleClick} />
        <input type="button" value="." onClick={handleClick} />
      </form>
    </div>
  );
}

export default App;
