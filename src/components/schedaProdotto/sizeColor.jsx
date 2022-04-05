import React, { useState, useEffect } from 'react'


function SizeColor({ taglie, colori, arrayAttributiFiltrati }) {

    const arrayColori = arrayAttributiFiltrati.filter((item) => item.attributeName === 'Color')

    const [ElementoSize, setElementoSize] = useState('36')
    const [ElementoColore, setElementoColore] = useState('')
    const [tooltip, setTooltip] = useState(null)

    useEffect(() => {
        arrayColori.length > 0 && setElementoColore(arrayColori[0].htmlColor)
    })

    return (
        <div className="size-color">
            {arrayAttributiFiltrati.filter((item) => item.name === 'One Size').length === 0 &&
                <>
                    <span>Taglia</span>
                    <ul className='size'>
                        {arrayAttributiFiltrati.map((item) => {
                            return (item.attributeName === 'Size') && (
                                <li
                                    className={`${(ElementoSize === item.name) ? 'selected' : ''}`}
                                    onClick={() => setElementoSize(item.name)}>{item.name}</li>)
                                }
                            )
                        }
                    </ul>
                </>
            }
            {arrayColori.length !== 0 &&
                <>
                    <span>Colore</span>
                    <ul className='color'>
                        {arrayColori.map((item, index) => (
                            <li style={{ backgroundColor: `${item.htmlColor}` }}
                                className={`${(ElementoColore === item.htmlColor) ? 'selected' : ''}`}
                                onClick={() => setElementoColore(item.htmlColor)}
                                onMouseOver={() => setTooltip(item.name)}
                                onMouseLeave={() => setTooltip('')}
                            >
                                <div className={`colore-tooltip ${item.name === tooltip && 'open'}`}>
                                    {item.name}
                                </div>
                            </li>))
                        }
                    </ul>
                </>}
        </div>
    )
}

export default SizeColor