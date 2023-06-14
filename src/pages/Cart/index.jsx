import CouponCart from "../../components/CouponCart"
import HeaderCart from "../../components/HeaderCart"
import ListCart from "../../components/ListCart"
import CartArea from "./CartArea"

const Cart = () => {
    return (
        <div className="bg-slate-600">
            <h1 className="text-xl uppercase font-bold my-4 text-center text-white">Carrinho</h1>
            <HeaderCart />
            <ListCart />
            <CouponCart />
            <CartArea />
        </div>
    )
}

export default Cart