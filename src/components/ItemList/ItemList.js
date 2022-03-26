import Item from '../Item/Item';
import Container from '@mui/material/Container';


function ItemList(props) {
    const productList = props.Items;

    return (
        <Container maxWidth="lg">
            <div className='card-container'>

            {productList.map( (item) => {
                    const { productId, productName, productDescription, productPrice, productStock, productImage } = item;

                    return <Item key={productId} productName={productName} productDescription={productDescription} productPrice={productPrice} productStock={productStock} productImage={productImage} />
                })}
 
            </div>
        </Container>
    );
}

export default ItemList;