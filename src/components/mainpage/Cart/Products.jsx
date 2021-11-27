import React from 'react'

const Products = () => {
    return (
        <div className="w-full sm:w-9/12 h-96 flex flex-col justify-center items-center p-4 border-b sm:border-b-0 border-l-0 sm:border-l border-black gap-4">
            <img src="./img/basket.png" alt="سبد خالی"
            className="w-40" />
            <h1 className="text-2xl font-extrabold">سبد خرید شما خالی است!</h1>
            <button className="text-pink-400">بازگشت به صفحه محصولات</button>
        </div>
    )
}

export default Products
