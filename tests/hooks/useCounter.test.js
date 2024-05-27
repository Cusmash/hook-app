import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"
import { act } from "react";

describe('Pruebas en el useCounter', () => { 
    
    test('debe de retornar los valores por defecto', () => { 
        
        const { result } = renderHook(() => useCounter());
        //console.log(result)
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ));
        expect( increment ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ) );
     })

     test('debe de generar el counter con el valor de 100', () => { 
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        //Son lo mismo, puedo accesar a las propiedades de result o descruturar y usar directo
        expect( result.current.counter ).toBe(100);
        expect( counter ).toBe(100);
      })

      test('debe de incrementar el contador', () => { 
        
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act( () => {
          increment();
          increment(2);
        });

        expect( result.current.counter ).toBe(103);
       })

       test('debe de decrementar el contador', () => { 
        
        const { result } = renderHook(() => useCounter(0));
        const { decrement } = result.current;

        act( () => {
          decrement();
        });

        expect( result.current.counter ).toBe(0);
       })

       test('debe de decrementar el contador', () => { 
        
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act( () => {
          decrement();
          decrement(2);
        });

        expect( result.current.counter ).toBe(97);
       })

       test('debe de realizar el reset', () => { 
        
        const { result } = renderHook(() => useCounter(100));
        const { decrement, reset } = result.current;

        act( () => {
          decrement();
          reset();
        });

        expect( result.current.counter ).toBe(100);
       })
 })