import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../Utils/data/GetProducts';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { productCategoryParam } = useParams();

    useEffect(() => {
        getProductsByCategory(productCategoryParam, setProducts);
    }, [productCategoryParam]);

    return (
        <ItemList Items={products} />
    );
}

export default ItemListContainer;