import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

function App() {

  const [tasks, updateTasks] = React.useState(0);

  return (
    <div className="wrapper">
      <div className="card frame">
        <Header tasks={tasks} showText={true}/>
        <TodoList tasks={tasks} updateTasks={updateTasks}/>
        <Form />
      </div>
    </div>
  );
}

export default App;
