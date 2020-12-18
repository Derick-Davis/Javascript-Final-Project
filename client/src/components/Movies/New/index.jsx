import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import {Container} from 'react-bootstrap';

const New = () => {
    return (
        <>
         <Header title="Movies">
             Welcome to the Nation
         </Header>

         <Container>
         <Form endpoint = "movies"/>
         </Container>
         </>
    );
}

export default New;