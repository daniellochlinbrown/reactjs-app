import logo from './logo.svg';
import './App.css';
import Tile from './components/Tile';

const arr = [
  "Nick",
  "Dan",
  "Dan",
  "Dan3",
  "Dan",
  "Da34",
  "Dandfd",
  "Dan",
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          fsdjkahfjsd
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          THis is editing the page
        </a>
        {
          arr.map((e) => {
            return (
              <Tile name={e} />
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
