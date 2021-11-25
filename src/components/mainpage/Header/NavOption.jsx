import { useState, useEffect } from 'react'
import { BsGift } from 'react-icons/bs'
import { IoMenuOutline } from 'react-icons/io5'
import { FiCoffee, FiLayers } from 'react-icons/fi'

const NavOption = ({ iconName, optionName }) => {
    const [icon, setIcon] = useState("")
    useEffect(() => {
        switch (iconName) {
            case "menu":
                setIcon(<IoMenuOutline className="text-2xl" />)
                break;
            case "hot":
                setIcon(<FiCoffee className="text-2xl" />)
                break;
            case "layer":
                setIcon(<FiLayers className="text-2xl" />)
                break;
            case "gift":
                setIcon(<BsGift className="text-2xl" />)
                break;
            default:
                 setIcon("")
                break;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <button className="flex flex-row justify-center items-center gap-1">
            {icon}
            <h1 className="text-xl">{optionName}</h1>
        </button>
    )
}

export default NavOption
