import {useEffect, useState} from 'react';
import Header from "@/pages/components/header.jsx";
import Chat from "@/pages/components/chat.jsx";

const Layout = ({children}) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/users');
            const result = await response.json();
            setUser(result.data);
        };

        fetchData()
    }, [])

    return (
        <section>
            <Header></Header>
            <main id="layout" className="main">
                <Chat></Chat>
                {children}
            </main>
        </section>
    )
};

export default Layout;
