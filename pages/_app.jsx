import {Provider} from "react-redux";
import {I18nextProvider} from "react-i18next";
import i18n from "../utils/i18n";
import {config} from 'dotenv';

config();

import store from "../state/store";
import Layout from "./layout.jsx";

function RootLayout({Component, pageProps}) {


    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </I18nextProvider>
        </Provider>
    )
}

export default RootLayout