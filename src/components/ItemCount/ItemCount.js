import { useEffect, useState } from "react";
import './ItemCount.scss';

const ItemCount = (props) => {
    const { stock, action, initial } = props;
    const [count, setCount] = useState(0);

    const onAdd = () => {
        if (count < stock) {
            let newValue = count + 1;
            setCount(newValue);
            action(newValue);
        }
    }

    const onRemove = () => {
        if (count > 0) {
            let newValue = count - 1;
            setCount(newValue);
            action(newValue);
        }
    }

    useEffect(() => {
        if(initial !== undefined){
            setCount(initial);
        }
    }, [])

    return (
        <div className="itemCounter">
            <button onClick={onRemove}>-</button>
            <input className='stockCountInput' type='text' readOnly value={count} />
            <button onClick={onAdd}>+</button>
        </div>
    );
}

export default ItemCount;