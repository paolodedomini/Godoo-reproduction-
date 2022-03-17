import * as React from "react"
const InputQuantita = ({ quantita, setQuantita }) => {

    function add(qta) {
        setQuantita(quantita + qta)
    }

    function sub(qta) {
        if (quantita == 0) {
            setQuantita(0)
        } else {
            setQuantita(quantita - qta)
        }
    }
    return (
        <div className="add-to-cart">
            <span onClick={() => sub(1)}>-</span>
            <input className={`${quantita === 0 ? 'disabled' : ''}`} type="number" name="qta" id="qta" defaultValue="0" value={quantita} readOnly />
            <span onClick={() => add(1)}>+</span>
        </div>
    )

}

export default InputQuantita