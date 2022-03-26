import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Item.scss';

function Item(props) {
  //Props
  const { productName, productDescription, productPrice, productStock, productImage } = props;
  const productAltText = productName.replace(/\s+/g, '_');

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
        </div>
      </CardContent>
    </Card>
  );
}

export default Item;