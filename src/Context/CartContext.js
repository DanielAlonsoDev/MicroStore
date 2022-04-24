import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [productsOnCart, setProductsOnCart] = useState([]);
  const [subTotalPrice, setSubtotalPrice] = useState(0);
  const [taxesTotal, setTaxesTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProductToCart = (id, quantity, action, data) => {
    if (quantity > 0) {
      let existInCart = false;

      //Recorremos el array de productos para ver si el productos existe
      for (let i = 0; i < productsOnCart.length; i++) {
        //Si el producto existe en el carrito actualizamos el valor del quantity
        if (productsOnCart[i].productId === id) {
          existInCart = true;

          //Validamos la nueva cantidad contra el stock
          let newQuantityValue = productsOnCart[i].quantityToAdd + quantity;

          if (newQuantityValue <= productsOnCart[i].productStock) {
            let productList = productsOnCart;
            productList[i].quantityToAdd = newQuantityValue;
            setProductsOnCart([...productList]);
            action(true);
            localStorage.setItem('productsOnCart', JSON.stringify(productList));
          }
          else {
            alert('No existen suficientes productos en el inventario');
          }
        }
      }

      //Si el producto no existe en el carrito lo agregamos a la lista
      if (existInCart === false) {
        action(true);
        setProductsOnCart(productsOnCart => [...productsOnCart, data]);

        let newArray = productsOnCart;
        newArray.push(data);
        localStorage.setItem('productsOnCart', JSON.stringify(newArray));
      }
    }

  }

  //Si existen productos en el localstorage los agreagamos al los productos del carrito
  useEffect(() => {
    let storageProducts = localStorage.getItem('productsOnCart');

    if (storageProducts !== null) {
      setProductsOnCart(JSON.parse(storageProducts));
    }
  }, []);

  //Agregamos los productos del carrito al localstorage
  useEffect(() => {
    localStorage.setItem('productsOnCart', JSON.stringify(productsOnCart));
  }, [productsOnCart])

  //Objetos de los elementos a utilizar del Cart Context
  const data = { productsOnCart, setProductsOnCart, addProductToCart, subTotalPrice, setSubtotalPrice, taxesTotal, setTaxesTotal, totalPrice, setTotalPrice };

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
export default CartContext;