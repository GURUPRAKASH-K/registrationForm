import logo from './logo.svg';
import './App.css';
import Fo from './login/Home';
import Mini from './login/about';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import SIGNUP from './login/about';
import Login from './login/Home';
import Base from './login/Base';
function App() {
  return (
    <div >
  
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Base/>}/>
    <Route path='/home' element={<Login/>}/>
    <Route path='/about' element={<SIGNUP/>}/>
    </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;
