import Axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';

const Delete = () => {
  const { id } = useParams();
  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/movies/delete`, { _id: id })
    .then(() => {
      setNotification({
        type : "danger",
        message: "Movie was destroyed successfully"
      }    
      );
    })
    .catch(error => {
      setNotification(`Couldn't delete the selected movie due to an error: ${error.message}`);
    });
  }, []);

  return <Redirect to="/"/>;
}
 
export default Delete;