import React from 'react'

const Brand = ({ imageSource, alt }) => {
    return (
        <div>
            <img src={imageSource} alt={alt}
            className="w-32" />
        </div>
    )
}

export default Brand
