import styles from '../styles/instructorsignup.module.css';
import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import {
  FormControl, FormLabel, Container, Input, Image,
  FormHelperText, Button, Center, Alert, Wrap, WrapItem, Box, Text
} from '@chakra-ui/react';
import firebase from '../config/firebase';
const firebaseAuthentication = firebase.auth();
export default function Signin() {
  const [error, setError] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    var errorCode = error.code;
    if (errorCode === 'auth/worng-password') {
      return setError('Login Failed');
    } else {
      await firebaseAuthentication.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      // alert("SuccessFully Login");
      localStorage.setItem('displayName', emailRef.current.value);
      await firebaseAuthentication.onAuthStateChanged((signed) => {
        if (signed) {
          const db = firebase.database();
          const ref = db.ref('instructorData');
          // guru@gmail.com
          // Attach an asynchronous callback to read the data at our posts reference
          ref.on('value', (snapshot) => {
            const data = snapshot.val(); //--> get all data
            const dataUser = [];
            for (const key in data) {
              const courseData = {
                id: key,
                ...data[key]
              };
              dataUser.push(courseData);
            }
            const uidCurrUser = signed.uid;
            const getUsert = dataUser.filter( (data) => data === uidCurrUser);
            
            localStorage.setItem('uid', getUsert);
          }, (errorObject) => {
            console.log('The read failed: ' + errorObject.name);
          });
        } 
      });
      router.push('/dashboard');
    }
  }

  return (
    <div className={styles.container}>
      <Wrap spacing='3px' >
        <WrapItem>
          <Center w='1000px' h='550px' bg='green.100'>
            <Image src='/code.png' alt='webdev' w='850px' h='550px' />
          </Center>
          <Container pt={5} w='300px' h='550px' bg='purple.200'>
            <form>
              {error && <Alert variant="danger">{error}</Alert>}
              <Text fontWeight='bold' fontSize='20px'  >Signin Form for Instructor</Text>
              <FormControl pt={2} id="email" className={styles.content} >
                <FormLabel padding="1px" ><Center>Email address</Center></FormLabel>
                <Input type="email" placeholder='Enter your Email here' ref={emailRef} w="250px" isRequired />
                <FormHelperText>We will never share your email.</FormHelperText>
              </FormControl>
              <FormControl pt={2} id="email" className={styles.content} >
                <FormLabel padding="3px" ><Center>Password</Center></FormLabel>
                <Input type="password" placeholder='Password' ref={passwordRef} w="250px" isRequired />
              </FormControl>
              <Button onClick={handleSubmit} mt={5} colorScheme="teal" mr="4" h="30px" w="70px" className={styles.btn} >
                Sign In
              </Button>
            </form>
          </Container>
        </WrapItem>
      </Wrap>
    </div>
  );
}