import GoomoFeature from './GoomoFeature'

const GoomoFeatures = () => {
    return (
        <div className="w-full flex flex-row justify-between">
            <GoomoFeature imageSource="./img/pay.png" feature="پرداخت درب منزل" />
            <GoomoFeature imageSource="./img/support.png" feature="پشتیبانی تمام وقت" />
            <GoomoFeature imageSource="./img/original.png" feature="ضمانت اصل بودن کالا" />
        </div>
    )
}

export default GoomoFeatures
