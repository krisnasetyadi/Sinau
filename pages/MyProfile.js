import {
  FormControl,FormLabel,Heading,Input
} from '@chakra-ui/react';
import { Container, Wrap } from '@chakra-ui/layout';
export default function MyProfile(){
  return(
    <>
      <Container>
        <Heading>Profile Information</Heading>
        <br/><br/>
        <Wrap>
          <FormControl>
            <FormLabel htmlFor='email'>Your Email Address</FormLabel>
            <Input id='email' type='email' />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='email'>Your Username</FormLabel>
            <Input id='username' type='text' />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='email'>Your Address</FormLabel>
            <Input id='Text' type='text' />

          </FormControl>
        </Wrap>
      </Container>
    </>
  );
}