import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from '../state/store';
import { setTheme } from '../state/settingSlice';

const withRedux = (WrappedComponent) => {
    const WithRedux = (props) => {
        const [isInitialized, setIsInitialized] = useState(false);

        useEffect(() => {
            const initializeTheme = async () => {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme) {
                    await store.dispatch(setTheme(savedTheme));
                }
                setIsInitialized(true);
            };

            initializeTheme();
        }, []);

        // // Пока инициализация не завершена, вы можете показать заглушку или что-то еще
        // if (!isInitialized) {
        //     return '';
        // }

        return (
            <Provider store={store}>
                <WrappedComponent {...props} />
            </Provider>
        );
    };

    return WithRedux;
};

export default withRedux;