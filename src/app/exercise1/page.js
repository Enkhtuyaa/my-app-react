// "use client"
// import {useState} from "react"

// function checklocal(){
//   const todos = 
//   typeof window !=== "undefined" ? localStorage.getItem("todos") : null;

//   if(todos){
//     return JSON.parse(todos);
//   } else {
//     return [];
//   }
// }
// export default function Home (){
//   const [state, setState] = useState("All")
//   const [todos, setTodos] = useState(checklocal)
//   const [inputValue, setInputValue] = useState("")
//   const [errorMessage, setErrorMessage] = useState("")
// }
 
// const handleInputChange = (e) => {
// const value = e.target.value
// setInputValue(value);
// if(errorMessage) setErrorMessage("");
// };
// const handleAddButtonClick = () => {
//   if(inputValue.trim()=== ""){
//     setErrorMessage ("please enter todo");
//     return;
//   }
// }
