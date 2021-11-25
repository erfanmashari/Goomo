import SuggestedCate from './SuggestedCate'

const SuggestedCategory = () => {
    return (
        <div dir="rtl" className="w-full flex-col flex px-16 py-8 gap-y-8">
            <h1 className="text-2xl font-black">دسته بندی پیشنهادی برای شما</h1>
            <div className="w-full flex flex-row gap-6">
                <SuggestedCate imageName="./img/diet.png" categoryName="خوراکی" />
                <SuggestedCate imageName="./img/shoes.png" categoryName="کفش" />
                <SuggestedCate imageName="./img/clothes.png" categoryName="لباس" />
                <SuggestedCate imageName="./img/vehicle.png" categoryName="خودرو" />
                <SuggestedCate imageName="./img/smart-watch.png" categoryName="ساعت هوشمند" />
                <SuggestedCate imageName="./img/laptop-screen.png" categoryName="لپ تاپ" />
            </div>
        </div>
    )
}

export default SuggestedCategory
