import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route } from 'react-router-dom'
import Search from './components/searchcomponent';
import Person from './pages/personpage';
import Planet from './pages/planetpage';
import Starship from './pages/starshippage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={"STAR WARS"}/>
        <Route path='/People/:id' element={<Person/>}/>
        <Route path='/Planets/:id' element={<Planet/>}/>
        <Route path='/Starships/:id' element={<Starship/>}/>
      </Routes>
      <Search/>
    </div>
  );
}

export default App;
