import {useDispatch} from "react-redux";
import {setUser} from "@/state/userSlice.js";
import {setPopup} from "@/state/popupSlice.js";
export const useReplenish = () => {

    const dispatch = useDispatch()

    const replenishBalance = async (count, user, type) => {
        await fetch('/api/replenish', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({count, user, type}),
        }).then(response => {
            return response.json()
        }).then(data => {
            dispatch(setUser({...user, balance: data.balance}))
            dispatch(setPopup(null))
        })
    }

    return {replenishBalance}
}

