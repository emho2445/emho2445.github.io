import {useContext} from 'react';
import { countContext } from './CountContext.jsx';

export default function Button({ count, incrementCount }){

    const countThroughContext = useContext(countContext);
    
    return(
        <button onClick={incrementCount}>Button has been clicked {count} times! and {countThroughContext} Times!</button>
    );
}