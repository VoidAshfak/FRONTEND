import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authSlice"


const store = configureStore({
    reducer: {      // Add reducers here
        auth: authReducer
    }, 
})


export default store