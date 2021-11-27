import Products from './Products'
import LeftSide from './LeftSide'

const Cart = () => {
    return (
        <div className="w-full flex bg-gray-200 px-8 sm:px-16 py-8">
            <div className="w-full flex flex-col sm:flex-row bg-white p-4">
                <Products />
                <LeftSide />
            </div>
        </div>
    )
}

export default Cart
