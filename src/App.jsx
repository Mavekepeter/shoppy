import  {useEffect,useState}from 'react'
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';

const App = () => {
  

  return (
    <div className='max-w-screen-lg mx-auto py-[30px] px-[20px]' >
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
   
  )
}

export default App