import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap for Carousel https://react-bootstrap.github.io/components/carousel/
import { Top } from "./components/Top/Top";
import { Navigation } from "./components/Navigation/Navigation";
import { About } from "./components/About/About";
import { VisualMedia } from "./components/VisualMedia/VisualMedia";

function App() {
  return (
    <div className="App">
      <Top />
      <Navigation />
      <VisualMedia />
      <About />
    </div>
  );
}

export default App;
