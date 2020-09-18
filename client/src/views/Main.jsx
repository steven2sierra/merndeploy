import React from 'react';
import PetTable from '../components/PetTable';
import {Link} from '@reach/router';

// MAIN
export default props => {
    // return
    return(
        <div>
            <h2>These pets are looking for a good home</h2>
            <Link to={'/pets/new'}>add a pet to a new home</Link>
            <PetTable/>
        </div> 
    );
}