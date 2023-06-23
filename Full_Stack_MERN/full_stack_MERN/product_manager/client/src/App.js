import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard.page';
import List from './pages/list.page';
import Details from './pages/details.page';
import Update from './pages/update.page';
import Navbar from './components/navbar.component';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/products/list' element={<List/>} />
        <Route path='/products/details/:id' element={<Details/>} />
        <Route path='/products/update/:id' element={<Update/>} />
      </Routes>
    </div>
  );
}

export default App;
