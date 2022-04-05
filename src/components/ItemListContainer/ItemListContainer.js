import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";

//Enlaces del Mock
//https://run.mocky.io/v3/097f6996-1c0d-4a71-aebe-d69779456511
//https://designer.mocky.io/manage/delete/097f6996-1c0d-4a71-aebe-d69779456511/dQVHqO1XwNidBwvQahNECjFT92qAR71BkeQv

function ItemListContainer() {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('https://run.mocky.io/v3/b6b8eda4-b45a-4327-8a99-fab914c0a70d')
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