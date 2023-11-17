import {useState} from 'react';
import Button from './Button.jsx';
import Card from './Card.jsx';
import './App.css'
import { countContext } from './CountContext.jsx';

export default function App(){
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  function incrementCount(){
    setCount(count +1);
  }

  function incrementCountTwo(){
    setCountTwo(countTwo +1);
  }

  return (
    <>
      <countContext.Provider value={count}>
        <h1>Feasibility Test for React</h1>
        <Button count={count} incrementCount={incrementCount}/>
        <Button count={count} incrementCount={incrementCount}/>
      </countContext.Provider>
        <Card padding="large">
          <p>This site is made using React to create components. This is the same type of process and skill set that will be required in our website.</p>
          <p>The buttons use different types of state properties to talk to each other.</p>
        </Card>
      <countContext.Provider value={countTwo}>
        <Card padding="small">
          <Button count={count} incrementCount={incrementCountTwo}/>
        </Card>
      </countContext.Provider>
      
    </>
  );
}

