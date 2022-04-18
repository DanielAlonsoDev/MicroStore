import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetails from '../ItemDetails/ItemDetails';
import { getProductById } from '../../Utils/data/GetProducts';

//
//https://designer.mocky.io/manage/delete/f69c4128-6647-4111-9dd3-75ec0819dbe3/lHgnd8bUXw5UxWRPJMgvjLPwg4NJfcL8yuH2

function ItemDetailsContainer(props) {
    const [productDetails, setProduct] = useState('');
    const { productIdParam } = useParams();
    const navigate = useNavigate();

    const moveTo404 = () => {
        navigate('/404');
        console.log('Mensaje de 404');
    }

    useEffect(() => {
        getProductById(productIdParam,setProduct, moveTo404);
    }, [productIdParam]);


    return (
        <ItemDetails productInfo={productDetails} />
    );
}

export default ItemDetailsContainer;