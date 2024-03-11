
import {configureStore} from '@reduxjs/toolkit'
import CounterSlice from './slices/CounterSlice'

export const store=configureStore({
    // "configureStore" will create a global store or centralized store jaha sara data pda hoga
    reducer:{
        counter:CounterSlice,//counter ke reducer ka name hai "CounterSlice" or one slice called
        //"counter" has been defined and reducer of "counter" slice is "CounterSlice"
    },
})