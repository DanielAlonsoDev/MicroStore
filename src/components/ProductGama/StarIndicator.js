import FullStar from '../../Utils/images/full.svg';
import EmptyStar from '../../Utils/images/empty.svg';
import HalfStar from '../../Utils/images/mid.svg';
import { useEffect, useState } from 'react';


function StarIndicator(props) {

    const [activeIcon, setStarIcon] = useState('');
    const [count, setCount] = useState(props.initialCount);

    //Array con los iconos de las estrellas 
    const starIcons = [EmptyStar, HalfStar, FullStar];

    //Alternamos el valor de la key de posicion de las estrellas
    function changeIcon() {
        switch (count) {
            case 2:
                setCount(0);
                break;
            default:
                setCount(count + 1);
                break;
        }
    }

    useEffect(() => {
        setStarIcon(starIcons[count]);
    }, [count]);


    return (
        <button onClick={changeIcon}><img src={activeIcon} alt='Icono_de_estrella' /></button>
    );
}

export default StarIndicator;