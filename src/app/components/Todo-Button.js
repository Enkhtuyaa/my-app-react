// export const TodoButton = (props) =>{
//     console.log("this is the props", props)
//     return <div> hello from button </div>
// }
export const TodoButton = (props)=>{
    return (
        <button
        
        className= {props.className}
         onClick={props.onClick}
            style={{
              backgroundColor: props.stateValue === props.text ? "#3c82f6" : "#F3F4F6",
              color: props.stateValue === props.text ? "white" : "black",
            }}
        >
        {props.text}
        </button>
    )
}