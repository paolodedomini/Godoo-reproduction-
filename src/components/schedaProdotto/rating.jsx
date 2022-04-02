import React from 'react'
import { useState } from 'react';
import { BsFillStarFill, BsStar } from 'react-icons/bs';

function Rating() {

    const [rate, setRate] = useState(3)

    function stars(numeroStelle) {
        const arr = []
        for (let i = 0; i < numeroStelle; i++) {
            arr.push('x')
        }

        return arr
    }


    return (

        <div className="rating">
            <div className="star-rating">

                <div className="wrap-stars">
                    <div className='box-rating-star'>
                        {
                            stars(5).map((item, index) => {
                                return (index > rate) ?
                                    <BsStar onClick={() => { setRate(index) }} /> :
                                    <BsFillStarFill onClick={() => { setRate(index) }} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating