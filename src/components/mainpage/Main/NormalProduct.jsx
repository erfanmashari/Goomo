import React from 'react'

const NormalProduct = ({ childComponent, index }) => {
    const source = childComponent[index]
    return (
        <div className="w-6/12 sm:w-6/12 h-72 sm:h-96 flex flex-col gap-3 px-3 pb-3 cursor-pointer">
            <img src={source.imageSource} alt="asus-laptop"
            className="w-10/12 h-32 sm:h-48 block mx-auto" />
            <div className="h-36 flex flex-col justify-between">
                <h1 className="text-xl">{source.product}</h1>
                <p className="w-full text-left text-md sm:text-lg">{source.price} تومان</p>
            </div>
        </div>
    )
}

export default NormalProduct
