import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='popular h-fit '>
        <h1>NEXUS ACADBUD</h1>
        <hr />
        <div className="popular-item grid md:grid-cols-4 grid-cols-4 w-[90%] mx-auto my-10">
            {data_product.map((item,i)=>{
                return <div className='flex gap-y-10 my-5 '><Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /></div>
            })}
        </div>
    </div>
  )
}

export default Popular

// sort(b, b+m);
	   // int k = b[m-1];
	   // for(int i=0;i<m;i++){
	   //     int v = n - b[i];
	   //     int c = sizeof(a) / sizeof(a[0]);
	   //     int v = c - b[i];
	   //     sort(a + v, a + c);
	   // } 
	   
	   // int c = sizeof(a) / sizeof(a[0]);
	   // sort(a+c-k, a+c);