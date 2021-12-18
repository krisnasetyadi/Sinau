import {
  Box, Flex, HStack, Text
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import firebase from '../../config/firebase';

export default  function Navvbar() {
  const router = useRouter();
  const user =  firebase.auth().currentUser;
  return (
    <>
      <Box data-testid="navbar-home"  px={4}>
        <Flex h={10} alignItems={'center'} justifyContent={'center'}>
          <HStack spacing={8} alignItems={'right'}>
            <Text fontSize='20px' fontWeight='' > {
              user ? 'Welcome, ' + localStorage.getItem('displayName') + ' !!' : ''
            } </Text>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}