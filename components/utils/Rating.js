import React from 'react'

function Rating({ rating }) {
    const fillStarsCount = parseInt((rating * 5) / 10)
    let jsx = [];
    for (let index = 1; index <= 5; index++) {
        if (index <= fillStarsCount) {
            jsx.push(<span class="fas fa-star text-yellow-400" key={index}></span>)
        } else {
            jsx.push(<span class="fas fa-star " key={index}></span>)
        }
    }
    return (
        <div className="flex space-x-1">
            {jsx}
        </div>
    )
}

export default Rating
