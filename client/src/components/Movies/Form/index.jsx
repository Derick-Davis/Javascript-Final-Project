import React, {useContext, useState} from 'react';
import {Form} from 'react-bootstrap';
import {NotificationContext} from '../../shared/Notifications';
import {UserContext} from '../../Authentication/UserProvider';
import {GlobalStoreContext} from '../../shared/Globals';
import Axios from 'axios';
import { Redirect, useParams} from 'react-router-dom';

const MovieForm = ({endpoint}) => { 

const [inputs, setInputs] = useState; 

const {setNotification} = useContext(NotificationContext);
const {user} = useContext(UserContext);
const {globalStore} = useContext(GlobalStoreContext);

const handleChange = event => {
    event.persist();
    setInputs({
        ...inputs,
        [event.target.name]: event.target.value
    });
    
};
 
const {id} = useParams();

const handleSubmit = event => {
    event.preventDefault();
     
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`,
    {
        ...inputs, secret_token: (user && user.token)
    }).then((data) => {
        if(data){
            setNotification({
                type: "success",
                message: "Movie is suggested "
            });
        }

        return(<Redirect to= "/movies"/>);
    })
    .catch((error) => {
        setNotification({
            type: "danger",
            Message:`error: ${error.message}`
        })
    });
};

    return (
        <Form onSubmit = {handleSubmit}>
            <input onChange = {handleChange} name ="movie" placeholder="movie" defaultValue = {inputs.movie} />
            <input onChange = {handleChange} name="director" placeholder="director" defaultValue = {inputs.director}/>
            <button type="submit">Submit</button>
        </Form>
    );
}

export default MovieForm;