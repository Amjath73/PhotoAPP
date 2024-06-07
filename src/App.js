import logo from './logo.svg';
import './App.css';
import AddPhoto from './components/AddPhoto';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Delete from './components/Delete';
import View from './components/View';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddPhoto/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/Delete' element={<Delete/>}/>
        <Route path='/View' element={<View/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
