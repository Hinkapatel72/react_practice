import './App.css';
// import { UseState } from './components/UseState/UseState';
// import { UseReducer } from './components/UseReducer/UseReducer';
// import { ObjectUseState } from './components/ImmutableState/ObjectUseState';
// import { ArrayUseState } from './components/ImmutableState/ArrayUseState';
// import { ObjectUseReducer } from './components/ImmutableState/ObjectUseReducer';
import { ArrayUseReducer } from './components/ImmutableState/ArrayUseReducer';


function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseReducer /> */}
      <ArrayUseReducer />
    </div>
  );
}

export default App;
