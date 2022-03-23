import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useState, useEffect } from 'react';
import ShoppingCart from '../ShoppingCart/ShopCart';
import '../ProductCard/ProductCard.scss';

function ItemCounter(props) {
    const { initialValue, stockValue } = props;
    const [countValue, setCount] = useState(initialValue);

    function addProductCount() {
        if (countValue < stockValue) {
            setCount(countValue + 1);
        }
        else {
            setCount(countValue);
        }
    }
    
    function removeProductCount() {
        if (countValue > 1) {
            setCount(countValue - 1);
        }
        else {
            setCount(countValue);
        }
    }
    
    //Alerta se seleccion de todo el inventario
    useEffect(() => {
        if (countValue === stockValue) {
            alert('Seleccionaste todos los productos del stock');
        }
    }, [countValue, stockValue]);

    return (
        <div className='product-actions-wrap'>
            <Typography color="text.secondary" className='product-stock'>
                {'Stock: ' + stockValue}
            </Typography>

            <div className='add-controls'>
                {/* BOTON DE RESTA */}
                <Button onClick={removeProductCount}><i><RemoveIcon /></i></Button>
                <Typography component='p'>{countValue}</Typography>
                {/* BOTON DE SUMA */}
                <Button onClick={addProductCount}><i><AddIcon /></i></Button>
            </div>
            <Button size="small" className='product-add-button' onClick={() => setCount(1)}>Agregar <i><ShoppingCart /></i></Button>
        </div>
    );
}

export default ItemCounter;
