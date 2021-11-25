import { WiTime5 } from 'react-icons/wi'

const AmazingSuggest = ({ imageSource, productName }) => {
    return (
        <div className="w-3/12 flex flex-col bg-white rounded-lg p-6 cursor-pointer">
            <img src={imageSource} alt="" className="h-48 block mx-auto" />
            <div className="w-full h-16">
                <h1 className="text-xl">{productName}</h1>
            </div>
            <div className="w-full flex flex-row items-center text-red-600 gap-3 mb-2">
                <p className="text-xl font-bold line-through">100,000</p>
                <p className="text-lg text-white font-bold bg-blue-800 px-3 py-0.5 rounded-3xl">50%</p>
            </div>
            <div className="w-full flex flex-row justify-between items-end">
                <p className="text-xl font-bold">50,000 تومان</p>
                <div className="flex flex-row items-center text-md font-bold">
                    <p>02:00:00</p>
                    <WiTime5 className="text-lg" />
                </div>
            </div>
        </div>
    )
}

export default AmazingSuggest
