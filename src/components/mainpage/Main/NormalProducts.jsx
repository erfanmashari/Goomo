import NormalProduct from './NormalProduct'

const NormalProducts = ({ sideName, childComponent }) => {
    return (
        <div className="w-full flex flex-col bg-white rounded-sm gap-4 p-4">
            <h1 className="w-max text-2xl font-bold border-b-8 border-red-500 p-3">{sideName}</h1>
            <div className="w-full flex flex-row gap-4">
                <NormalProduct childComponent={childComponent} index="0"  />
                <NormalProduct childComponent={childComponent} index="1"  />
                <NormalProduct childComponent={childComponent} index="2"  />
                <NormalProduct childComponent={childComponent} index="3"  />
            </div>
        </div>
    )
}

export default NormalProducts
