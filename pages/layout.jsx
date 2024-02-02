import {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Header from "@/components/header.jsx";
import WrapperChat from "@/components/chat/wrapperChat";
import {selectThemeCss} from "@/state/settingSlice.js";
import {setupSocketListeners} from "@/utils/sockets.js";
import {setUser} from "@/state/userSlice.js";

import WrapperPopup from "@/components/popups/wrapperPopup.jsx";


const Layout = ({children}) => {

    const dispatch = useDispatch()

    const themeCss = useSelector(selectThemeCss)

    useEffect(() => {

        const token = localStorage.getItem('token')
        const fetchData = async () => {
            await fetch('/api/user', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }).then(response => response.json())
                .then(data => {
                    if(!data.message) {
                        dispatch(setUser(data))
                    }
                }).catch(() => {

                })
        }

        fetchData()
    }, [])

    useEffect(() => {
        dispatch(setupSocketListeners())
    }, [dispatch]);

    return (
        <section>
            <link rel="stylesheet" type="text/css" href={themeCss}/>
            <Header/>
            <main id="layout" className="main">
                <WrapperChat/>
                {children}
            </main>
            <WrapperPopup/>
        </section>
    )
};

export default Layout;