type CounterProps = {
    initialValue: number
}

const Counter: React.FC<CounterProps> = (props) => {

    return (
        <div>
            <h4>Counter: {props.initialValue}</h4>
            <div>
                <button>Inc</button>&nbsp;
                <button>Decr</button>
            </div>
        </div>
       
        
    )
}
export default Counter;