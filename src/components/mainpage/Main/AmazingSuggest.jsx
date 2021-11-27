import { WiTime5 } from 'react-icons/wi'

const AmazingSuggest = ({ imageSource, productName }) => {
    return (
        <div className="w-6/12 sm:w-6/12 flex flex-col bg-white rounded-lg p-3 sm:p-6 cursor-pointer">
            <img src={imageSource} alt="" className="h-36 sm:h-48 block mx-auto" />
            <div className="w-full h-16">
                <h1 className="text-xl">{productName}</h1>
            </div>
            <div className="w-full flex flex-row items-center text-red-600 gap-3 mb-2">
                <p className="text-lg sm:text-xl font-bold line-through">100,000</p>
                <p className="tsxt-md sm:text-lg text-white font-bold bg-blue-800 px-3 py-0.5 rounded-3xl">50%</p>
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end">
                <p className="text-lg sm:text-xl font-bold">50,000 تومان</p>
                <div className="w-full flex flex-row justify-end items-center text-sm sm:text-md font-bold">
                    <p>02:00:00</p>
                    <WiTime5 className="text-lg" />
                </div>
            </div>
        </div>
    )
}

export default AmazingSuggest
