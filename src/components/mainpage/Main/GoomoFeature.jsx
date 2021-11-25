import React from 'react'

const GoomoFeature = ({ imageSource, feature }) => {
    return (
        <div className="w-3/12 flex flex-col items-center gap-4 p-4">
            <img src={imageSource} alt="" className="feature-image w-32" />
            <h1 className="text-2xl text-gray-900 font-bold">{feature}</h1>
        </div>
    )
}

export default GoomoFeature
