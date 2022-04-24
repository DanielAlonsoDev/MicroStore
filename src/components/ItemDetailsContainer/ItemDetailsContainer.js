import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetails from '../ItemDetails/ItemDetails';
import { getProductById } from '../../Utils/data/GetProducts';
import { Spinner } from "react-bootstrap";

const ItemDetailsContainer = () => {
    const [productDetails, setProduct] = useState('');
    const [toggleLoader, setToggleLoader] = useState(true);
    const { productIdParam } = useParams();
    const navigate = useNavigate();

    const dataSuccess = (product) => {
        setProduct(product);
        setToggleLoader(false);
    }

    //Navegar a la pagina de error 404
    const moveTo404 = () => {
        navigate('/404');
        console.log('Mensaje de 404');
    }

    useEffect(() => {
        //Hacemos el llamado a la base de datos
        getProductById(productIdParam, dataSuccess, moveTo404);
    }, [productIdParam]);

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
                    <section id='details-section'>
                        <ItemDetails productInfo={productDetails} />
                    </section>
                )}
        </>
    );
}

export default ItemDetailsContainer;