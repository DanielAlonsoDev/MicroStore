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
        //Cambiamos visibilidad de los elementos
        let section = document.getElementById('item-list');
        let loader = document.getElementById('loader');
        section.style.display = 'none';

        //SetTimeOut TEMPORAL para hacer perceptible el spinner
        setTimeout(() => {
            if (toggleLoader === false) {
                section.style.display = 'block';
                loader.style.display = 'none';
            }
        }, 300);
    }, [toggleLoader]);


    useEffect(() => {
        getProductsByCategory(productCategoryParam, dataSuccess);
    }, [productCategoryParam]);

    return (
        <>
            <div id='loader'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            <div id='item-list'>
                <ItemList Items={products} />
            </div>
        </>
    );
}

export default ItemListContainer;