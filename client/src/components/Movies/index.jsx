import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import { UserContext } from '../Authentication/UserProvider';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Movies = () => {
    const { setNotification } = useContext(NotificationContext);
    const { globalStore } = useContext(GlobalStoreContext);
    const { user } = useContext(UserContext);

    const [movies, setMovies] = useState([]);

    useEffect(() => 
    {
        Axios.get(`${globalStore.REACT_APP_ENDPOINT}/movies`)
    .then(({ data }) => {
      setMovies(data);
    })
    .catch(error => {
        setNotification({
          type: "danger",
          message: `There was an error retrieving the movies: ${error.message}`
        });
      });
    }, [globalStore, setNotification]);
    return (
        <>
          <Header title="Movies"/>
    
          <Container>
            {movies && movies.length > 0 ? (
              movies.map((movie, i) => (
                <>
                  <p>
                    {movie.title}: "{movie.movie}" ~ {movie.director}
                  </p>
    
                  {user && user.token ? (
                    <Link to={`/movies/edit/${movie._id}`}>...edit...</Link>
                  ) : null}
                </>
              ))
            ) : null}
          </Container>
        </>
      );
    }

export default Movies;
