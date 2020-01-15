import React, {useState, useEffect} from 'react';
import axios from 'axios';


const People = (props) => {
    const [person, setPerson] = useState({});
    const [homeworld, setHomeworld] = useState({});
    const [toggle, setToggle] = useState(true);

    useEffect(() => {

            axios.get(`https://swapi.co/api/people/${props.id}/`)
            .then(response => {
            // console.log(response);
            setPerson(response.data);
            // console.log(response.data);
            axios.get(`${response.data.homeworld}`)
                .then(response => {
                // console.log(`second call response ${response}`);
                setHomeworld(response.data);
            })
            
        })
        .catch(err => {
            console.log(err);
            // setSelectedResource();
            setToggle(false);
        })

    },[])

    return(
        <div>
            
            {toggle === false
            ? <div>
                <h2>THESE ARE NOT THE DROIDS YOU'RE LOOKING FOR</h2>
                <iframe src="https://giphy.com/embed/l2JJKs3I69qfaQleE" width="480" height="218" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
            :<div>
                <h2>{person.name}</h2>
            <p>Gender: {person.gender}</p>
            <p>Birthyear: {person.birth_year}</p>
            <p>Skin Color: {person.skin_color}</p>
            <p>Homeworld: {homeworld.name}</p>
            </div>
            }
        </div>
    )
}
export default People;