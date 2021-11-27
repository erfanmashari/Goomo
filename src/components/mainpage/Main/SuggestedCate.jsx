const SuggestedCate = ({ imageName, categoryName }) => {
    return (
        <div className="w-28 sm:w-4/12 h-36 sm:h-52 flex flex-col items-center text-center bg-gray-300 cursor-pointer rounded-3xl px-4 sm:px-8 pt-3">
            <img src={imageName} alt="food" className="w-16 sm:w-28 h-16 sm:h-28" />
            <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">{categoryName}</p>
        </div>
    )
}

export default SuggestedCate
