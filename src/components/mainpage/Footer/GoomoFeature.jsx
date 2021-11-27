import React from 'react'

const GoomoFeature = ({ imageSource, feature }) => {
    return (
        <div className="w-4/12 sm:w-3/12 flex flex-col items-center gap-4 p-4">
            <img src={imageSource} alt="" className="feature-image w-48 sm:w-24" />
            <h1 className="text-lg sm:text-2xl font-bold text-center">{feature}</h1>
        </div>
    )
}

export default GoomoFeature
