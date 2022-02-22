
import * as React from "react"
import { useRef } from "react"

const VarianteColore = ({ varianti, idVariante, setIdVariante }) => {


    return (
        <div className="wrapper-varianti">
            {varianti.map((item, index) => {
                return (
                    <label htmlFor={item.id} >
                    
                        <input type="radio"
                        name="varianti" 
                        id={item.id}  
                      
                        onChange={()=>setIdVariante(index)} 
                        value={index} />
                        <span className="checkmark"></span>
                    </label>
                )

            })}


        </div>
    )
}
export default VarianteColore