import React  , { useContext }  from "react";
import { AppContext } from "../context/AppContext";
import Spinner from './Spinner'

export default function Blogs()
{
   // jbb hum next prr click krenge to jbb tkk data nhi aayega tbb tk loading show hoga UI prr
   // "loading" has been defined in AppContext.js
   // now Blogs component will consume "loading"
   const {posts,loading} =useContext(AppContext);//syntax for consuming the context of loading,posts
   return(
       <div className="flex flex-col gap-y-10 my-4">
           { loading ? (<Spinner/>): 
         ( posts.length === 0 ? (
          <div className="min-h-[80vh] w-full flex justify-center items-center">
              <p className="text-center font-bold text-3xl">No Posts found</p>
          </div>
          ):
      (
          // agr posts ka length 0 nhi hai to hrr ekk post ke liye card bna denge using map()
          posts.map((post)=>(
              <div key={post.id} className="w-11/12 max-w-2xl mx-auto">
                  {/* we have to define key for map() */}
                  <p className="font-bold text-lg">{post.title}</p>
                  <p className="text-orange-300 text-xl">
                      By <span className="italic">{post.author}</span> on {" "}
                       <span className="font-semibold underline cursor-pointer">{post.category}</span>
                  </p>
                  <p className="text-sm">Posted on {post.date}</p>
                  <p className="mt-4 mb-2">{post.content}</p>
                  <div className="flex flex-wrap gap-x-2 items-center">
                      {/* tags is an array inside "posts array"
                      hence "tags" array ke hrr ek index ko fetch krke # lgayenge using map() on tags array */} 
                      {post.tags.map((tag,index)=> {
                          return <span key={index}
                          className="text-xs font-semibold underline text-blue-700 cursor-pointer">
                            {`#${tag}`}
                            </span> 
                          // abb "tags" array pr map() use krr rhe hai but "tags" me koi "id" nhi hai 
                          // so key define krne ke liye we will pass "index" in parameter inside map(index) and will
                          // use that index in key <span key={index}/>
                                               }
                                      )
                      }
                  </div>
              </div>
          ))
      ))
                
           }
       </div>
   )
}

// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// export default function Blogs() {
//   const { posts, loading } = useContext(AppContext);

//   return (
//     <div className="flex flex-col gap-y-10 my-4">
//       {loading ? (
//         <div className="min-h-[80vh] w-full flex justify-center items-center">
//           <p className="text-center font-bold text-3xl">Loading</p>
//         </div>
//       ) :( posts.length ===0? (
//         <div className="min-h-[80vh] w-full flex justify-center items-center">
//           <p className="text-center font-bold text-3xl">No Blogs Found !</p>
//         </div>
//       ) : (
//         posts.map((post) => (
//           <div key={post.id} className="w-11/12 max-w-2xl mx-auto">
//             <p className="font-bold text-lg">{post.title}</p>
//             <p className="text-sm my-1">
//               By <span className="italic">{post.author}</span> on{" "}
//               <span className="font-semibold underline cursor-pointer">{post.category}</span>
//             </p>
//             <p className="text-sm">Posted On {post.date}</p>
//             <p className="mt-4 mb-2">{post.content}</p>
//             <div className="flex flex-wrap gap-x-2 items-center">
//               {post.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="text-xs font-semibold underline text-blue-700 cursor-pointer">{`#${tag}`}</span>
//               ))}
//             </div>
//           </div>
//         ))
//       ))}
//     </div>
//   );
// }
