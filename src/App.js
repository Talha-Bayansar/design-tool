import "./App.css";
import DesignTool from "./components/DesignTool";
function App() {
  return (
    <div className="d-flex flex-column">
      <nav className="w-100 d-flex justify-content-center bg-primary p-4 mb-5">
        Navbar
      </nav>
      <DesignTool
        width={600}
        height={200}
        widthIcon={100}
        heightIcon={100}
        defaultBackgroundColor={"#fff"}
        defaultFontColor={"#000"}
        defaultFontSize={64}
        lineCount={4}
      />
      <DesignTool
        width={300}
        height={100}
        widthIcon={50}
        heightIcon={50}
        defaultBackgroundColor={"#fff"}
        defaultFontColor={"#000"}
        defaultFontSize={32}
        lineCount={3}
      />
      <DesignTool
        width={300}
        height={100}
        widthIcon={50}
        heightIcon={50}
        defaultBackgroundColor={"#fff"}
        defaultFontColor={"#000"}
        defaultFontSize={32}
        lineCount={2}
      />
      <DesignTool
        width={300}
        height={100}
        widthIcon={50}
        heightIcon={50}
        defaultBackgroundColor={"#fff"}
        defaultFontColor={"#000"}
        defaultFontSize={32}
        lineCount={1}
      />
    </div>
  );
}

export default App;
