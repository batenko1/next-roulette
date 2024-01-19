import {useEffect} from "react";
import store from "../state/store";
import {Provider} from "react-redux";

import Layout from "./layout.jsx";
import '../app/globals.css'

import {config} from 'dotenv';

config();
export default function RootLayout({Component, pageProps}) {

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        document.body.className = theme ? 'body--dark' : '';
    });


    return (

        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>



    )
}
