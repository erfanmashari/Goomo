import FooterHeader from './FooterHeader'
import FooterTable from './FooterTable'
import GoomoFeatures from "./GoomoFeatures"
import FooterBottom from './FooterBottom'

const Footer = () => {
    return (
        <div className="w-full flex flex-col bg-dark text-white gap-6 px-8 sm:px-16 py-8">
            <FooterHeader />
            <FooterTable />
            <GoomoFeatures />
            <FooterBottom />
        </div>
    )
}

export default Footer
