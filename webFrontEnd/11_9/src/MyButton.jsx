import {useState} from 'react';
import './MyButton.css';

export default function MyButton({ isSpecial, text }){//says there is an object and there is a property in that object
    let myClassName = '';
    
    if(isSpecial){
        myClassName = 'special-button';
    }else{
        myClassName = 'button-regular';
    }

    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }
    
    return(
        <button className={myClassName} onClick={handleClick}>{text} Clicked:{count}</button>
    );

}