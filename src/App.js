import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap for Carousel https://react-bootstrap.github.io/components/carousel/

// COMPONENTS
import { Top } from "./components/Top/Top";
import { About } from "./components/About/About";
import { VisualMedia } from "./components/VisualMedia/VisualMedia";
import { ShopVehicle } from "./components/ShopVehicle/ShopVehicle";
import { Contact } from "./components/Contact/Contact";
import { MyAccount } from "./components/MyAccount/MyAccount";

function App() {
  return (
    <div className="App">
      <Top />
      <About />
      <VisualMedia />
      <ShopVehicle />
      <Contact />
      <MyAccount />
    </div>
  );
}

export default App;
