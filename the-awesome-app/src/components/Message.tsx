type MessageProps = {
    text: string,
    color?: string
}
function Message(props: MessageProps){

    var x = 10, y = 20;
    return (
        <div>
            <h4 style={{color: props.color}}>Message: {props.text}</h4>
            <p>This is a functional component</p>
            <p>Sum : {x + y}</p>
        </div>
    )
}
export default Message;
