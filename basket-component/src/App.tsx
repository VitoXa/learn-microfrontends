// App.jsx
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";



function App() {
  const items = ["Learn React", "Learn Vite", "Make an awesome app"];

  return (
    <>
      <Input value="bla" onSubmit={console.log} />
      <List items={items} />
    </>
  );
}

export default App;
