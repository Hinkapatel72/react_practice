import React, { useReducer } from 'react';

const initState = ['Bruce', 'Wayne']

const reducer = (state, action) => {
    const newState = [...state]
    switch (action) {
        case 'addnames':
            newState.push("Clark")
            newState.push('Kent')
            return newState
        case 'reset':
            return initState
        default:
            return state
    }
}

export const ArrayUseReducer = () => {
    const [persons, dispatch] = useReducer(reducer, initState);

    console.log("ArrayUseReducer Render");
    return(
        <div>
            <button onClick={() => dispatch('addnames')}>Add names</button>
            <button onClick={() => dispatch('reset')}>Reset name</button>
            {
                persons.map(person => (
                    <div key={person}> {person} </div>
                ))
            }
        </div>
    );
}