import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider({children}) {
    const [itemsOnCart, setItemsOnCart] = useState(0);

    const data = {itemsOnCart, setItemsOnCart};

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider };
export default CartContext;