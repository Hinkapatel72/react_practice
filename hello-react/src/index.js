//import React, { useState, useEffect } from 'react';
import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Using userReducer
function Checkbox() {
  const [checked, toggle] = useReducer(checked => !checked, false);
  
  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
}



//Fetching data with useEffect
// function GitHubUser({ login }){
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch(`https://api.github.com/users/${login}`)
//       .then(res => res.json())
//       .then(setData)
//       .catch(console.error);
//   }, []);

//   if (data) {
//     return(
//     <>
//       <div>
//         {JSON.stringify(data)}
//       </div>
//       <div>
//         <h1>
//           {data.login}
//         </h1>
//         <img src={data.avatar_url} width={100} />
//       </div>
//     </>
//     );
//   }
//   return null;
// }

// function App() {
//   return <GitHubUser login="moonhighway" />
// }



//Updating with the useEffect dependency array
// function App() {
//   const [val, setVal] = useState("");
//   const [val2, setVal2] = useState("");

//   useEffect(() => {
//     console.log(`field 1: ${val}`);
//   }, [val]);

//   useEffect(() => {
//     console.log(`field 2: ${val2}`);
//   }, [val2]);

//   return (
//     <>
//       <label>
//         Favorite Phrase:
//         <input value={val} onChange={e => setVal(e.target.value)}/>
//       </label>
//       <br />
//       <label>
//         Second Favorite Phrase:
//         <input value={val2} onChange={e => setVal2(e.target.value)}/>
//       </label>
//     </>
//   );
// }



//Working with userEffect
// function Checkbox() {
//   const [checked, setChecked] = useState(false);

//   useEffect(() => {
//     alert(`checked: ${checked.toString()}`);
//   });
  
//   return(
//     <>
//       <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)}/>
//       {checked ? "Checked" : "Not Checked"}
//     </>
//   )
// }



//Using useState
// function App() {
//   const [year, setYear] = useState(2050);
//   const [manager, setManager] = useState("Alex");
//   const [status, setStatus] = useState("Open");
//   return (
//     <>
//       <div>
//         <h1> {year} </h1>
//         <button onClick={() => setYear(year+1)}> New Year</button>
//       </div>
//       <div>
//         <h1> Manager on Duty: {manager} </h1>
//         <button onClick={() => setManager("Aaria")}> New Manager </button>
//       </div>
//       <div>
//         <h1> Status: {status} </h1>
//         <button onClick={() => setStatus("Open")}> Open </button>
//         <button onClick={() => setStatus("Closed")}> Closed </button>
//       </div>
//     </>
//   );
// }


//Conditional rendering
// function Lake({ name }) {
//   return(
//     <div>
//       <h1> Visit { name }! </h1>
//     </div>
//   );
// }
 
// function SkiResort({ name }) {
//   return(
//     <div>
//       <h1> Visit { name } Resort! </h1>
//     </div>
//   );
// }

// function App(props) {
//   if(props.season === "summer") {
//     return <Lake name="Lake Tahoe" />;
//   } else if(props.season === "winter") {
//     return <SkiResort name="Beach Retreat" />;
//   } else {
//     return <h1> Come back in winter or summer! </h1>;
//   }
// }


//Rendering lists of object
// const lakeList = [
//   { id: "1", name: "Lake Tahoe" },
//   { id: "2", name: "Angora Lake" }
// ];

// function App({ lakes }) {
//   return (
//     <div>
//       {lakes.map(lake => (
//         <div key={ lake.id }> 
//           <h2> {lake.name} </h2> 
//         </div>
//       ))}
//     </div>
//   );
// }


//Rendering List
// const lakeList = ["Lake Tahoe", "Angora Lake", "Shirly Lake"];

// function App(props) {
//   return (
//     <ul>
//       {props.lakes.map(lake => (<li> {lake} </li>))}
//     </ul>
//   );
// }

//Composing Components
// function Lake(props) {
//   return <h1> {props.name} </h1>;
// }

// we can reuse Lake function here in App
// function App() {
//   return (
//     <div>
//       <Lake name= "Lake Tahoe" />
//       <Lake name= "Angora Lake" />
//       <Lake name = "Shirly Lake" />
//     </div>
//   );
// }


//we can directly pass {library, message, number} as a function parameter insted of using props. and use directly as library insted of props.library.
// function Hello(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1> Welcome to {props.library}! </h1>
//       <p> Let's build somthing cool </p>
//       <p> {props.message} </p>
//       <p> {props.number} </p>
//       <p> {Object.keys(props).length } Props Total</p>
//     </div>
//   );
// }


// let city = {
//   name: "San Jose",
//   state: "California"
// };

ReactDOM.render(
  //React.createElement("h1", { style: { color: "green" } }, "Hello!"),
  // <ul>
  //   <li> Pizza </li>
  //   <li> Burgur </li>
  //   <li> Chips </li>
  // </ul>,
  // <h1 id="heading" className="cool-text"> {city.name} is in {city.state} </h1>,

  //this library property accept dynamic value, we can anytime change it. 
  // <Hello 
  //   library="React" 
  //   message="Have Fun!"
  //   number = {13}
  // />,

  //<App lakes={lakeList} />,

  //<App season="winter" />,

  //<App />,

  <Checkbox />,

  document.getElementById('root')
);

