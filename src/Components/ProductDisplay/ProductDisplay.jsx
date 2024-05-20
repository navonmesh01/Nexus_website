import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-stars'>
          <span><img src={star_icon} alt="" /></span>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className='productdislay-right-price-old'> ₹{product.old_price}</div>
          <div className="productdisplay-right-price-new"> ₹{product.new_price}</div>
        </div>
        <div className="productdisplay-right-decsription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem maiores vero expedita, sapiente quia vitae possimus odio aspernatur nihil eos, laudantium excepturi repellat?
        </div>
        <div className="productdisplay-right-time">
          <h1>Select Time</h1>
          <div className="productdisplay-right-times">
            <div>9 - 12 A.M.</div>
            <div>12 - 4 P.M.</div>
            <div>4 - 6 P.M.</div>
            <div>6 - 9 P.M.</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay