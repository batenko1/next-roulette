import {useTranslation} from "react-i18next";

const Copyright = () => {

    const {t} = useTranslation()

    return (
        <div className="copyright">
            <p className="copyright__text">{t('Копирование элементов дизайна с сайта без согласия запрещено!')} <br/>
                &copy;FOX-X.RU 2024</p>
        </div>
    )
}

export default Copyright