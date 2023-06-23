import './App.css';
import Main from './views/Main'
import Detail from "./views/Detail"
import ProductUpdate from './components/ProductUpdate';
import {Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/product/:id' element={<Detail/>}/>
        <Route path='/update/:id' element={<ProductUpdate/>}/>
      </Routes>
    </div>
  );
}

export default App;
