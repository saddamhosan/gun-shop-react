import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Manu from "./Component/Manu/Manu";
import Shop from "./Component/Shop/Shop";
import Slider from "./Component/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Manu/>
      <br />
      <Slider/>
      <br />
       <Shop/>
    </div>
  );
}

export default App;
