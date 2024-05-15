import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
        <div>CounterWithCustomHook: { counter }</div>

        <hr />

        {/* el evento siempre se manda en una funcion, se declaro o no */}
        {/* onClick={ (event) => increment(event ) } */}
        {/* pero al definir de manera el explicita el valor que se envia */}
        {/* no se manda un objeto sino un entero */}
        <button onClick={() => increment(2)} className='btn btn-primary'>+1</button>
        <button onClick={reset} className='btn btn-primary' >Reset</button>
        <button onClick={() => decrement(2)} className='btn btn-primary' >-1</button>
    </>
  )
}
