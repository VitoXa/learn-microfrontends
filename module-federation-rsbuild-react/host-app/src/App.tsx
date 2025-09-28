import './App.css';

// The remote component provided by federation_provider

import List  from "federation_provider/List";
import Input from "federation_provider/Input";
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const addNewTodo = (newTodo: string) => {
    setTodos((prev) => [...prev, newTodo]);

  };

  return (
    <>
      <Input value={'New todo'} onSubmit={addNewTodo} />
      <List items={todos} />
    </>
  );
}


export default App;
