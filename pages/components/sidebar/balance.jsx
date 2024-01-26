const Balance = () => {
    return (
        <div className="balance">
            <p className="balance__title">Баланс:</p>
            <p className="balance__value">0<span>COINS</span></p>
            <div className="balance__action">
                <a className="button balance__input"
                   data-izimodal-open="#inputModal"
                   data-izimodal-transitionin="fadeInDown">ПОПОЛНИТЬ</a>

                <a className="button button--gray balance__output"
                   data-izimodal-open="#outputModal"
                   data-izimodal-transitionin="fadeInDown">ВЫВЕСТИ</a>
            </div>
        </div>
    )
}

export default Balance