import React, { useEffect,useState } from 'react'
import Header from './Header'
import Main from './Main'
import axios from 'axios'

const Home = () => {
    const [data, setdata] = useState([])
    useEffect(()=>{
        const fetchData =async ()=>{
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`);
                const data = await response.data
                setdata(data);
                
            } catch (error) {
               console.log(error);
                
            }
        };
        fetchData();
    },[])
  return (
    <div>
        <Header/>
        <Main data = {data}/>

    </div>
  )
}

export default Home