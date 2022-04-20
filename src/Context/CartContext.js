import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [productsOnCart, setProductsOnCart] = useState([]);
    const [productsCount, setProductsCount] = useState(0);

    const addProductToCart = (id, quantity, action, data) => {
        if (quantity > 0) {
          let existInCart = false;
          for (let i = 0; i < productsOnCart.length; i++) {
            if (productsOnCart[i].productId === id) {
              existInCart = true;
            }
          }
    
          if (existInCart !== true) {
            action(true);
            setProductsOnCart(productsOnCart => [...productsOnCart, data]);
            setProductsCount(productsCount + 1);
          }
          else {
            alert('El producto ya se encuentra en el carrito');
          }
        }
      }

    const data = {productsOnCart, setProductsOnCart, productsCount, setProductsCount, addProductToCart};

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider };
export default CartContext;