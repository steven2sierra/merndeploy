import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

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
    // useEffect
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
            })
            .catch(err => console.log(err));
    }, [props._id])
    // update
    const update = e => {
        e.preventDefault();
        const pet = {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        }
        axios.put(`http://localhost:8000/api/pets/update/${props._id}`, pet)
        .then(res=> {
            console.log(res);
            if(res.data.errors) {
                setErrors(res.data.errors);
            } else {
                navigate('/');
            }
        })
    }
    // return
    return(
        <div>
            <h2>Edit</h2>
            <Link to={'/'}>back to home</Link>
            <form onSubmit={update}>
            {/* error message: display or empty string , else...everything is okay */}
            <p>{errors.name ? errors.name.message : ""}</p>
                <label>
                    Name:
                </label>
                <input type="text" onChange={e => setName(e.target.value)} value={name}/>
                <p>{errors.type ? errors.type.message : ""}</p>
                <label>
                    Type:
                </label>
                <input type="text" onChange={e => setType(e.target.value)} value={type}/>
                <p>{errors.description ? errors.description.message : ""}</p>
                <label>
                    Description:
                </label>
                <input type="text" onChange={e => setDescription(e.target.value)} value={description}/>
                <label>
                    Skill One:
                </label>
                <input type="text" onChange={e => setSkillOne(e.target.value)} value={skillOne}/>
                <label>
                    Skill Two:
                </label>
                <input type="text" onChange={e => setSkillTwo(e.target.value)} value={skillTwo}/>
                <label>
                    Skill Three:
                </label>
                <input type="text" onChange={e => setSkillThree(e.target.value)} value={skillThree}/>
                {/* submit */}
                <input type="submit" value="EDIT PET"/>
            </form>
        </div>
    );
}