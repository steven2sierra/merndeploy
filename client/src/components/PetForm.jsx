import React, {useState} from 'react';
// axios
import axios from 'axios';
import {navigate} from '@reach/router';

export default props => {
    // set state
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    // set errors
    const [errors, setErrors] = useState([]);
    // submit handler
    const submitHandler = e => {
        // prevent default js
        e.preventDefault();
        const pet = {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        }
        // axios
        axios.post('http://localhost:8000/api/pets/new', pet)
            .then(res => {
                console.log(res.data);
                // setName(res.data.name);
                // setType(res.data.type);
                // setDescription(res.data.description);
                // setSkillOne(res.data.skillOne);
                // setSkillTwo(res.data.skillTwo);
                // setSkillThree(res.data.skillThree);
                // navigate home if successful
                navigate('/');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }
    // return
    return(
        <div>
            <form onSubmit={submitHandler}>
                {errors.map((err, i) => <p key={i}>{err}</p>)}
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={e => setName(e.target.value) }/>
                </div>
                <div>
                    <label>Type:</label>
                    <input type="text" onChange={e=> setType(e.target.value)}/>
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" onChange={e=> setDescription(e.target.value)}/>
                </div>
                <div>
                    <label>Skill One:</label>
                    <input type="text" onChange={e=> setSkillOne(e.target.value)}/>
                </div>
                <div>
                    <label>Skill Two:</label>
                    <input type="text" onChange={e=> setSkillTwo(e.target.value)}/>
                </div>
                <div>
                    <label>Skill Three:</label>
                    <input type="text" onChange={e=> setSkillThree(e.target.value)}/>
                </div>
                <input type="submit" value="ADD PET"/>
            </form>
        </div>
    );
}