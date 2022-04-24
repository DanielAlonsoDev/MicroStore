import Item from '../Item/Item';
import './ItemList.scss';

const ItemList = (props) => {
    const productList = props.Items;

    return (
        <section className='card-container'>
            {productList.map((item) => {
                const { productId, productName, productDescription, productPrice, productStock, productImage } = item;
                return <Item key={productId} productId={productId} productName={productName} productDescription={productDescription} productPrice={productPrice} productStock={productStock} productImage={productImage} />
            })}
        </section>
    );
}

export default ItemList;