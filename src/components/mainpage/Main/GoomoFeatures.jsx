import GoomoFeature from './GoomoFeature'

const GoomoFeatures = () => {
    return (
        <div className="w-full h-64 flex flex-row justify-center gap-12 bg-gray-300 px-16 py-8">
            <GoomoFeature imageSource="./img/pay.png" feature="پرداخت درب منزل" />
            <GoomoFeature imageSource="./img/support.png" feature="پشتیبانی تمام وقت" />
            <GoomoFeature imageSource="./img/original.png" feature="ضمانت اصل بودن کالا" />
        </div>
    )
}

export default GoomoFeatures
