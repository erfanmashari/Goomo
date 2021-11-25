import MostSellProduct from './MostSellProduct'

const MostSellProducts = () => {
    return (
        <div className="w-full h-96 flex flex-row bg-blue-500 gap-6 px-16 py-8">
            <h1 className="w-3/12 text-white font-bold text-6xl leading-snug">محصولات <br/>پرفروش</h1>
            <MostSellProduct imageSource="./img/poco x3 pro.jpg" 
            product="گوشی شیائومی POCO X3 Pro" price="7,000,000" />
            <MostSellProduct imageSource="./img/handsfree.jpg" 
            product="هندزفری بلوتوثی" price="30,000" />
            <MostSellProduct imageSource="./img/modem.jpg" 
            product="مودم وایرلس" price="1,300,000" />
        </div>
    )
}

export default MostSellProducts
