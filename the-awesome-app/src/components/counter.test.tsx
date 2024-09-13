import {fireEvent, render, screen} from '@testing-library/react';
import Counter from './Counter';

describe("counter", () => {
    test("Counter 1", () => {

        render(<Counter initialValue={5}/>);
        const text = screen.getByText("Counter: 5");
        expect(text).toBeInTheDocument();
    })

    test("Counter 2", () => {

        render(<Counter initialValue={5}/>);
        let text = screen.getByText("Counter: 5");
        expect(text).toBeInTheDocument();

        const incBtn = screen.getByText("Inc");
        fireEvent.click(incBtn);
        text = screen.getByText("Counter: 6");
        expect(text).toBeInTheDocument();

    })

    test("Counter 3", () => {

        render(<Counter initialValue={5}/>);
        let text = screen.getByText("Counter: 5");
        expect(text).toBeInTheDocument();

        const input = screen.getByPlaceholderText("counter");
        fireEvent.change(input, {target: {value: 100}});

        text = screen.getByText("Counter: 100");

    })
})