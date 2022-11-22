import React from 'react';
import '../css/header.css';

function Header(props) {
  const text = props.showText ? `Hay ${props.tasks} tareas`: "No hay tareas";

  return (
    <div className="card-header">
      <h1 className="card-header-title header">
        {text}
      </h1>
    </div>
  )
};

export default Header;
