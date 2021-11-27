import Brand from './Brand'

const Brands = () => {
    return (
        <div className="w-full flex flex-col gap-10 px-8 sm:px-16 py-8">
            <h1 className="text-2xl sm:text-4xl font-black">پرفروش ترین برند ها</h1>
            <div className="w-full flex flex-row justify-between gap-28 px-6 pb-6">
                <div className="w-full sm:w-2/5 flex flex-row justify-between">
                    <Brand imageSource="./img/xiaomi.png" alt="xiaomi" />
                    <Brand imageSource="./img/samsung.png" alt="samsung" />
                </div>
                <div className="w-3/5 hidden sm:flex flex-row justify-between">
                    <Brand imageSource="./img/asus.png" alt="asus" />
                    <Brand imageSource="./img/lg.png" alt="lg" />
                    <Brand imageSource="./img/apple.png" alt="apple" />
                </div>
            </div>
        </div>
    )
}

export default Brands
