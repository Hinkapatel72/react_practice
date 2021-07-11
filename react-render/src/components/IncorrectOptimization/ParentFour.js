import React, { useState } from 'react';
import { MemoizedChildFive } from './ChildFive';

export const ParentFour = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Kent');

    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }

    console.log('ParentFour Render');
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}> Count :- {count} </button>
            <button onClick={() => setName('Clark')}> Change Name</button>
            <MemoizedChildFive name={name} person={person}/>
        </div>
    );
}