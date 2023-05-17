
import './css/App.css';
import { Header } from "./Header";
import { AboutMe } from './Pages/AboutMe';
import { Home } from './Pages/Home';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Home />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
