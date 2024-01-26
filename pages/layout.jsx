import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Header from "@/pages/components/header.jsx";
import WrapperChat from "@/pages/components/chat/wrapperChat";
import {selectThemeCss} from "@/state/settingSlice.js";
import {setupSocketListeners} from "@/utils/sockets.js";
import {setUser} from "@/state/userSlice.js";

import WrapperPopup from "@/pages/components/popups/wrapperPopup.jsx";


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
                        setUser(data)
                    }
                }).catch(() => {
                    console.log('here')
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