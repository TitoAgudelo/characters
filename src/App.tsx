import "./index.css";
import CharacterManager from "./components/CharacterManager";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">
        Harry Potter Character Manager
      </h1>
      <CharacterManager />
    </div>
  );
}

export default App;
