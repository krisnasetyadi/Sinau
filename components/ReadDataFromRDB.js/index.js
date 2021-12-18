
/*
    read documentation here
    --> https://firebase.google.com/docs/database/admin/retrieve-data#node.js

*/
import { Button } from '@chakra-ui/button';
import firebase from '../../config/firebase';

const user = firebase.auth();

export const ReadDataFromRDB = () => {

  const readData = (e) => {
    e.preventDefault();
    try {

      user.onAuthStateChanged((signedUser) => {
        if (signedUser) {
          let id = localStorage.getItem('uid');
          console.log(id);
        } else {
          alert('nothing');
        }
               
      });

    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <Button onClick={readData}> Read data RDB</Button>
  );
};