import React, { useReducer } from 'react';

const initState = {
    fname: 'Bruce',
    lname: 'Wayne',
}

const reducer = (state, action) => {
    const newState = {...state}
    switch(action) {
        case 'firstname':
            newState.fname = 'Clark'
            return newState
        case 'lastname':
            newState.lname = 'Kent'
            return newState
        case 'reset':
            return initState
        default:
            return state
    }
}

export const ObjectUseReducer = () => {
    const [person, dispatch] = useReducer(reducer, initState)

    console.log('ObjectUseReducer Render');
    return (
        <div>
            <div>
                {person.fname} {person.lname}
            </div>
            <button onClick={() => dispatch('firstname')}> Change First Name</button>
            <button onClick={() => dispatch('lastname')}> Change Last Name</button>
            <button onClick={() => dispatch('reset')}> Reset Name</button>
        </div>
    );
}