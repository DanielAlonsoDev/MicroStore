import productJson from '../../data/productData.json';
import { useState, useEffect } from "react";
import ItemDetails from '../ItemDetails/ItemDetails';

function ItemDetailsContainer(props) {
    const requestedId = '46877';
    const [productDetails, setProduct] = useState('');

    function getItem() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(productJson.productData);
            }, 2000);
        });
    }

    useEffect(() => {
        getItem()
            .then((response) => {
                const selected = response.findIndex( item => item.productId === requestedId);
                setProduct(response[selected]);
            })
            .catch(reason => {
                console.log('Ocurrio un error: ' + reason);
            });
    }, []);

    return (
        <div>
            <ItemDetails productInfo={productDetails}/>
        </div>
    );
}

export default ItemDetailsContainer;