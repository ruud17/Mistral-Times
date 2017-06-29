import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const listItems = props.items.map((item) =>
    <TodoItem key={item.id}
              id={item.id}
              name={item.text} />
  );
  return (
     <ul>{listItems}</ul>
  );
}

export default TodoList;
