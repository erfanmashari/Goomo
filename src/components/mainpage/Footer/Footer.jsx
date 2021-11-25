import FooterHeader from './FooterHeader'
import FooterTable from './FooterTable'
import FooterBottom from './FooterBottom'

const Footer = () => {
    return (
        <div className="w-full flex flex-col bg-dark text-white gap-6 px-16 py-8">
            <FooterHeader />
            <FooterTable />
            <FooterBottom />
        </div>
    )
}

export default Footer
