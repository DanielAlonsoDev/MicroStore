import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";


function ItemListContainer() {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('https://run.mocky.io/v3/f69c4128-6647-4111-9dd3-75ec0819dbe3')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProducts(data.productData);
            });
    });

    return (
        <ItemList Items={products} />
    );
}

export default ItemListContainer;