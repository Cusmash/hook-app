import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter"

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas MultipleCustomHooks', () => { 

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    const mockDecrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 3,
        decrement: mockDecrement,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    test('debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
        
        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole("button", { name: "Siguiente" });
        const prevButton = screen.getByRole("button", { name: "Anterior" });
     
        expect(screen.getByText("Cargando"));
        expect(screen.getByText("Informacion de Pokemon"));
        expect(prevButton.disable).toBeFalsy();
        expect(nextButton.disable).toBeFalsy();
     })

    //  test('debe de mostrar un pokemon', async () => { 

    //     useFetch.mockReturnValue({
    //         data: {
    //             id: 3,
    //             name: 'Charizard',
    //             sprites: {
    //                 back_default: "back_default",
    //                 back_shiny: "back_shiny",
    //                 front_default: "front_default",
    //                 front_shiny: "front_shiny",
    //             }
    //         },
    //         isLoading: true,
    //         hasError: null
    //     })

    //     render(<MultipleCustomHooks />);

    //     const nextButton = screen.getByRole("button", { name: "Siguiente" });
    //     await fireEvent.click(nextButton);

    //     expect(mockIncrement).toHaveBeenCalled();
    //   })

      test('debe de mostrar el pokemon anterior', () => { 

        useFetch.mockReturnValue({
            data: {
                id: 3,
                name: 'Charizard',
                sprites: {
                    back_default: "back_default",
                    back_shiny: "back_shiny",
                    front_default: "front_default",
                    front_shiny: "front_shiny",
                }
            },
            isLoading: true,
            hasError: null
        })
        
        render(<MultipleCustomHooks />);

        const prevButton = screen.getByRole("button", { name: "Anterior" });
        fireEvent.click(prevButton);

        expect(mockDecrement).toHaveBeenCalled();
      })
 })