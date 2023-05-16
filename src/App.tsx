
import './css/App.css';
import { Header } from "./Header";
import { AboutMe } from './Pages/AboutMe';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
