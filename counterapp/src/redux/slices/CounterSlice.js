import {createSlice} from "@reduxjs/toolkit"
const initialState={
    value:0
}
export const CounterSlice=createSlice({
    // iss function ke andr 3 cheej jayega
    name:"counter",//name of slice
    initialState,//initialState of a slice
    reducers:{
        //iske andr we will define functionality
        increment:(state)=>{
            // state ke andr jo value pda hai that will get  increment
            state.value+=1;
        },
        decrement:(state)=>{
            // state ke andr jo value pdi hai oose decrement krr dega
            state.value-=1;
        }
        // increment  and decrement is a reducer function in which functionality is defined
    }
})
export const {increment,decrement}=CounterSlice.actions;//ye ("CounterSlice") me se "increment" 
// and decrement ka implementation nikal krr layega
export default CounterSlice.reducer;//reducer for "CounterSlice" is created and exported
