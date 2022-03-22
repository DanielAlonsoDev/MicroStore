import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCart from '../ShoppingCart/ShopCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './ProductCard.scss';
import ProductGama from '../ProductGama/ProductGama';
import React, { useState } from 'react';

function ProductCard(props) {
  //Props
  const { productName, productDescription, productPrice, productStock, productImage } = props;
  const productAltText = productName.replace(/\s+/g, '_');

  //Difinimos los estados y su logica de cambio
  const [productCount, setCount] = useState(1);

  function addProductCount() {
    if(productCount < productStock){
      setCount(productCount + 1);
    } else {
      setCount(productCount);
    }
  }

  function removeProductCount() {
    if (productCount > 1) {
      setCount(productCount - 1);
    } else {
      setCount(productCount);
    }
  }

  return (
    <Card sx={{ textAlign: 'left', maxWidth: 345 }} className='product-card'>
      <CardMedia
        component="img"
        alt={productAltText}
        height="200"
        image={productImage}
      />
      <CardContent className='product-info'>
        <Typography component="div" sx={{ fontSize: 20 }} className='product-name'>
          {productName}
        </Typography>
        <Typography color="text.secondary" sx={{ fontSize: 17 }} className='product-description'>
          {productDescription}
        </Typography>

        <Typography color="text.secondary" sx={{ fontSize: 22, color: '#17D7A0' }} className='product-price'>
          {'$' + productPrice}
        </Typography>
        <div>
          <ProductGama className='product-gama' />
        </div>

      </CardContent>
      <CardActions className='product-actions'>

        <div className='product-actions-wrap'>
          <Typography color="text.secondary" className='product-stock'>
            {'Stock: ' + productStock}
          </Typography>

          <div className='add-controls'>
            {/* BOTON DE RESTA */}
            <Button onClick={removeProductCount}><i><RemoveIcon /></i></Button>
            <Typography component='p'>{productCount}</Typography>
            {/* BOTON DE SUMA */}
            <Button onClick={addProductCount}><i><AddIcon /></i></Button>
          </div>
          <Button size="small" className='product-add-button' onClick={() => setCount(1)}>Agregar <i><ShoppingCart /></i></Button>
        </div>

      </CardActions>
    </Card>
  );
}

export default ProductCard;