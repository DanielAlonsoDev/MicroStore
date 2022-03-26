import ItemList from "../ItemList/ItemList";
import productJson from '../../data/productData.json';
import { useState, useEffect } from "react";


function ItemListContainer() {

    const [products, setProducts] = useState([]);

    function getProducts() {
        return new Promise((resolve, reject) => {
            //Timeout para simular un retraso de carga de red
            setTimeout(() => {
                return resolve(productJson.productData);
            }, 2000);
        });
    }

    useEffect(() => {
        getProducts().then((productData) => {
            setProducts(productData);
        })
            .catch(reason => {
                console.log('Ocurrio un error: ' + reason);
            });

    }, []);

    return (
        <ItemList Items={products} />
    );
}

export default ItemListContainer;