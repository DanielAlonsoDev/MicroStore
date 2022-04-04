import { useState, useEffect } from "react";
import ItemDetails from '../ItemDetails/ItemDetails';
//
//https://designer.mocky.io/manage/delete/f69c4128-6647-4111-9dd3-75ec0819dbe3/lHgnd8bUXw5UxWRPJMgvjLPwg4NJfcL8yuH2

function ItemDetailsContainer(props) {
    const requestedId = '46877';
    const [productDetails, setProduct] = useState('');

    useEffect(() => {
        //Solicitamos la informacion del producto
        fetch('https://run.mocky.io/v3/f69c4128-6647-4111-9dd3-75ec0819dbe3')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //Seleccionamos el Producto por el ID
                const selected = data.productData.findIndex(item => item.productId === requestedId);
                //Seteamos los cambios en el estado
                setProduct(data.productData[selected]);
            })
            .catch(reason => {
                console.log('Ocurrio un error: ' + reason);
            });
    }, []);


    return (
        <ItemDetails productInfo={productDetails} />
    );
}

export default ItemDetailsContainer;