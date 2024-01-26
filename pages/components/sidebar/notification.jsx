const Notification = () => {
    return (
        <div className="notification">
            <p className="notification__title">Звуковые уведомления</p>
            <form className="notification__form">
                <label className="notification__radio">
                    <input type="radio" id="isMusic" name="sound"/>
                    <span className="notification__check"></span>
                    <span className="notification__name">Включить</span>
                </label>
                <label className="notification__radio">
                    <input type="radio" id="isMusic" name="sound"/>
                    <span className="notification__check"></span>
                    <span className="notification__name">Выключить</span>
                </label>
            </form>
        </div>
    )
}

export default Notification