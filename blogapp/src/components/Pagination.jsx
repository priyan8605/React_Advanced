import React, { useContext }  from "react";
import { AppContext } from "../context/AppContext";
 export default function Pagination()
 {
    const {page,handlePageChange,totalPages}=useContext(AppContext)
    return(
        <div className="fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300">
           <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
            {
                // agr 1st page hai to oosme "previous" ka button nhi aayega 
                // page hum log AppContext se le krr aayenge
                //when page >1 hai tbhi previous button show kroge
                page >1 &&
                (<button onClick={()=>handlePageChange(page-1)}
                className="border-2 border-gray-300 py-1 px-4 rounded-md"
                >
                   Previous
                </button>)
            }
            {
                // last page hai to "Next" button nhi aayega
                //agr current page totalPages se chhota hai then only show "Next" button
                page < totalPages &&
                (<button onClick={()=>handlePageChange(page+1)}
                className="border-2 border-gray-300 py-1 px-4 rounded-md">
                    Next
                </button>
                ) 
            }
            <p className="text-sm font-semibold ml-auto">
                Page {page} of {totalPages};
            </p>
           </div>
        </div>
    )
 }