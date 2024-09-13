'use client'

import { ChangeEvent, useEffect, useRef, useState } from "react";

// type CounterProps = {
//     initialValue: number
// }

interface CounterProps{
    initialValue: number
}

const Counter: React.FC<CounterProps> = (props) => {

    console.log("Rendering the counter component");
    const [counter, setCounter] = useState(props.initialValue);
    const [temp, setTemp] = useState(0);
    const tempInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        console.log("counter component mounted");

        //unmount
        return () => {
            console.log("counter component unmounted");
        }
    }, [])

    useEffect(() => {
        console.log("counter updated " + counter)
    }, [counter]);

    function inc(){
        //props.initialValue++;
        setCounter(counter + 1); // async method
        console.log("Counter value", counter);
    }
    function decr(){
        setCounter(counter - 1);
    }

    function handleChange(evt: ChangeEvent<HTMLInputElement>){

        setCounter(evt.target.value ? Number(evt.target.value) : 0);
    }
    function update(){
        //setCounter(temp);
        setCounter(Number(tempInputRef.current?.value));
    }

    return (
        <div>
            <h4>Counter: {counter}</h4>
            <div>
                <button onClick={inc}>Inc</button>&nbsp;
                <button onClick={decr}>Decr</button>

                <div>
                    {/* Controlled input : binding to state(useState)*/}
                    Counter: <input type="number" value={counter} onChange={handleChange} placeholder="counter"/>
                </div>
                <div>
                    {/* <input type="number" value={temp} onChange={e => setTemp(Number(e.target.value))} />&nbsp;  */}
                    {/* Uncontrolled input : using the ref(usRef) */}
                    <input ref={tempInputRef} type="number" />
                    <button onClick={update}>Update</button>
                </div>
            </div>
        </div>  
    )
}
export default Counter;