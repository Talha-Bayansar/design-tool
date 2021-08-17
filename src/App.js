import "./App.css";
import DesignTool from "./components/DesignTool";
function App() {
  return (
    <div className="d-flex flex-column">
      <nav className="w-100 d-flex justify-content-center bg-primary p-3 mb-5">
        Navbar
      </nav>
      <DesignTool lineCount={1} />
      <DesignTool lineCount={2} />
      <DesignTool lineCount={3} />
    </div>
  );
}

export default App;
