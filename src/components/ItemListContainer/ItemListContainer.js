import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { productCategoryParam } = useParams();
    const requestedCategory = productCategoryParam;

    function getProducts() {
        if (requestedCategory == 'all') {
            fetch('https://run.mocky.io/v3/5e1f9727-b977-4bb8-b8fe-b8327fc445d6')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setProducts(data.productData);
                });
        } 
        else {
            fetch('https://run.mocky.io/v3/5e1f9727-b977-4bb8-b8fe-b8327fc445d6')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    const result = data.productData.filter(item => item.productCategory == productCategoryParam);
                    setProducts(result);
                });
        }
    }

    useEffect(() => {
        getProducts();
    }, [productCategoryParam]);


    return (
        <ItemList Items={products} />
    );
}

export default ItemListContainer;