
import "./css/App.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { AboutMe } from "./Pages/AboutMe";
import { Home } from "./Pages/Home";
import { Portfolio } from "./Pages/Portfolio";
import { Skill } from "./Pages/Skill";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Home />
        <AboutMe />
        <Portfolio />
        <Skill />
      </div>
      <Footer />
    </div>
  );
}

export default App;
