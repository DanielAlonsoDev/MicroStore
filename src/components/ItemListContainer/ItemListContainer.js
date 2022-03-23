import './ItemListContainer.scss'

function ItemListContainer(props) {
    const {bienvenida, nombre} = props;
    return (
        <div className='bienvenida'>¡{bienvenida} <span>{nombre}</span>!</div>
    );
}

export default ItemListContainer;