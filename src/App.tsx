
import './css/App.css';
import { Header } from "./Header";
import { AboutMe } from './Pages/AboutMe';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <AboutMe />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
