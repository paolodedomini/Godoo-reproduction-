import * as React from "react"
import { useState } from "react"
const InputQuantita = () => {

    const [quantita, setQuantita] = useState(1)


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
        <div className="wrapper-qta">
            <span onClick={() => sub(1)}>-</span>
            <input className={`${quantita === 0 ? 'disabled' : ''}`} type="number" name="qta" id="qta" value={quantita} />
            <span onClick={() => add(1)}>+</span>
        </div>
    )

}

export default InputQuantita