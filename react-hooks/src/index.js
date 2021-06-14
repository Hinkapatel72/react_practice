//import React, {createContext, useContext} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { useFetch } from './useFetch';

//destructuring arrays 
// const [, , third] = ["Pizza", "Burgur", "chips"]
// console.log(third);


//Placing data in context
// const TreeContext = createContext();

// export const useTrees = () => useContext(TreeContext);

// const trees = [
//   {id: "1", type: "Maple"},
//   {id: "2", type: "Oak"},
//   {id: "3", type: "Family"}
// ];

//Building fetch component
function App1({ login }) {
  const { loading, data, error } = useFetch(`https://api.github.com/users/${login}`);
  if (loading) return ( <h1> Lodding.. </h1> );
  if (error) return (
    <div>
      <pre> {JSON.stringify(error, null, 2)} </pre>
    </div>
  );
  return (
    <>
      <div>
        <pre> {JSON.stringify(data, null, 2)} </pre>
        <h1> {data.login} </h1>
        {data.name && <p> {data.name} </p>}
        {data.location && <p> {data.location} </p>}
      </div>
    </>
  );
}

ReactDOM.render(
  // <React.StrictMode>
  //   {/* <App name="Aaria" /> */}
  //   <App />
  // </React.StrictMode>,

  // <TreeContext.Provider value={{ trees }}>
  //   <App />
  // </TreeContext.Provider>,

  <App1 login="MoonHighway"/>,
  document.getElementById('root')
);

