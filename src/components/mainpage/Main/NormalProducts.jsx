import NormalProduct from './NormalProduct'

const NormalProducts = ({ sideName, childComponent }) => {
    return (
        <div className="w-full flex flex-col bg-white rounded-sm gap-4 p-4">
            <h1 className="w-max text-lg sm:text-2xl font-bold border-b-4 sm:border-b-8 border-red-500 p-3">{sideName}</h1>
            <div className="w-full flex flex-row gap-4">
                <div className="w-max sm:w-6/12 flex flex-row gap-4">
                    <NormalProduct childComponent={childComponent} index="0"  />
                    <NormalProduct childComponent={childComponent} index="1"  />
                </div>
                <div className="w-max sm:w-6/12 hidden sm:flex flex-row gap-4">
                    <NormalProduct childComponent={childComponent} index="2"  />
                    <NormalProduct childComponent={childComponent} index="3"  />
                </div>
            </div>
        </div>
    )
}

export default NormalProducts
