import { render, fireEvent, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('Pruebas de <Login />', () => { 
    
    test('debde de mostrar el componente sin el usuario', () => { 
        
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
     })

     test('debde de llamar el setUser cuando hace click en el boton', () => { 
        const setUserMock = jest.fn();
        
        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        )

        const button = screen.getByRole('button');
        fireEvent.click( button );

        expect( setUserMock ).toHaveBeenCalledWith({id: 123, name:'Alex', email:'aion@gmail.com'})
     })
 })