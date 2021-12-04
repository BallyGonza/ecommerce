import { useState, createContext } from "react";

export const CartContext = createContext([])

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])

    const agregarProducto = (item) => {
        if (containsObject(item, cartList) == true) {
            console.log("El producto ya se encuentra en el carrito.")
        }
        else {
            setCartList(cartList.concat(item))
        }
    }

    function containsObject(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }

        return false;
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{ cartList, agregarProducto, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider