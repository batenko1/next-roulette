const Help = () => {
    return (
        <div className="help">
            <p className="help__title">Помощь</p>
            <a className="help__link" data-izimodal-open="#helpModal" data-izimodal-transitionin="fadeInDown">
                <i className="ic-rules"></i>
                Правила игры
            </a>
        </div>
    )
}

export default Help