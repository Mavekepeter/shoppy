import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
        <div>
            <Link to='/'>
            <h2 className='text-orange-500 tracking-wider font-semibold cursor-pointer text-2xl'>Shoppy</h2>
            </Link>
        </div>
        <div>
            <Link to='/cart'>
            <button className='text-white bg-orange-500 rounded-md cursor-pointer font-semibold px-[30px] py-[10px]'>Cart</button>
            </Link>
        </div>
    </div>
  )
}

export default Header