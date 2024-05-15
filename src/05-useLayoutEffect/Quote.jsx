import { useState, useRef, useLayoutEffect } from "react";

export const PokemonCard = ({ id, name, sprites=[] }) => {
 
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
 
 
    useLayoutEffect( () => {
        const { height, width } = ( pRef.current.getBoundingClientRect() );
        setBoxSize({height, width });
 
    }, [sprites])
 
 
 
    return (
        <>
            <section style={{ height: 200, display: 'flex' }} ref={pRef}>
 
 
                <h1 className='text-capitalize'>#{id} - {name}</h1>
 
 
                {/* IMAGENES */}
                <div>
                    {
                        sprites.map( sprite => (
                            <img key={ sprite } src={ sprite } alt={ name }/>
                        ))
                    }
                </div>
 
                
            </section>
            
            <code>
                {JSON.stringify(boxSize)}
            </code>
 
        </>
    )
 
}