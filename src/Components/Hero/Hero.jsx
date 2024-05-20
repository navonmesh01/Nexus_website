import React from 'react'
import Slider from "react-slick";
import './Hero.css'
// import hand_icon from '../Assets/hand_icon.png'
// import arrow_icon from '../Assets/arrow.png'
// import hero_image from '../Assets/hero_image.png'
import bannerone from '../Assets/bannerone.jpeg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bannertwo from '../Assets/bannertwo.jpeg'
import bannerthree from '../Assets/bannerthree.jpeg'
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import HeroText from './HeroText';
const Hero = () => {
    const NextArrow=(props)=>{
        const {onClick} = props
        return (
            <div className='p-3 bg-slate-100 hover:text-orange-600 hover:bg-black cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-1 top-1/2' onClick={onClick}>
            <PiCaretLeftLight/>
            </div>
        )
    };
    const PrevArrow=(props)=>{
        const {onClick} = props
        return (
            <div className='p-3 bg-slate-100 hover:text-orange-600 hover:bg-black cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-5 top-1/2' onClick={onClick}>
            <PiCaretRightLight/>
            </div>
        )
    }

const settings = {
    // dots: true,
    infinite: true,
    speed: 550,
    autoplay : true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    nextArrow: <PrevArrow/>,
    prevArrow: <NextArrow/>,
  };
  return (
    <div className='slider-images'>
      {/* <h2> Single Item</h2> */}
      <Slider {...settings}>
        <div className='w-full h-full relative'>
        {/* <HeroText title='Outware Picks'/> */}
          <img src = {bannerone} alt="banner 1" className='w-full h-full relative'/>
         {/* <HeroText title='Outware Picks'/> */}
        </div>
        <div>
          <img src = {bannertwo} alt="banner 2" className='w-full h-full relative'/>
        </div>
        <div>
          <img src = {bannerthree} alt="banner 3 h re" className='w-full h-full relative'/>
        </div>
      </Slider>
    </div>
  );

//   return (
//     <div className='hero'>
//         <div className="hero-left">
//             <h2>NEW ARRIVALS ONLY</h2>
//         <div>
//             <div className="hero-hand-icon">
//                 <p>new</p>
//                 <img src={hand_icon} alt="" />
//             </div>
//             <p>collections</p>
//             <p>for everyone</p>
//         </div>
//         <div className="hero-latest-btn">
//             <div>Latest Collection</div>
//             <img src={arrow_icon} alt="" />
//         </div>
//         </div>
//         <div className="hero-right">
//             <img src={hero_image} alt="" />
//         </div>
//     </div>
//   )
// }
}
export default Hero;