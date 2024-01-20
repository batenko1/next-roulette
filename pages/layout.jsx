import {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import io from 'socket.io-client';
import Header from "@/pages/components/header.jsx";
import WrapperChat from "@/pages/components/chat/wrapperChat";
import {selectThemeCss} from "@/state/settingSlice.js";


const Layout = ({children}) => {


    const [user, setUser] = useState(null)

    const themeCss = useSelector(selectThemeCss)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/users');
            const result = await response.json();
            setUser(result.data);
        };

        fetchData()
    }, [])

    useEffect(() => {
        const socket = io('http://localhost:3000');

        // Handle events, e.g., socket.on('message', (data) => { ... });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <section>
            <link rel="stylesheet" type="text/css" href={themeCss} />
            <Header></Header>
            <main id="layout" className="main">
                <WrapperChat></WrapperChat>
                {children}
            </main>
        </section>
    )
};

export default Layout;