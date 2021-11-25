import NormalProducts from './NormalProducts'

const NormalProductsSide = () => {
    return (
        <div className="w-full flex flex-col gap-8 bg-gray-200 px-16 py-8">
            <NormalProducts sideName="لپ تاپ و الترابوک"
            childComponent={[{
                imageSource: "./img/asus 1.jpg", 
                price: "37,800,000",
                product: "لپ تاپ 15.6 اینچی ایسوس مدل VivoBook S533EQ - A"
            },{
                imageSource: "./img/lenovo 1.jpg", 
                price: "8,519,000",
                product: "لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 3 15IGL05 - L"
            },
            {
                imageSource: "./img/asus 2.jpg", 
                price: "9,184,000",
                product: "لپ تاپ 15 اینچی ایسوس مدل VivoBook X543MA - DM1064"
            },{
                imageSource: "./img/lenovo 2.jpg", 
                price: "9,465,000",
                product: "لپ تاپ 11 اینچی لنوو مدل IdeaPad 1 - A"
            }]} />
            <NormalProducts sideName="گوشی موبایل"
            childComponent={[{
                imageSource: "./img/poco x3 pro.jpg", 
                price: "6,849,000",
                product: "گوشی موبایل شیائومی POCO X3 Pro"
            },{
                imageSource: "./img/iphone 13.jpg", 
                price: "28,000,000",
                product: "گوشی موبایل آیفون 13"
            },
            {
                imageSource: "./img/a12.jpg", 
                price: "3,998,000",
                product: "گوشی موبایل سامسونگ A12"
            },{
                imageSource: "./img/iphone 13 promax.jpg", 
                price: "44,390,000",
                product: "گوشی موبایل آیفون 13 Pro Max"
            }]} />
            <NormalProducts sideName="کفش ورزشی مردانه"
            childComponent={[{
                imageSource: "./img/PART-ME shoe.jpg", 
                price: "126,000",
                product: "کفش ورزشی مردانه مدل PART - ME"
            },{
                imageSource: "./img/PART-SO shoe.jpg", 
                price: "134,000",
                product: "کفش ورزشی مردانه مدل PART - SO"
            },
            {
                imageSource: "./img/MU110 shoe.jpg", 
                price: "220,000",
                product: "کفش ورزشی مردانه مخصوص پیاده روی کد MU110"
            },{
                imageSource: "./img/PALERMO-WH shoe.jpg", 
                price: "152,000",
                product: "کفش ورزشی مردانه مدل PALERMO - WH"
            }]} />
        </div>
    )
}

export default NormalProductsSide
