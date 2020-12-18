import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import {Container} from 'react-bootstrap';

const Edit = ({preload}) => {
    return (
        <>
         <Header title="Movies">
             Welcome to the Nation -Edit
         </Header>

         <Container>
         <Form endpoint = "movies/update" preload = {preload}/>
         </Container>
         </>
    );
}

export default Edit;