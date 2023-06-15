import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/homecomponent';
import Number from './components/numbercomponent';
import Wordcolor from './components/wordcolorcomponent';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:num' element={<Number/>}/>
        <Route path='/:word/:color/:background' element={<Wordcolor/>}/>
      </Routes>
    </div>
  );
}

export default App;
