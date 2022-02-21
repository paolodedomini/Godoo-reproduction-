
import * as React from "react"


const VarianteColore = ()=>{
    return(
        <div className="wrapper-varianti">
        <label htmlFor="variante1">
            <input type="radio" name="varianti" id="variante1" />
            <span className="checkmark"></span>
        </label>
        <label htmlFor="variante2">
            <input type="radio" name="varianti" id="variante2" />
            <span className="checkmark"></span>
        </label>
    </div>
    )
}
export default VarianteColore