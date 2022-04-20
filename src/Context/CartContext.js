import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [productsOnCart, setProductsOnCart] = useState([]);
  const [productsCount, setProductsCount] = useState(0);

  const addProductToCart = (id, quantity, action, data) => {
    if (quantity > 0) {
      let existInCart = false;

      for (let i = 0; i < productsOnCart.length; i++) {
        if (productsOnCart[i].productId === id) {
          existInCart = true;

          //Validamos la nueva cantidad contra el stock
          let newQuantityValue = productsOnCart[i].quantityToAdd + quantity;

          if (newQuantityValue <= productsOnCart[i].productStock) {
            productsOnCart[i].quantityToAdd = newQuantityValue;
            action(true);
            setProductsCount(productsCount + quantity);
          } 
          else {
            alert('No existen suficientes productos en el inventario');
          }
        }
      }

      if (existInCart == false) {
        action(true);
        setProductsOnCart(productsOnCart => [...productsOnCart, data]);
        setProductsCount(productsCount + quantity);
      }
    }
  }

  const data = { productsOnCart, setProductsOnCart, productsCount, setProductsCount, addProductToCart };

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
export default CartContext;