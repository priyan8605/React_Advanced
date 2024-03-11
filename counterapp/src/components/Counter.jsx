import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { decrement, increment } from "../redux/slices/CounterSlice";
export default function Counter()
{
    // useSelector() hook is used to access data from a slice
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
    // for calling case reducers i.e increment and decrement function we use useDispatch() hook
    return(
        <div>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <br/>
            <br/>
            <div>{count}</div>
            <br/>
            <br/>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}
