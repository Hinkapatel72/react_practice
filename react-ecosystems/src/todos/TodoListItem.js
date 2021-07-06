import React from 'react';
import styled from 'styled-components';
import './TodoListItem.css';

const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
                    ? 'none'
                    : '2px solid red')};
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

// const TodoItemContainerWithWarning = styled(TodoItemContainer)`
//     border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
//         ? 'none'
//         : '2px solid red')};
// `;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
    // const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning;
    return (
        <TodoItemContainer createdAt={todo.createdAt}>
            <h3>{todo.text}</h3>
            <p>
                Created at:&nbsp;
                {(new Date(todo.createdAt)).toLocaleDateString()}
            </p>
            <div className="buttons-container">
                {todo.isCompleted
                    ? null
                    : <button 
                        onClick={() => onCompletedPressed(todo.id)}
                        className="completed-button">Mark As Completed</button>
                }
                <button
                    onClick={() => onRemovePressed(todo.id)}
                    className="remove-button">Remove</button>
            </div>
        </TodoItemContainer>
    );
}

export default TodoListItem;