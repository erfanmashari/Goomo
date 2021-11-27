import TopHeader from './TopHeader'
import NavHeader from './NavHeader'

const Header = () => {
    return (
        <header className="w-full flex flex-col gap-y-6 border-b border-black px-8 sm:px-16 pb-6">
            <TopHeader />
            <NavHeader />
        </header>
    )
}

export default Header
