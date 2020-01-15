import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Dropdown from './Dropdown';
import IdBox from './IdBox';


const FormWrapper = () => {
    const [selectedResource, setSelectedResource] = useState();
    const [selectedNumber, setSelectedNumber] = useState();
    let [count, setSubmitted] = useState(0);
    const [displayedResource, setDisplayedResource] = useState({});
    const [toggle, setToggle] = useState(true);
    const [homeworld, setHomeworld] = useState({});

    const onSubmitHandler = event => {
        event.preventDefault();
        setSubmitted(count = count+1);
    }
        // console.log(count);

    useEffect(() => {
        if(count > 0){
            setToggle(true);
            // console.log("i'm here! in useEffect!")
            // console.log(selectedResource);
            axios.get(`https://swapi.co/api/${selectedResource}/${selectedNumber}/`)
            .then(response => {
            // console.log(response);
            setDisplayedResource(response.data);
            console.log(response.data)
            if(selectedResource === "people"){

                axios.get(`${response.data.homeworld}`)
                .then(response => {
                // console.log(`second call response ${response}`);
                setHomeworld(response.data);
            })
            }
        })
        .catch(err => {
            console.log(err);
            // setSelectedResource();
            setToggle(false);
        })
        }
    },[count])


    return(
        <div>
            <Dropdown setToggle={setToggle} selectedResource={selectedResource} setSelectedResource={setSelectedResource} />
            <IdBox setToggle={setToggle} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            <button type="submit" onClick={onSubmitHandler} className="btn btn-primary mb-5">Search</button>           

            {selectedResource === "people" && toggle === true
            ? <div>
                <h2>{displayedResource.name}</h2>
                <p>Gender: {displayedResource.gender}</p>
                <p>Birthyear: {displayedResource.birth_year}</p>
                <p>Skin Color: {displayedResource.skin_color}</p>
                <p>Homeworld: {homeworld.name}</p>
            </div>
            :<div></div>
            }
            {selectedResource === "planets" && toggle === true
            ? <div>
                <h2>{displayedResource.name}</h2>
                <p>Population: {displayedResource.population}</p>
                <p>Terrain: {displayedResource.terrain}</p>
                <p>Climate: {displayedResource.climate}</p>
            </div>
            :<div></div>
            }
            {selectedResource === "films" && toggle === true
            ? <div>
                <h2>{displayedResource.title}</h2>
                <p>Episode: {displayedResource.episode_id}</p>
                <p>Director: {displayedResource.director}</p>
                <p>Release Date: {displayedResource.release_date}</p>
            </div>
            :<div></div>
            }
            {selectedResource === "species" && toggle === true
            ? <div>
                <h2>{displayedResource.name}</h2>
                <p>Designation: {displayedResource.designation}</p>
                <p>Average Lifespan: {displayedResource.average_lifespan}</p>
                <p>Language: {displayedResource.language}</p>
            </div>
            :<div></div>
            }
            {selectedResource === "vehicles" && toggle === true
            ? <div>
                <h2>{displayedResource.name}</h2>
                <p>Model: {displayedResource.model}</p>
                <p>Passengers: {displayedResource.passengers}</p>
                <p>Vehicle Class: {displayedResource.vehicle_class}</p>
            </div>
            :<div></div>
            }
            {selectedResource === "starships" && toggle === true
            ? <div>
                <h2>{displayedResource.name}</h2>
                <p>Passengers: {displayedResource.passengers}</p>
                <p>Consumables: {displayedResource.consumables}</p>
                <p>Starship Class: {displayedResource.starship_class}</p>
            </div>
            :<div></div>
            }
            {toggle === false
            ? <div>
                <h2>THESE ARE NOT THE DROIDS YOU'RE LOOKING FOR</h2>
                <iframe src="https://giphy.com/embed/l2JJKs3I69qfaQleE" width="480" height="218" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
            :<div></div>
            }
            
        </div>
        
    )
}
export default FormWrapper;