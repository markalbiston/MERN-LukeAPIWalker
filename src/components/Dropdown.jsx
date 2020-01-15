import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Dropdown = ({selectedResource, setSelectedResource, setToggle}) => {
    const [resources, setResources] = useState({});
    useEffect(() => {
        axios.get('https://swapi.co/api/')
        .then(response => {

            setResources(response.data);

        })
        .catch(err => console.log(err)) 
    },[])
    
    // console.log(selectedResource);
    // console.log(resources);
    const onChangeHandler = event => {

        setToggle(true);
        setSelectedResource(event.target.value);

    }

    return(
        <div>
            <label>Search for:</label>
            <select className="" onChange={onChangeHandler}>
                <option className="list-group-item" disabled="disabled" selected={true}>Choose a Resource</option>
                {Object.keys(resources).map((resource, index) => 
                    <option key={index} className="list-group-item">{resource}</option>
                )}
            </select>
        </div>
        
    )
}
export default Dropdown;