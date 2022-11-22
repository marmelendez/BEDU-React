import React from 'react';
import '../css/Todo.css';
import Checkmark from './Checkmark';

function Todo() {
  const [done, setDone] = React.useState(true);

  return (
    <div className={`list-item ${done ? 'done' : ''}`}>
      Tarea
      <div className="is-pulled-right">
        <Checkmark/>
        <button className="delete is-pulled-right" />
      </div>
    </div>
  )
}

export default Todo;
