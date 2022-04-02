import Item from '../Item/Item';

function ItemList(props) {
    const productList = props.Items;

    return (
        <section className='card-container'>
            {productList.map((item) => {
                const { productId, productName, productDescription, productPrice, productStock, productImage } = item;
                return <Item key={productId} productName={productName} productDescription={productDescription} productPrice={productPrice} productStock={productStock} productImage={productImage} />
            })}
        </section>
    );
}

export default ItemList;