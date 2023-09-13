import { useState } from 'react'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';


function App() {
  // normal function
  function handleclick(){
    alert('button clicked')
  }
  // arrow function
  const handleClick2 = () => {
    alert('Button 2 Clicked');
  }

  const addFIve = (num) => {
    alert(num + 5);
  } 

  return (
    <>
      
  
      <h3>Vite Core Concept 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Counter></Counter>
      
      <Team></Team>

      <button onClick={handleclick}>Click Me</button>
      <button onClick={handleClick2}>Click Me Again</button>
      {/* Third type */}
      <button onClick={() => {alert('Third Button Clicked')}}>Third Button</button>
      <button onClick={() => addFIve(3)}>Fourth Button</button>
    </>
  )
}

export default App
