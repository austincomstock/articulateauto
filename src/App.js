import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap for Carousel https://react-bootstrap.github.io/components/carousel/

// COMPONENTS
import { Top } from "./components/Top/Top";
import { Navigation } from "./components/Navigation/Navigation";
import { VisualMedia } from "./components/VisualMedia/VisualMedia";
import { About } from "./components/About/About";
import { Links } from "./components/Links/Links";

function App() {
  return (
    <div className="App">
      <Top />
      <Navigation />
      <VisualMedia />
      <About />
      <Links />
    </div>
  );
}

export default App;
