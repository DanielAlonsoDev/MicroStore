import './OrderTracking.scss';
import database from '../../Utils/data/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { Spinner } from "react-bootstrap";


const OrderTracking = () => {
    const [order, setOrder] = useState(null);
    const [toggleResult, setToggleResult] = useState(false);
    const [orderCode, setOrderCode] = useState(null);
    const [toggleLoader, setToggleLoader] = useState(true);

    const getOrderInfo = async (orderCode) => {
        const orderDoc = doc(database, 'orders', orderCode);
        const orderDocSnap = await getDoc(orderDoc);

        if (orderDocSnap.exists()) {
            //Creamos el objeto de la orden
            let orderResult = orderDocSnap.data();
            setOrder(orderResult);
            setToggleLoader(false);
        }
    }

    //Contenido de la compra
    const showOrderInfo = () => {
        if (order !== null) {
            const { userName, userLastname, userPhone, userEmail } = order.userInfo;
            const { subTotalPrice, taxesTotal, totalPrice } = order.priceDetails;

            return (
                <div id='order-info'>
                    <article className='user-info text-start'>
                        <Row>
                            <Col><h3>Comprador</h3></Col>
                            <Col><p>{`${userName} ${userLastname}`}</p></Col>
                        </Row>
                        <Row>
                            <Col><h3>Teléfono</h3></Col>
                            <Col><p>{userPhone}</p></Col>
                        </Row>
                        <Row>
                            <Col><h3>Correo Electrónico</h3></Col>
                            <Col><p>{userEmail}</p></Col>
                        </Row>
                    </article>
                    {/* Tabla de productos */}
                    <Table className='table-products'>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio Unitario</th>
                                <th>Subtotal</th>

                            </tr>
                        </thead>
                        <tbody>
                            {order.items.map(product => {
                                const { productId, productName, quantity, productPrice } = product;
                                return (
                                    <tr key={productId}>
                                        <td className='text-start'>{productName}</td>
                                        <td className='text-end'>{quantity}</td>
                                        <td className='text-end'>{productPrice}</td>
                                        <td className='text-end'>{productPrice * quantity}</td>
                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </Table>
                    {/* Tabla de detalles de precio */}
                    <Table className='table-price'>
                        <thead>
                            <tr>
                                <th>Subtotal</th>
                                <th>Impuestos</th>
                                <th>Total</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-end'>{subTotalPrice}</td>
                                <td className='text-end'>{taxesTotal}</td>
                                <td className='text-end'>{totalPrice}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <button className='btn-back' onClick={backToTracking}>Volver</button>
                </div>
            );
        }
    }

    //Evento para abrir el detalle de la compra
    const goToOrder = () => {
        getOrderInfo(orderCode);
        setToggleResult(true);
    }

    //Evento para salir el detalle de la compra y volver al tracking
    const backToTracking = () => {
        setToggleResult(false);
        setToggleLoader(true);
        setOrder(null);
    }

    const registerInputValue = (e) => {
        setOrderCode(e.target.value);
    }

    return (
        <section id='tracking-section'>
            <h2>Seguimiento de compras</h2>
            {// Alternamos entre la vista de busqueda y la informacion del pedido
                toggleResult ?
                    (
                        // Alternamos entre el loader y la informacion del pedido
                        toggleLoader ? (
                            <div id='loader'>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        ) : (
                            showOrderInfo()
                        )

            ) : (
            <>
                <p>Utiliza el codigo que recibiste al realizar tu compra para ver los detalles de la esta.</p>
                <input type='text' placeholder='Código de compra' name='order-product-input' onChange={registerInputValue} onFocus={registerInputValue} autoComplete='off' />
                <button onClick={goToOrder}>Buscar</button>
            </>
            )
            }

        </section>
    );
}

export default OrderTracking;   