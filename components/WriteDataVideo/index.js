// https://medium.com/@hasangi/writing-deleting-and-updating-data-in-firebase-realtime-database-with-javascript-f26113ec8c93
import { Button } from '@chakra-ui/button';
import {
  FormControl, FormLabel, Container, Input, Image,
  FormHelperText, Center, Alert, Wrap, WrapItem, Box, Text
} from '@chakra-ui/react';
import { useRef } from 'react';

// const user = firebase.auth().currentUser;
import firebase from '../../config/firebase';

export default function WriteDataVideo() {
  const urlVideoLesson = useRef();
  const user = firebase.auth().currentUser;

  const addURL = () => {
    if (user !== null) {
      const uid = user.uid;
      console.log(uid);
      let userRef = firebase.database().ref('instructorData' + uid);
      console.log(userRef);
      userRef.child(uid).update({ 'urlVideo': urlVideoLesson });
    }
  };




  return (
  // form input URL

    <div>
      <Text fontWeight='bold' fontSize='20px'  >Add URL VIDEO</Text>
      <FormControl pt={2} id="url" className={'#'} >
        <FormLabel padding="1px" ><Center>URL Video Course</Center></FormLabel>
        <Input type="email" placeholder='Enter your URL video here' ref={urlVideoLesson} w="250px" isRequired />
        <Button onClick={addURL}>Add URL</Button>
        <FormHelperText>We will never share your email.</FormHelperText>
      </FormControl>
    </div>

  );
}