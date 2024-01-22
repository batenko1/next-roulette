import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Header from "@/pages/components/header.jsx";
import WrapperChat from "@/pages/components/chat/wrapperChat";
import {selectThemeCss} from "@/state/settingSlice.js";
import {setupSocketListeners} from "@/utils/sockets.js";


const Layout = ({children}) => {

    const dispatch = useDispatch()

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
        dispatch(setupSocketListeners())
    }, [dispatch]);

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