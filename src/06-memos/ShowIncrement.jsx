import React from 'react'

export const ShowIncrement = React.memo( ({ increment }) => {

    // los objetos siempre apuntan a posiciones en memoria diferentes
    // cada que el componente se vuelve a dibujar esta funcion esta en una
    // posicion de memoria por lo que no lo puede memorizar con memo, 
    // pasa lo mismo con useEffect
    console.log('Me volvi a generar')

  return (
    <button
        className='btn btn-primary'
        onClick={() => {
            increment(5);
        }}
    >
        Incrementar
    </button>
  )
})
