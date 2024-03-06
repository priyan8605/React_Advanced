// isme hum context create krenge jo "App.js"  me hum apply krenge
// To App component aur vo sare component jo ki App component ke andr hai "context" ke andr ke data ko access krr skte hai
import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl';
export const AppContext= createContext();//"context" created and exported as we have to use it in another file too
function AppContextProvider({children})
{
    // children represent <App/> see in "index.js" => <AppContextProvider><App/></AppContextProvider>
    const [loading,setLoading]=useState(false)
    const [posts,setPosts]=useState([]);//posts intially initialized with empty array coz in starting there is no posts
    // posts will store all the posts
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null)//null coz we don't know how may pages will be there
    
   async function fetchBlogPosts(page=1){
      //fetchBlogPosts(page=1) here by default we passed page=1
      setLoading(true);
      let url=`${baseUrl}?page=${page}`;
      console.log('printing the final url');;
      console.log(url);
      try{
          const result=await fetch(url);//api se call krr rhe hai data ko using fetch()
          // now we will have to convert data into json as we have used fetch() for api call
          const data=await result.json();
          
        console.log("Api Response= ", data);
        setPage(data.page);
        setPosts(data.posts);
        setTotalPages(data.totalPages);
      }
      catch(error)
      {
       // alert("Can't get data");
        console.log('error while fetching data');
        setPage(1);//if error comes then go to page=1
        setPosts([]);//if error comes make posts null
        setTotalPages(null);//if error comes then totalPages is unknown
      }
      setLoading(false)
    }
    function handlePageChange(page)
    {
      setPage(page);//page ke andr value set krr dega
      fetchBlogPosts(page);// and jo bhi page ke andr value set hua hai oos page ke liye fetchBlogPosts() call hoga  and oos 
      //particular page ka data aa jayega

    }
    const value={
        // value is an object which have all the required data
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
        // abb koi bhi component inn sbhi value ko consume krr skta hai
    };

  return(
    <div>
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    </div>
  )
}
export default AppContextProvider;