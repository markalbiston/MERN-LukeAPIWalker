import React from 'react';


const IdBox = ({selectedNumber, setSelectedNumber, setToggle}) => {

    const onChangeHandler = event => {
        setToggle(true);

        setSelectedNumber(event.target.value);
    }

    return(
        <div>
            <label>ID:</label>
            <input onChange={onChangeHandler} type="text"/>
        </div>
        
    )
}
export default IdBox;