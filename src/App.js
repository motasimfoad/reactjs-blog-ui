import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'

function App() {
  const counter = useSelector(state => state.counter);
  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
       {counter}
        {darkMode}
       <button onClick={(() =>dispatch({type: "INCREMENT"}))}>+</button>
       <button onClick={(() =>dispatch({type: "DECREMENT"}))}>+</button>
       <button onClick={(() =>dispatch({type: "TOGGLE"}))}>TOGGLE</button>
      </header>
    </div>
  );
}

export default App;
