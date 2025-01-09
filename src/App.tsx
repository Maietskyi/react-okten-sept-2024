import './App.css'
import {useState} from "react";

const App = () => {
  // eslint-disable-next-line prefer-const
  let [counter, setCounter]= useState<number>(0);
  return (
      <div>
        <h2>{counter}</h2>
        <button onClick={() => {
          setCounter(++counter);
          console.log(counter)
        }}>increment
        </button>

        {/*<button onClick={() => {*/}
        {/*  setCounter(--counter);*/}
        {/*  console.log(counter)*/}
        {/*}}>decrement*/}
        {/*</button>*/}

        {/*Можна ще через колбек функцію*/}
        <button onClick={() => {
          setCounter(prevState => {
            return --prevState;
          });
          console.log(counter)
        }}>decrement
        </button>
      </div>
  )
}

export default App
