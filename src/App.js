import "./App.css";
import First from "./components/First/First";
import { renderLineChart } from "./components/Third/Third";

function App() {
  return (
    <div className="App">
      <First />
      {renderLineChart}
    </div>
  );
}

export default App;
