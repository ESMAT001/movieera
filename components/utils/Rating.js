import { FaStar, FaRegStar } from "react-icons/fa";

function Rating({ rating }) {
    const fillStarsCount = parseInt((rating * 5) / 10)
    let jsx = [];
    for (let index = 1; index <= 5; index++) {
        if (index <= fillStarsCount) {
            jsx.push(<FaStar key={index} color="yellow" />)
        } else {
            jsx.push(<FaRegStar key={index} />)
        }
    }
    return (
        <div className="flex space-x-1">
            {jsx}
        </div>
    )
}

export default Rating
