import { Wrap, WrapItem, Box, Center, HStack, Container, Text } from '@chakra-ui/layout';
import { Button, Image } from '@chakra-ui/react';
import styles from '../styles/Homee.module.css';
import Navvbar from '../components/navvbar';
import { useRouter } from 'next/router';
import NavbarUser from '../components/NavbarUser';
// import Layout from '../components/layout/layout';

export default function Home() {
  
  const router = useRouter();
  return (
    <div>
      <Navvbar />
      <NavbarUser />
      <Wrap spacing="10px">
        <Container w="600px" h="500px" bg="Beige.200" flexDir={'row'} >
          <br /><br />
          <Text fontSize='70px' fontWeight='bold'>KNOWLEDGE ISNT POWER UNTIL IT IS APPLIED</Text>
          <br /><br />
          <HStack spacing={5}>
            <Button data-testid="instructor-signup" colorScheme='teal' variant='solid' 
              onClick={() => {
                router.push('/instructorsignup');
              }}>
                SignUp for Instructor
            </Button>
            <Button data-testid="instructor-signin" colorScheme='teal' variant='solid'  
              onClick={() => {
                router.push('/instructorsignin');
              }}>
                SignIn for Instructor
            </Button>
            <Button data-testid="dashboard" colorScheme='teal' variant='solid' 
              onClick={() => {
                router.push('/dashboard');
              }}>
                Go to Dashboard
            </Button>
          </HStack>
        </Container>
     
        <WrapItem>
          <Center w="950px" h="800px" bg="Beige.200">
            <Image src='/devices.png' alt='devicespage' w='850px' h='500px' />
          </Center>
        </WrapItem>
      </Wrap>
    </div>
  );
}
