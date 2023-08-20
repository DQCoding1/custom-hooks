import useCounter from "./hooks/useCounter";
import "./App.css";

function App() {
  const {counter, increment, decrement, reset} = useCounter(5)

  return (
   <div className="counter">
      <div className="counter__count">{counter}</div>
      <button onClick={increment} className="counter__increment">+</button>
      <button onClick={decrement} className="counter__decrement">-</button>
      <button onClick={reset} className="counter__reset">Reset</button>
   </div>
  )
}

export default App
