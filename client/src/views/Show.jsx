import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
// ADOPT
// import Adopt from '../components/Adopt';

export default props => {
    // show pet
    const [show, setShow] = useState("");
    // useEffect
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                setShow(res.data);
            }).catch(err => console.log(err));
    }, [props._id]) // dependency array
    /*
        Remove From DOM
    */
    const {removeFromDOM} = props;
    // destroy
    const adoptPet = ID => {
        axios.delete(`http://localhost:8000/api/pets/destroy/${ID}`)
            .then(res => {
                removeFromDOM(ID);
                navigate('/');
            }).catch(err => console.log(err));
    }
    // return
    return(
        <div>
            <Link to={'/'}>back to home</Link>
            <h2>Details about: {show.name}</h2>
                <label>Pet Type: </label>
                    <p>{show.type}</p>
                <br></br>
                <label>Description:</label>
                    <p>{show.description}</p>
                <br></br>
                <label>Skills:</label>
                    <p>{show.skillOne}</p>
                    <p>{show.skillTwo}</p>
                    <p>{show.skillThree}</p>
                <br></br>
            {/* adopt */}
            <button onClick={e=>{adoptPet(show._id)}}>Adopt {show.name}</button>
        </div>
    );
}