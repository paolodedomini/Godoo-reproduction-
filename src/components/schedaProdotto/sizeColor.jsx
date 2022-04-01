import React, { useState } from 'react'


function SizeColor({ taglie, colori, arrayAttributiFiltrati }) {

    const [ElementoSize, setElementoSize] = useState(null)
    const [ElementoColore, setElementoColore] = useState(null)

    console.log(arrayAttributiFiltrati);

    return (
        <div className="size-color">
            <span>Taglia</span>
            {<ul className='size'>
                {arrayAttributiFiltrati.map((item) => {

                    return item.nomeAttributo === 'Size' && (<li className={`${(ElementoSize === item.name) ? 'selected' : ''}`} onClick={() => setElementoSize(item.name)}>{item.name}</li>)
                }

                )
                }
            </ul>}

            {colori &&
                <><span>Colore</span>
                    <ul className='color'>
                        {colori.map((item, index) => (
                            <li style={{ backgroundColor: `${item}` }} className={`${(ElementoColore === item) ? 'selected' : ''}`} onClick={() => setElementoColore(item)}></li>))
                        }
                    </ul></>}
        </div>
    )
}

export default SizeColor