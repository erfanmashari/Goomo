import { Link } from "react-router-dom"
import NavOption from "./NavOption"
import { FiSearch, FiShoppingCart } from "react-icons/fi"

const NavHeader = () => {
    return (
        <>
            <div className="w-full hidden sm:flex flex-row gap-6">
                <NavOption iconName="menu" optionName="فهرست کالاها" />
                <NavOption iconName="hot" optionName="پشنهادات داغ" />
                <NavOption iconName="layer" optionName="بلاگمو" />
                <NavOption iconName="gift" optionName="هدایا" />
            </div>
            <div className="w-full flex sm:hidden flex-row justify-between gap-6">
                <Link to="/login">
                    <button className="w-32 h-10 flex justify-center items-center text text-lg font-bold border border-black rounded-xl">
                        <p>پنل کاربری</p>
                    </button>
                </Link>
                <div className="h-8 flex flex-row-reverse justify-center items-center gap-6 text-2xl">
                    <button><FiSearch /></button>
                    <Link to="/cart"><button className="mt-3"><FiShoppingCart /></button></Link>
                </div>
            </div>
        </>
    )
}

export default NavHeader
