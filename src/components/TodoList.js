import React from 'react';
import TodoItem from './TodoItem.js';

const TodoList = ({items}) => {
    const list = items
        .map((item, index) => <TodoItem key={index} item={item} />);

    return (
        <ul>
            {list}
        </ul>
    );
};

export default TodoList;
