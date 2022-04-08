import * as React from "react"
const InputQuantita = ({ quantita, setQuantita }) => {

    function add() {
        setQuantita((prevQuantita)=>prevQuantita + 1)
    }

    function sub() {
        if (quantita == 0) {
            setQuantita(0)
        } else {
            setQuantita((prevQuantita)=>prevQuantita - 1)
        }
    }
    return (
        <div className="add-to-cart">
            <button onClick={() => sub()}>-</button>
            <input className={`${quantita === 0 ? 'disabled' : ''}`} type="number" name="qta" id="qta" defaultValue="0" value={quantita} readOnly />
            <button onClick={() => add()}>+</button>
        </div>
    )

}

export default InputQuantita