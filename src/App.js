import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap for Carousel https://react-bootstrap.github.io/components/carousel/

// COMPONENTS
import { Top } from "./components/Top/Top";
import { Navigation } from "./components/Navigation/Navigation";
import { VisualMedia } from "./components/VisualMedia/VisualMedia";
import { About } from "./components/About/About";
import { Links } from "./components/Links/Links";
import { Bottom } from "./components/Bottom/Bottom";

function App() {
  return (
    <div className="App">
      <Top />
      <Navigation />
      <VisualMedia />
      <About />
      <Links />
      <Bottom />
      {/* <footer>
        <h1>Contact & Connect With Us</h1>
        <h3>Contact</h3>
        <p>Phone: 800-000-000</p>
        <p>Email: articuateauto@mail.placeholder</p>
        <h3>Connect</h3>
        <p>Facebook, Instagram</p>
        <p>Instagram</p>
      </footer> */}
    </div>
  );
}

export default App;
