import React from 'react'
import { FiSearch, FiShoppingCart } from "react-icons/fi"

const TopHeader = () => {
    return (
        <div className="w-full flex flex-row-reverse justify-between items-end">
            <div className="flex flex-row-reverse items-end gap-4">
                <div className="text-5xl font-bold">
                    <span className="text-yellow-500">goo</span>
                    <span className="text-blue-600">mo</span>
                </div>
                <button className="w-32 h-10 flex justify-center items-center text text-lg font-bold border border-black rounded-xl">
                    <p>پنل کاربری</p>
                </button>
            </div>
            <div className="flex flex-row-reverse gap-6 text-3xl">
                <button><FiSearch /></button>
                <button><FiShoppingCart /></button>
            </div>
        </div>
    )
}

export default TopHeader
