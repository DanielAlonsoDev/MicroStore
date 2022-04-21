import './ModalForm.scss';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
//Contexto
import CartContext from '../../Context/CartContext';
import { useState } from 'react';
//Firebase
import { collection, addDoc } from 'firebase/firestore';
import database from '../../Utils/data/firebase';

const ModalForm = (props) => {
    const { productsOnCart, setProductsOnCart, subTotalPrice, taxesTotal, totalPrice } = useContext(CartContext);
    const [formContent, setFormContent] = useState(
        {
            userName: '',
            userLastname: '',
            userEmail: '',
            userPhone: ''
        },
    );

    const [order, setOrder] = useState(
        {
            userInfo: formContent,
            items: productsOnCart.map((item) => {
                return {
                    productId: item.productId,
                    productName: item.productName,
                    productPrice: item.productPrice,
                    quantity: item.quantityToAdd
                }
            }),
            priceDetails: {
                subTotalPrice: subTotalPrice,
                taxesTotal: taxesTotal,
                totalPrice: totalPrice
            }
        });

    const inputChange = (e) => {
        setFormContent({ ...formContent, [e.target.name]: e.target.value });    
    }

    const pushOrderToFirebase = async () => {

    }

    const submitForm = (e) => {
        let conditionToEval = formContent.userName !== '' && formContent.userLastname !== '' && formContent.userEmail !== '' && formContent.userPhone !== '';
        if (conditionToEval) {
            setOrder({ ...order, userInfo: formContent });
        }
    }

    useEffect(() => {
        document.getElementById('user-info-form').addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }, []);

    return (
        <div id='form-container'>
            <form id='user-info-form' name='user-info-form'>
                <h2>Datos del comprador</h2>
                <article>
                    <label>Nombre</label>
                    <input type='text' placeholder='Nombre' name='userName' onChange={inputChange} value={formContent.userName} required />
                </article>
                <article>
                    <label>Apellido</label>
                    <input type='text' placeholder='Apellido' name='userLastname' onChange={inputChange} value={formContent.userLastname} required />
                </article>
                <article>
                    <label>Número de Teléfono</label>
                    <input type='tel' placeholder='Teléfono' name='userPhone' onChange={inputChange} value={formContent.userPhone} required />
                </article>
                <article>
                    <label>Correo Electrónico</label>
                    <input type='email' placeholder='Correo' name='userEmail' onChange={inputChange} value={formContent.userEmail} required />
                </article>
                <Link to='/cart'>
                    <button className='btn-back' onClick={props.modalControl}>Volver al carrito</button>
                </Link>
                <button type='submit' className='btn-submit' onClick={submitForm}>Realizar Compra</button>
            </form>
        </div>
    );
}

export default ModalForm;