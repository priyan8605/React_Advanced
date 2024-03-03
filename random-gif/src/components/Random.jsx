import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
//const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
export default function Random() {
  // const [gif,setGif]=useState('');
  // const [loading,setLoading]=useState(false)
  // //abb API_KEY in in '.env' to get it here in this file we use 'process.env.GIF_API_KEY'
 
  
  // async function fetchData(){
  //   setLoading(true);//mtlb 'loading==true' means buffer  ho rha hai abhi url se image or gif or meme nhi mila hai
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`//on this url we will do api call 
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
  // },[])
  // above code are already present in useGif.js so commented in Random.js

  const {gif,loading,fetchData}=useGif();//we will accres it from useGif() call

  
  return(<div className='w-1/2 bg-green-500 rounded-lg border
   border-black flex flex-col items-center gap-y-5 mt-[15px]'>
    <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A RANDOM GIF</h1>
    {
      loading===true?(<Spinner/>):(<img src={gif} alt='' width='450'/>)
      // agr loading==true mtlb abhi load ho rha hai so show '<Spinner/>' or buffering 
      // agr loading==false mtlb meme or gif load ho chuka hai so show <img/> or meme or gif
    }

    
     <button onClick={()=>fetchData()} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg '>
      Generate
      </button>
  </div>
  ) 
}
