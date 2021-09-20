import React from 'react'
import Main from '../mainPageComponents/Main'
function Recommendations({ recommendations, error }) {
    return (
        <div className="mt-8">
            <Main
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
