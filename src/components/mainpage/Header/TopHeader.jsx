import { Link } from 'react-router-dom'
import { FiSearch, FiShoppingCart } from "react-icons/fi"
import { IoMenuOutline } from 'react-icons/io5'

const TopHeader = () => {
    return (
        <div className="w-full flex flex-row-reverse justify-between items-start sm:items-end">
            <div className="flex flex-row-reverse items-end gap-4">
                <Link to="/">
                    <div className="text-5xl font-bold coursor-pointer">
                        <span className="text-yellow-500">goo</span>
                        <span className="text-blue-600">mo</span>
                    </div>
                </Link>
                <Link to="/login">
                    <button className="w-32 h-10 hidden sm:flex justify-center items-center text text-lg font-bold border border-black rounded-xl">
                        <p>پنل کاربری</p>
                    </button>
                </Link>
            </div>
            <div className="flex flex-row-reverse gap-6 text-3xl">
                <button className="hidden sm:flex"><FiSearch /></button>
                <Link to="/cart">
                    <button className="hidden sm:flex"><FiShoppingCart /></button>
                </Link>
                <button className="flex sm:hidden"><IoMenuOutline /></button>
            </div>
        </div>
    )
}

export default TopHeader
