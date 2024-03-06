import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
function App() {
  const {fetchBlogPosts}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();

  }, [])

  return (
    <div>
   <Header/>
   <div className="my-[100px]">
   <Blogs/>
    <Pagination/>
   </div>
  
    </div>
  );
}

export default App;
