
import * as React from "react"
import { useState } from "react";

const VarianteColore = ({ varianti }) => {



    return (
        <div className="wrapper-varianti">
            {varianti.map((item) => {
                return (
                    <label htmlFor={item.id}>
                        <input type="radio" name="varianti" id={item.id} />
                        <span className="checkmark"></span>
                    </label>
                )

            })}


        </div>
    )
}
export default VarianteColore