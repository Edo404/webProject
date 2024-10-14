//RENDER LISTS

//import PropTypes from 'prop-types"

function List(props){

    const itemList = props.items;
    const category = props.category;
    
    itemList.sort((a,b) => a.name.localeCompare(b.name));     //alphabetical
    //fruits.sort((a,b) => a.name.localeCompare(b.name));     unalphabetical
    //fruits.sort((a,b) => a.calories - b.calories);          numeric
    //fruits.sort((a,b) => b.calories - a.calories);          reverse numeric
    
    const lowCalFruits = itemList.filter(item => item.calories < 100);
    const highCalFruits = itemList.filter(item => item.calories > 100);
    
    const listItemsHigh = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
                                            {highCalFruit.name}: &nbsp;
                                            <b>{highCalFruit.calories}</b></li>);

    const listItemsLow = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                            {lowCalFruit.name}: &nbsp;
                                            <b>{lowCalFruit.calories}</b></li>);


    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);

    return(
        <div>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
            <ol className="list-items">{listItemsLow}</ol>
            <ol className="list-items">{listItemsHigh}</ol>
        </div>
    )
}
/*
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number
    })),
}
*/

List.defaultProps = {
    category: "Category",
    items : []
}

export default List