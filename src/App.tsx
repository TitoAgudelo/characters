import "./index.css";
import CharacterManager from "./components/CharacterManager";

function App() {
  return (
    <main className="bg-white dark:bg-slate-900">
      <div className="App min-h-screen p-8 container mx-auto">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">
          Harry Potter Character Manager
        </h1>
        <span className="dark:text-white text-xs mb-4">
          Start typing in the field below to show some coincidences with your
          search
        </span>
        <CharacterManager />
      </div>
    </main>
  );
}

export default App;
