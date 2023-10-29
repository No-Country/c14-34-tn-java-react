import { useState } from 'react'

const Contador = ({stock}) => {
    const [counter, setCounter] = useState(0); 
    const incrementarContador = () => {
        if(counter < stock){
            setCounter(counter + 1);
        }
    };
    const decrementarContador = () => {
        if(counter > 0){
            setCounter(counter - 1);
        }
    };

  return (
    <div>
        <button onClick={decrementarContador} >-</button>
        <p className='text-'>{counter}</p>
        <button onClick={incrementarContador} >+</button>
    </div>
  )
}

export default Contador