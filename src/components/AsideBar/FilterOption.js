
function FilterOption(props) {
    const {title, count} = props.Item;
    return(
        <div>{title} <span>({count})</span></div>
    );
}

export default FilterOption;