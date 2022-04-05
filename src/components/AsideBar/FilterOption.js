import {Link} from 'react-router-dom';

function FilterOption(props) {
    const {title, count, url} = props.Item;
    return(
        <Link to={'/catalogue/' + url}>{title} <span>({count})</span></Link>
    );
}

export default FilterOption;