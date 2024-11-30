/* eslint-disable react/prop-types */
import React ,{useState,useEffect}from 'react'
import axios from 'axios'

import ProductCart from './productCart'
import LoadingComp from './LoadingComp'

const Main = ({data}) => {
    //console.log(data);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        const fetchData =async ()=>{
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`);
                const data = await response.data
                console.log(data);
                setLoading(false)
                
                
            } catch (error) {
               console.log(error);
               setLoading(false)
                
            }
        };
        fetchData();
    },[])
    
  return (
    <div>
        <div>
            <h2 className='mt-4 font-medium 
            tracking-wider text-xl capitalize'>
                Our products</h2>
        </div>


        { 

            loading ? (<LoadingComp/>) :(

                <div  className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] '>
            {data.map((product)=>{

                return(

                    <div key={product.id}>
                        <ProductCart items={product}/>
                    </div>
                )
                })
            }
        </div>

            )
        }
        
    </div>


  )
}

export default Main