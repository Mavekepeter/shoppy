import React from 'react'

const ProductCart = ({items}) => {
  return (
    <div className='border border-gray-200 p-[20px] rounded-md shadow-md flex flex-col justify-between w-full h-full mt-[20px] '>
        <div>
            <div className='flex justify-between items-center'>
                <img src={items.image} className='object-contain size-[100px]' alt="producct" />
                <h3 className='text-gray-400'>${items.price}</h3>
            </div>
            <div>
                <h3>{items.title}</h3>
            </div>
            <div className='flex justify-between items-center'> 
            <div />
            <button className='text-white bg-orange-500 rounded-md cursor-pointer font-semibold px-[30px] py-[10px]'>add to cart</button>
            </div>
           
        </div>
    </div>
  )
}

export default ProductCart