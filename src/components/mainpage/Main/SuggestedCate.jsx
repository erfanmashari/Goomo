const SuggestedCate = ({ imageName, categoryName }) => {
    return (
        <div className="w-2/12 h-52 flex flex-col items-center text-center bg-gray-300 cursor-pointer rounded-3xl px-8 pt-3">
            <img src={imageName} alt="food" />
            <p className="text-2xl font-bold mt-4">{categoryName}</p>
        </div>
    )
}

export default SuggestedCate
