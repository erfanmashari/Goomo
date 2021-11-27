import MostSellProduct from './MostSellProduct'

const MostSellProducts = () => {
    return (
        <div className="w-full flex flex-col sm:flex-row bg-blue-500 gap-6 px-8 sm:px-16 py-8">
            <h1 className="w-full sm:w-3/12 text-white font-bold text-3xl sm:text-6xl leading-snug">محصولات پرفروش</h1>
            <div className="w-9/12 flex flex-col sm:flex-row sm:justify-start gap-6">
                <div className="w-full sm:w-4/12 flex justify-center">
                    <MostSellProduct imageSource="./img/poco x3 pro.jpg" 
                    product="گوشی شیائومی POCO X3 Pro" price="7,000,000" />
                </div>
                <div className="w-max sm:w-8/12 hidden sm:flex flex-row gap-6">
                    <div className="w-6/12">
                    <MostSellProduct imageSource="./img/handsfree.jpg" 
                    product="هندزفری بلوتوثی" price="30,000" />
                    </div>
                    <div className="w-6/12">
                    <MostSellProduct imageSource="./img/modem.jpg" 
                    product="مودم وایرلس" price="1,300,000" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostSellProducts
