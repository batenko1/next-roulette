import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from '../lang/ru.json'

const resources = {
    ru: {
        translation: ru,
    },
    // Добавьте другие языки, как необходимо
};


i18n.use(initReactI18next).init({
    resources,
    lang: 'ru', // язык по умолчанию
    interpolation: {
        escapeValue: false, // не обязательно, но рекомендуется
    },
});

export default i18n;
