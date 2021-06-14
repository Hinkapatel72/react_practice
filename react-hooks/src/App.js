import React, { createContext, useEffect, useReducer, useRef, useState } from "react";
import './App.css';
//import { useTrees } from "./";
//import { useInput } from "./useInput";
//import { FaStar } from 'react-icons/fa';

function App () {
  return (
    <h1> Hello </h1>
  );
}


// function App() {
//   const { trees } = useTrees();
  
//   return(
//     <div>
//       <h1>
//         Tress I've Heard of
//       </h1>
//       <ul>
//         {trees.map((tree) => (
//           <li key={tree.id}> {tree.type} </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


//Reusing form logic with custom hooks
// function App() {
//   const [titleProps, resetTitle] = useInput("");
//   const [colorProps, resetColor] = useInput("#000000");

//   const submit = (e) => {
//     e.preventDefault();
//     alert( `${titleProps.value} sounds like ${colorProps.value}` );
//     resetTitle();
//     resetColor();
//   };

//   return (
//     <form onSubmit={submit}>
//       <input {...titleProps} type="text" placeholder="sound" />
//       <input {...colorProps} type="color" />
//       <button> ADD </button>
//     </form>
//   );
// }



//creating conttrolled components with useState
// function App() {
//   const [sound, setSound] = useState("");
//   const [color, setColor] = useState("#000000");

//   const submit = (e) => {
//     e.preventDefault();
//     alert( `${sound} sounds like ${color}` );
//     setSound("");
//     setColor("#000000");
//   };

//   return (
//     <form onSubmit={submit}>
//       <input value={sound} type="text" placeholder="sound" onChange={e => setSound(e.target.value)} />
//       <input value={color} type="color" onChange={e => setColor(e.target.value)} />
//       <button> ADD </button>
//     </form>
//   );
// }



//Managing from inputs with useRef
// function App() {
//   const sound = useRef();
//   const color = useRef();

//   const submit = (e) => {
//     e.preventDefault();
//     const soundVal = sound.current.value;
//     const colorVal = color.current.value;
//     alert( `${soundVal} sounds like ${colorVal}` );
//     sound.current.value = "";
//     color.current.value = "";
//   };

//   return (
//     <form onSubmit={submit}>
//       <input ref={sound} type="text" placeholder="sound" />
//       <input ref={color} type="color" />
//       <button> ADD </button>
//     </form>
//   );
// }



//Dispatching actions with useReducer
// const initialState = { message: "hi" };

// //takes state and action and return a state
// function reducer(state, action) {
//   switch (action.type) {
//     case "yell":
//       return {
//         message: `HEY! I just said ${state.message}`
//       };
//     case "whisper":
//       return {
//         message: "excuse me!"
//       };
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p> Message: {state.message} </p>
//       <button onClick={() => dispatch({type: "yell"})}> YELL </button>
//       <button onClick={() => dispatch({type: "whisper"})}> Wishper </button>
//     </div>
//   );
// }



//useReducer
// function App() {
//   const [number, setNumber] = useReducer((number, newNumber) => number + newNumber , 0);
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={() => setNumber(1)}> Click </button>
//     </div>
//   );
// }


//Fetching data with useEffect
// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(`https://api.github.com/users`)
//       .then(res => res.json())
//       .then(setData)
//       .catch(console.error);
//   }, []);

//   if(data) {
//     return(
//       <div>
//         <ul>
//           {data.map(user => (
//             <li key={user.id}>
//               {user.login}
//             </li>
//           ))}
//         </ul>
//         <button onClick={() => setData([])}>Remove Data</button>
//       </div>
//     );
//   }
//   return (
//     <p>Hello there! </p>
//   );
// }


//useEffect
// function App() {
//   const [name, setName] = useState("Aaria");
//   const [admin, setAdmin] = useState(false);

//   useEffect(() => {
//     console.log(`Celebrate ${name}`);
//   }, [name]);

//   useEffect(() => {
//     console.log(`The user is : ${admin ? "admin" : "not admin"} .`);
//   }, [admin]);

//   return (
//     <section>
//       <p> Congratulations {name}! </p>
//       <button onClick={() => setName("Smith")}> Change Winner </button>
//   <p>{admin ? "logged in" : "not logged in"}</p>
//   <button onClick={() => setAdmin(true)}>Log In</button>
//     </section>
//   );
// }


//working with component tree
// const createArray = (length) => [...Array(length)];

// function Star({ selected = false, onSelect }) {
//   return <FaStar color = {selected ? "red" : "gray" } onClick={ onSelect } />;
// }

// function StarRating({ totalStars }) {
//   const [selectedStars, setSelectedStars] = useState(0);
//   return (
//     <>
//     { createArray(totalStars).map((n, i) => (<Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)}/>)) } 
//     <p> {selectedStars} of {totalStars} </p>
//     </>
//     );
// }

// function App() {
//   return < StarRating totalStars={10} />;
// }


//Building a checkbox with useState
// function App() {
//   const [checked, setChecked] = useState(false);

//   return (
//     <div>
//       <input type="checkbox" value={checked} onChange={() => setChecked(!checked)}/>
//       <p> {checked ? "checked" : "notchecked"} </p>
//     </div>
//   );
// }


//Incorporating the useState hook
// function App() {
//   const [status, setStatus] = useState("Not Delivered ");
//   return (
//     <div>
//       <h1> The Package is: {status}. </h1>
//       <button onClick={() => setStatus("Delivered")}> Change status </button>
//     </div>
//   );
// }


// function App({name}) {
//   return (
//     <div className="App">
//       <h1> Hello {name}! </h1>
//     </div>
//   );
// }

export default App;
