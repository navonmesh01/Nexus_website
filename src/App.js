import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart  from './Pages/Cart';
import LoginSignup  from './Pages/LoginSignup';
import "slick-carousel/slick/slick.css";
import './index.css';
import Foter from './Components/Foter/Foter';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>{/*navbar yaha isliye dala h taki har page(components) m navigation bar rahe */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/electrician' element={<ShopCategory banner = {men_banner} category="men"/>}/> {/*eletrician likhna h idhar*/}
        <Route path='/plumber' element={<ShopCategory banner = {women_banner} category="women"/>}/> {/*plumber likhna h idhar*/}
        <Route path='/painter' element={<ShopCategory banner = {kid_banner} category="kid"/>}/> {/*painter likhna h idhar*/}
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Foter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
