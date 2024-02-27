import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react";
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
export default function Random() {
  const [gif,setGif]=useState('');

  //abb API_KEY in in '.env' to get it here in this file we use 'process.env.GIF_API_KEY'
 
  
  async function fetchData(){
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`//on this url we will do api call 
   const {data}=await axios.get(url);//will fetch the data from url
   console.log(data);
   const imageSource=data.data.images.downsized_large.url;
   console.log(imageSource);
   setGif(imageSource);
  }
  useEffect(()=>
  {
    fetchData();
  },[])
  function clickHandler()
  {
   fetchData();
  }
  return(<div className='w-1/2 bg-green-500 rounded-lg border
   border-black flex flex-col items-center gap-y-5 mt-[15px]'>
    <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A RANDOM GIF</h1>
    <img src={gif} alt='' width='450'/>
     <button onClick={clickHandler} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg '>
      Generate
      </button>
  </div>
  ) 
}
