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
        <h1>Hello world!</h1>
        <Button count={count} incrementCount={incrementCount}/>
        <Button count={count} incrementCount={incrementCount}/>
      </countContext.Provider>
        <Card padding="large">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse delectus molestiae hic qui? Velit quisquam eaque dolore nobis at impedit, accusantium sint, nemo dolorum nostrum necessitatibus minus! Quidem, reprehenderit possimus?</p>
        </Card>
      <countContext.Provider value={countTwo}>
        <Card padding="small">
          <Button count={count} incrementCount={incrementCountTwo}/>
        </Card>
      </countContext.Provider>
      
    </>
  );
}

