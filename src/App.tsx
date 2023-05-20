
import "./css/App.css";
import { Header } from "./Header";
import { AboutMe } from "./Pages/AboutMe";
import { Home } from "./Pages/Home";
import { Portfolio } from "./Pages/Portfolio";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Home />
        <AboutMe />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
