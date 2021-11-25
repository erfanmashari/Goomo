import React from 'react'

const MostSellProduct = ({ imageSource, product, price }) => {
    return (
        <div className="w-3/12 h-full flex flex-col bg-white shadow-2xl rounded-xl gap-3 p-3 cursor-pointer">
            <img src={imageSource} alt="poco-x3-pro"
            className="h-1/2 w-3/5 block mx-auto" />
            <div className="w-full h-1/2 flex flex-col justify-between bg-blue-500 rounded-lg text-white p-3">
                <h1 className="text-2xl leading-normal">{product}</h1>
                <p className="text-xl">{price} تومان</p>
            </div>
        </div>
    )
}

export default MostSellProduct
