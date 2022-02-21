import * as React from "react"

const SliderQuickProducts = ({ varianti }) => {
    return <>{varianti && varianti.map((item) => {
        return (
            <div className="slide-varianti">{item.name}</div>
        )
    })}</>
}

export default SliderQuickProducts