import React from 'react';
import Todo from './Todo';
import '../css/TodoList.css';

function TodoList(props) {
  props.updateTasks(10);

  return (
    <div className="list-wrapper">
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  )
};

export default TodoList;
