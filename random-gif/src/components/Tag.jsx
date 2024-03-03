import { useState } from "react"
// import axios from 'axios'
// import { useEffect } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
//const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {
  const [tag,setTag]=useState('car')
  // const [gif,setGif]=useState('');
  // const [loading,setLoading]=useState(false)
  
  // async function fetchData(){
  //   setLoading(true);//mtlb 'loading==true' means buffer  ho rha hai abhi url se image or gif or meme nhi mila hai
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`//on this url we will do api call 
  //   // ....?api_key=${API_KEY}&tag={tag} ==> will bring random gif on basis of tag and to bring gif on basis of "..tag=${tag}" this functionality is available in 'tag' itself
  //  const {data}=await axios.get(url);//will fetch the data from url
  //  console.log(data);
  //  const imageSource=data.data.images.downsized_large.url;
  //  console.log(imageSource);
  //  setGif(imageSource);
  //  setLoading(false); //jaise  hume gif mil gya mtlb abb buffer nhi hona chahiye hence 'loading'=false

  // }
  // useEffect(()=>
  // {
  //   fetchData();
  // },[]);
  // above code is already present in useGif() so we commented it

  const {gif,loading,fetchData}=useGif(tag);
  // tag we will pass in the useGif

  
 
  
  return(<div className='w-1/2  bg-blue-500 rounded-lg border
   border-black flex flex-col items-center gap-y-5 mt-[15px]'>
    <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> RANDOM {tag} GIF</h1>
    {
      loading===true?(<Spinner/>):(<img src={gif} alt='' height='100' width='450'/>)
      // agr loading==true mtlb abhi load ho rha hai so show '<Spinner/>' or buffering 
      // agr loading==false mtlb meme or gif load ho chuka hai so show <img/> or meme or gif
    }
     <input className='w-10/12  text-lg py-2 rounded-lg mb-[3px] text-center'
     onChange={(event)=>{return setTag(event.target.value)}} value={tag}/>
    
     <button onClick={()=>fetchData(tag)} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg '>
      Generate
      </button>
  </div>
  ) 
}
