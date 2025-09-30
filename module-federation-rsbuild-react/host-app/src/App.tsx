import './App.css';

// The remote component provided by federation_provider
import React from 'react';
// import List from "federation_provider/List";
// import Input from "federation_provider/Input";
import { useState } from 'react';

const List = React.lazy(() => import("federation_provider/List"));
const Input = React.lazy(() => import("federation_provider/Input"));

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const addNewTodo = (newTodo: string) => {
    setTodos((prev) => [...prev, newTodo]);

  };

  return (
    <>
      <React.Suspense fallback="Loading Button...">
        <Input value={'New todo'} onSubmit={addNewTodo} />
      </React.Suspense>
      {/* <React.Suspense fallback="Loading Button...">
        <List items={todos} />
      </React.Suspense> */}
    </>
  );
}


export default App;
