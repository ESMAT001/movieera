import React from 'react'
import Media from '../Media'
function Recommendations({ recommendations, error }) {
    return (
        <div className="mt-8">
            <Media
                movies={recommendations}
                error={error}
                movieType="Recommendations:"
            />
        </div>
    )
}

Recommendations.defaultProps = {
    recommendations: [],
    error: false
}


export default Recommendations
