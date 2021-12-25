import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Products from './Pages/Products/Products';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/home" element={<Home></Home>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/products" element={<Products></Products>}/>
        <Route path="/about" element={<Blogs></Blogs>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
