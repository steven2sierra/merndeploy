import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default props => {
    // retrieve ID for callback
    const {ID, callBack} = props;
    const adoptPet = e => {
        axios.delete(`http://localhost:8000/api/pets/destroy/${ID}`)
            .then(res => {
                callBack();
            })
        navigate('/');
    }
    // style Delete
    const styleDelete ={
        color: "black",
        outline:"none",
        borderRadius: "10px",
        width: "90px",
        height: "45px",
        paddingLeft: "5px",
        paddingRight: "5px",
        textDecoration: "none"
    }
    // return
    return(
        <button style={styleDelete} onClick={adoptPet}>
            Adopt
        </button>
    );
}