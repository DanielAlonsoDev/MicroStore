import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider({children}) {
    const [productsOnCart, setProductsOnCart] = useState([]);
    const [productsCount, setProductsCount] = useState(0);

    const data = {productsOnCart, setProductsOnCart, productsCount, setProductsCount};

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider };
export default CartContext;