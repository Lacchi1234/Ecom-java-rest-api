import './App.css';
import Contact from './Components/contact';
import About from './Pages/AboutPage/Index';
import Home from './Pages/HomePage';
import LoginPage from './Pages/loginpage';
import ProductDeet from './Pages/ProductDetail';
import ProductPage from './Pages/ProductPage/ProductPage';
import RegistrationPage from './Pages/RegistrationPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path="/products/detail/:id" element={<ProductDeet />} /> 
        <Route path='/login' element={<LoginPage />} />
      
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
