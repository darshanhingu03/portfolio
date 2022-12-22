import "./App.css";
import Testimonial from "./component/testimonial/Testimonial";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Services from "./pages/pages/services/Services";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Testimonial />
    </div>
  );
}

export default App;
