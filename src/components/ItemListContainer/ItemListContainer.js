import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../Utils/data/GetProducts';
import { Spinner } from "react-bootstrap";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { productCategoryParam } = useParams();
    const [toggleLoader, setToggleLoader] = useState(true);

    const dataSuccess = (products) => {
        setProducts(products);
        setToggleLoader(false);
    }

    useEffect(() => {
        getProductsByCategory(productCategoryParam, dataSuccess);
    }, [productCategoryParam]);

    return (
        <>
            {toggleLoader ?
                (   
                    <div id='loader'>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (
                    <div id='item-list'>
                        <ItemList Items={products} />
                    </div>
                )}
        </>
    );
}

export default ItemListContainer;