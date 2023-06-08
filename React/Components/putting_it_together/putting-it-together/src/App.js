import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="CaleeAnn" lastName="Wrath" age={38} hairColor="Red"/>
      <PersonCard firstName="Chelsey" lastName="Campbell" age={38} hairColor="Strawberry Blonde"/>
      <PersonCard firstName="Ann" lastName="Minson" age={43} hairColor="Brown"/>
      <PersonCard firstName="CC" lastName="Maniscalco" age={38} hairColor="Blonde"/>
    </div>
  );
}

export default App;
