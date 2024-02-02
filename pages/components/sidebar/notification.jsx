import {useState, useEffect} from "react";

const Notification = () => {

    const [notification, setNotification] = useState(false)


    useEffect(() => {
        setNotification(!!localStorage.getItem('notification'))
    }, [])

    const handleChangeNotification = (value) => {

        console.log(value, 'vlad')
        if(value) {
            localStorage.setItem('notification', 1)
            setNotification(true)
        }
        else {
            localStorage.removeItem('notification')
            setNotification(false)
        }

    }

    return (
        <div className="notification">
            <p className="notification__title">Звуковые уведомления</p>
            <form className="notification__form">
                <label className="notification__radio">
                    <input type="radio"
                           id="isMusicTrue"
                           checked={notification}
                           onChange={(e) => handleChangeNotification(true)}
                           name="sound"/>

                    <span className="notification__check"></span>
                    <span className="notification__name">Включить</span>
                </label>
                <label className="notification__radio">
                    <input type="radio" id="isMusicFalse" onChange={(e) => handleChangeNotification(false)}
                           checked={!notification} name="sound"/>
                    <span className="notification__check"></span>
                    <span className="notification__name">Выключить</span>
                </label>
            </form>
        </div>
    )
}

export default Notification