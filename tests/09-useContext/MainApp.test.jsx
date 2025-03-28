import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe('Pruebas en <MainApp />', () => {

    test('debe de mostrar el HomePage', () => {

        render(
            <MemoryRouter >
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('HomePage' )).toBeTruthy();
    })

    test('debe de mostrar el LoginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText( 'LoginPage' )).toBeTruthy();
        screen.debug();
    })

    test('debe de mostrar la ruta de default', () => {

        render(
            <MemoryRouter initialEntries={['/*']}>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText( 'AboutPage' )).toBeTruthy();
        screen.debug();
    })
})