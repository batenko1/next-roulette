import {useSelector, useDispatch} from "react-redux";
import {selectTheme, setTheme} from "@/state/settingSlice.js";
import {useEffect} from "react";


const useTheme = () => {

    const theme = useSelector(selectTheme)

    const dispatch = useDispatch()

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';

        dispatch(setTheme(newTheme))
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            dispatch(setTheme(savedTheme))
        }
    }, [dispatch]);


    return { theme, toggleTheme };
};

export default useTheme;
