import AmazingSuggest from './AmazingSuggest'

const AmazingSuggests = () => {
    return (
        <div className="w-full flex flex-col gap-8 bg-yellow-400 px-8 sm:px-16 py-8">
            <h1 className="text-2xl sm:text-4xl font-black text-white">پیشنهادات شگفت انگیز</h1>
            <div className="w-full flex flex-row gap-6">
                <div className="w-max sm:w-6/12 flex flex-row gap-6">
                    <AmazingSuggest imageSource="./img/Shoe Real.jpg" productName="کفش چرمی" />
                    <AmazingSuggest imageSource="./img/Sunglass.jpg" productName="عینک آفتابی" />
                </div>
                <div className="w-max sm:w-6/12 hidden sm:flex flex-row gap-6">
                    <AmazingSuggest imageSource="./img/SSD.jpg" productName="هارد SSD" />
                    <AmazingSuggest imageSource="./img/MU110 shoe.jpg" productName="کفش پیاده روی" />
                </div>
            </div>
        </div>
    )
}

export default AmazingSuggests
