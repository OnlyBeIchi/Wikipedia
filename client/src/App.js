import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Page from './Components/Layout/Page/Page';
import Home from './Components/Layout/Page/Home';
import Login from './Components/Login/Login';

function App() {
  return  <BrowserRouter>
   <Routes>
      <Route path="/" element={<Page/>} />
      <Route path="/Login" element={<Login/>} />
   </Routes>
  </BrowserRouter>
}

export default App;
