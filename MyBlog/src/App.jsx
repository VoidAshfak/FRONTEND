import { useEffect, useState } from "react"
import {useDispatch} from "react-redux"
import authService from "./appwriteServices/auth"
import {login, logout} from "./store/authSlice"

function App() {

    const [loading, setLoading]= useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        authService.currentUser()
        .then(userData => {
            if(userData) {
                dispatch(login(userData))
            } else {
                dispatch(logout())
            }
        })
        .finally(() => setLoading(false))
    }, [])


    return !loading ? (
        <>
            <h1>Not Loading</h1>
        </>
    ) : (
        <>
            <h1>Loadng...</h1>
        </>
    )
}

export default App
