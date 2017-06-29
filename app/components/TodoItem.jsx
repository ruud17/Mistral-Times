import React from 'react';

const TodoItem = (props) => {

  return (
    <li className="todoItem">{props.id} - {props.name}</li>
  )
}

export default TodoItem;
