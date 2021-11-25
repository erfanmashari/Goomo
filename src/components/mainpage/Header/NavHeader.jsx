import NavOption from "./NavOption"

const NavHeader = () => {
    return (
        <div className="w-full flex flex-row gap-6">
            <NavOption iconName="menu" optionName="فهرست کالاها" />
            <NavOption iconName="hot" optionName="پشنهادات داغ" />
            <NavOption iconName="layer" optionName="بلاگمو" />
            <NavOption iconName="gift" optionName="هدایا" />
        </div>
    )
}

export default NavHeader
