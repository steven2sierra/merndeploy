import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
export default props => {
    // state
    const [pets, setPets] = useState([]);
    // useEffect, retrieve all pets
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                setPets(res.data); // retrieve data
            })
            .catch(err => console.log(err));
    }, [])
    // return
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    pets.map((p,i) => 
                        <tr key={i}>
                            <td>{p.name}</td>
                            <td>{p.type}</td>
                            <td>
                                <Link to={`/pets/${p._id}`}>details</Link> | <Link to={`/pets/${p._id}/edit`}>edit</Link>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}