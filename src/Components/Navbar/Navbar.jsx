import React,{useRef, useState} from 'react'
import './Navbar.css'
import Nexus_logo from '../Assets/bcd.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'
const Navbar = () => {



    const [menu,setMenu] = useState("Home");
    const {getTotalCartItems} =useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle =(e) =>{
              menuRef.current.classList.toggle('nav-menu-visible');
              e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <Link to='/'><img src={Nexus_logo} alt="logo hai lomdu" /></Link>
        </div>
        <img className='nav-dropdown' onClick = {dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={() =>{setMenu("Home")} }><Link style={{textDecoration: 'none'}} to='/'>HOME</Link>{menu==="Home"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("electrician")} }><Link style={{textDecoration: 'none'}} to='/electrician'>Electrician</Link>{menu==="electrician"?<hr/>:<></>} </li>
            <li onClick={() =>{setMenu("plumber")} }><Link style={{textDecoration: 'none'}} to='/plumber'>Plumber</Link>{menu==="plumber"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("painter")} }><Link style={{textDecoration: 'none'}} to='/painter'>Painter</Link>{menu==="painter"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to='/login'><button>Login</button></Link>}

            {/* <Link to='/login'><button>Login</button></Link> */}
            <span className='okay'>
            <Link to='/cart'><img src={cart_icon} alt="cart hai" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
            </span>
            
        </div>
    </div>
  )
}
export default Navbar