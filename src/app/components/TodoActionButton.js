export const TodoActionButton = (props) => {
  return (
    <button 
    onClick={props.onClick} 
    className={props.className}>
    {props.text}
    </button>
  );
};
