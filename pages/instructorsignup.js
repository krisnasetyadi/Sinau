import styles from '../styles/instructorsignup.module.css';
import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import {
  FormControl, FormLabel, Container, Input, Image,
  FormHelperText, Button, Center, Alert,Wrap,WrapItem,Text
} from '@chakra-ui/react';
import firebase from '../config/firebase';
const firebaseAuthentication = firebase.auth();
export default function InstructorSignUp() {
  const [error, setError] = useState('');
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confPassRef = useRef();
  const router = useRouter();
  var db = firebase.database();
  var userDBRef = db.ref('instructorData');
  async function addDataInstructor(e){
    await userDBRef.push({
      displayName: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmationPass:confPassRef.current.value
    });
    console.log('This Data was Uploaded to Database');
    
    e.preventDefault();
    if (passwordRef.current.value!==confPassRef.current.value){
      return setError('Invalid Credential');
    }   
    await firebaseAuthentication.createUserWithEmailAndPassword(
      emailRef.current.value,passwordRef.current.value)
      .then((res)=>{
        firebaseAuthentication.currentUser
          .sendEmailVerification()
          .then(() => {
            alert('Please Kindly Check Your Email');
            router.push('/instructorsignin');
          })
          .catch((error) => {
            setError('Login Failed Check your Credential');
          });
      });    
  }
  return (
    <div className={styles.container}>
      <Wrap spacing='3px' >
        <WrapItem>
          <Center w='1000px' h='550px' bg='green.100'>
            <Image src='/code.png' alt='webdev' w='850px' h='550px' />
          </Center>
          <Container  pt={5} w='300px' h='550px' bg='purple.200'>
            <form onSubmit={(e) => {
              userDBRef.on('child_added', addData);
            }}> 
              {error && <Alert variant="danger">{error}</Alert>}
              <Text fontWeight='bold' fontSize='20px'  >Registration Form for Instructor</Text>
              <FormControl pt={2} id="username" className={styles.content} >
                <FormLabel  padding="3px" ><Center>Full Name</Center></FormLabel>
                <Input type="text" placeholder='Daniel Costa' ref={usernameRef} w="250px" isRequired/>
              </FormControl>
              <FormControl pt={2} id="email" className={styles.content} >
                <FormLabel  padding="1px" ><Center>Email address</Center></FormLabel>
                <Input type="email" placeholder='Enter your Email here' ref={emailRef} w="250px" isRequired/>
                <FormHelperText>We will never share your email.</FormHelperText>
              </FormControl>
              <FormControl  pt={2} id="email" className={styles.content} >
                <FormLabel  padding="3px" ><Center>Password</Center></FormLabel>
                <Input type="password" placeholder='Password' ref={passwordRef} w="250px" isRequired/>
              </FormControl>
              <FormControl  pt={2} id="email" className={styles.content} >
                <FormLabel  padding="3px" ><Center>Confirm Password</Center></FormLabel>
                <Input type="password" placeholder='Confirm your Password' ref={confPassRef} w="250px" isRequired/>
              </FormControl>
              <Button onClick={addDataInstructor} mt={5} colorScheme="teal" mr="4" h="30px" w="70px"  className={styles.btn} >
              Sign Up
              </Button>
            </form>
          </Container>
        </WrapItem>
      </Wrap>
    </div>
  );
}