import { useState } from "react";
import List from "todo-components/List";
import Input from "todo-components/Input";

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

