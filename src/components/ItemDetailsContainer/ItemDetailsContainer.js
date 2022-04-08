import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from '../ItemDetails/ItemDetails';
//
//https://designer.mocky.io/manage/delete/f69c4128-6647-4111-9dd3-75ec0819dbe3/lHgnd8bUXw5UxWRPJMgvjLPwg4NJfcL8yuH2

function ItemDetailsContainer(props) {
    const [productDetails, setProduct] = useState('');
    const { productIdParam } = useParams();

    useEffect(() => {
        //Solicitamos la informacion del producto
        fetch('https://run.mocky.io/v3/5e1f9727-b977-4bb8-b8fe-b8327fc445d6')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //Seleccionamos el Producto por el ID
                const selected = data.productData.findIndex(item => item.productId === productIdParam);
                //Seteamos los cambios en el estado
                setProduct(data.productData[selected]);
            })
            .catch(reason => {
                console.log('Ocurrio un error: ' + reason);
            });
    }, [productIdParam]);


    return (
        <ItemDetails productInfo={productDetails} />
    );
}

export default ItemDetailsContainer;