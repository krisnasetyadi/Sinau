import {
  Box, Flex, HStack, Button, Menu,
  useDisclosure, useColorModeValue, useColorMode, Stack, Image, Text
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import SignOutUser from '../components/SignOutUser';


export default function Navvbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <>
      <Box data-testid="navbar-home" bg={useColorModeValue('red.300', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Image src='/book.png' alt='bookLogo' borderRadius='full' boxSize='50px' />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Text fontSize='20px'>Welcome to</Text>
              <Text fontSize='30px' fontWeight='bold'>Sinau.id</Text>
              <Text fontSize='20px' fontWeight=''>by SeTEAM</Text>
              ))
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>



            <Menu>

              <Button
                as={Button} rounded={'full'} variant={'solid'}
                cursor={'pointer'} minW={0} right={4}
                onClick={() => {
                  router.push('/signin');
                }}
              >
                Student SignIn
              </Button>

              <Button
                as={Button} rounded={'full'} variant={'solid'}
                cursor={'pointer'} minW={0} spacing={3} right={3}
                onClick={() => {
                  router.push('/signup');
                }}
              >
                Student SignUp
              </Button>
              {/* signout button */}
              < SignOutUser />
              <Button onClick={toggleColorMode} data-testid={`navbar-${colorMode}`}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Menu>

          </Flex>
        </Flex>
      </Box>
    </>
  );
}