import './App.css';
// import { UseState } from './components/UseState/UseState';
// import { UseReducer } from './components/UseReducer/UseReducer';
// import { ObjectUseState } from './components/ImmutableState/ObjectUseState';
// import { ArrayUseState } from './components/ImmutableState/ArrayUseState';
// import { ObjectUseReducer } from './components/ImmutableState/ObjectUseReducer';
// import { ArrayUseReducer } from './components/ImmutableState/ArrayUseReducer';
// import { Parent } from './components/ParentChild/Parent';
// import { ParentOne } from './components/Optimization/ParentOne';
// import { ChildOne } from './components/Optimization/ChildOne';
// import { GrandParent } from './components/Optimization/GrandParent';
// import { ParentTwo } from './components/Optimization/ParentTwo';
// import { ParentThree } from './components/IncorrectOptimization/ParentThree';
// import { ParentFour } from './components/IncorrectOptimization/ParentFour';
import { ContextParent } from './components/Context/ContextParent';
import { ChildA } from './components/Context/ContextChildren';


function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseReducer /> */}
      {/* <ArrayUseReducer /> */}
      {/* <Parent /> */}
      {/* <ParentOne> 
        <ChildOne />
      </ParentOne> */}
      {/* <GrandParent /> */}
      {/* <ParentTwo /> */}
      {/* <ParentThree /> */}
      {/* <ParentFour /> */}
      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  );
}

export default App;
