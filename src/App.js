import "./App.css";
import DesignTool from "./components/DesignTool";
function App() {
  return (
    <div className="d-flex flex-column">
      <nav className="w-100 d-flex justify-content-center bg-primary p-3 mb-5">
        Navbar
      </nav>
      <DesignTool width={300} height={100} lineCount={1} />
      <DesignTool width={300} height={100} lineCount={2} />
      <DesignTool width={300} height={100} lineCount={3} />
    </div>
  );
}

export default App;
