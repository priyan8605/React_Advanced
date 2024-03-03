import axios from 'axios';
import { useState,useEffect } from 'react';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;



const useGif = (tag) => {
  // const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  // const tagMemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const [gif,setGif]=useState('');
  const [loading,setLoading]=useState(false)

  //abb API_KEY in in '.env' to get it here in this file we use 'process.env.GIF_API_KEY'
 
  
  async function fetchData(tag){
    setLoading(true);//mtlb 'loading==true' means buffer  ho rha hai abhi url se image or gif or meme nhi mila hai
   
   const {data}=await axios.get(tag ?(`${url}&tag=${tag}`):(url));//will fetch the data from url
  //axios.get(tag===true ?tagMemeUrl:randomMemeUrl)  ===>mtlb agr tag pass hua hai (i.e tag===true) then use tagMemeUrl 
 //agr tag pass nhi hua hai then use 'randomMemeUrl'
   console.log(data);
   const imageSource=data.data.images.downsized_large.url;
   console.log(imageSource);
   setGif(imageSource);
   setLoading(false); //jaise  hume gif mil gya mtlb abb buffer nhi hona chahiye hence 'loading'=false

  }
  useEffect(()=>
  {
    fetchData('car');
  },[]);

  return{gif,loading,fetchData}
};

export default useGif;
