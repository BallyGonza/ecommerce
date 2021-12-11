import { useState, createContext } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

export const CartContext = createContext([])

function CartContextProvider({ children }) {

    const [count, setCount] = useState(1)
    const [totalItemsCarrito, setTotalItemsCarrito] = useState(0)
    const [cartList, setCartList] = useState([])
    const [item, setItem] = useState({})
    const [total, setTotal] = useState(0)


    const agregarProducto = (item) => {
        if (cartList.find(itemBuscado => itemBuscado.id == item.id)) {
            console.log("El producto ya se encuentra en el carrito.")
        }
        else {
            setCartList(cartList.concat({ ...item, "cant": count }))
            setTotal(total + item.price * count)
            setTotalItemsCarrito(totalItemsCarrito + count)
            setCount(1)
        }
    }

    function addProduct() {
        setCount(count + 1)
    }

    function removeProduct() {
        count > 1 ? setCount(count - 1) : console.log("No se puede bajar de 1")

    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{ cartList, agregarProducto, vaciarCarrito, addProduct, removeProduct, item, total, setCartList, setTotal, totalItemsCarrito, setTotalItemsCarrito, count }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider