import {
  Flex, Heading, Center, Avatar, AvatarGroup, Text, Icon, IconButton, Link, Box, Button, Input, InputGroup, InputLeftElement, VStack, HStack
} from '@chakra-ui/react';
import {
  FiHome, FiBook,
  FiPlus, FiUsers, FiBell
} from 'react-icons/fi';
import { useState } from 'react';
import ProgressDashboard from '../components/ProgressDashboard/index';
import { ReadDataFromRDB } from '../components/ReadDataFromRDB.js';
import UploadVideoClD from '../components/UploadVideoCloudinary';
import SignOutUser from '../components/SignOutUser';
import Footer from '../components/footer';

function Dashboard() {
  const [value, changeValue] = useState(1);
  const themeColor = '#B2F5EA';
  const fontColor = '#@30c040';
  return (
    <>
      <Flex
        h={[null, null, '100vh']}
        maxW="2000px"
        flexDir={['column', 'column', 'row']}
        overflow="hidden"
      >
        {/* col 1 */}
        <Flex
          w={['100%', '100%', '10%', '15%']}
          flexDir="column"
          alignItems="center"
          bgColor="#171A21"
          color="#FFF"
        >
          <Flex
            flexDir="column"
            h={[null, null, '100vh']}
            justifyContent="space-between"
            color={fontColor}
          >
            <Flex
              flexDir="column"
              as="nav"
            >
              <Heading
                mt={50}
                mb={[25, 50, 100]}
                fontSize={['4xl', '5xl', '1.5xl', '2xl', '2xl',]}
                alignSelf="center"
                letterSpacing="tight"
              >
                            SeTEAM.
              </Heading>
              <Flex
                flexDir={['row', 'row', 'column', 'column', 'column']}
                align={['center', 'center', 'center', 'flex-start', 'flex-start']}
                wrap={['wrap', 'wrap', 'nowrap', 'nowrap', 'nowrap']}
                justifyContent="center"
              >
                <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} mb={6}>
                  <Link display={['none', 'none', 'flex', 'flex', 'flex']} >
                    <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                  </Link>
                  <Link href="/" _hover={{ textDecor: 'none' }} display={['flex', 'flex', 'none', 'flex', 'flex']}>
                    <Text className="active" ml={3} >Home</Text>
                  </Link>
                </Flex>
                <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} mb={6}>
                  <Link display={['none', 'none', 'flex', 'flex', 'flex']}>
                    <Icon as={FiBook} fontSize="2xl" />
                  </Link>
                  <Link href="/AvailableCourses" _hover={{ textDecor: 'none' }} display={['flex', 'flex', 'none', 'flex', 'flex']}>
                    <Text ml={3}>Other Courses</Text>
                  </Link>
                </Flex>
                <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} mb={6}>
                  <Link display={['none', 'none', 'flex', 'flex', 'flex']}>
                    <Icon as={FiUsers} fontSize="2xl" />
                  </Link>
                  <Link _hover={{ textDecor: 'none' }} display={['flex', 'flex', 'none', 'flex', 'flex']}>
                    <Text ml={3}>Instructor</Text>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
            <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
              <Avatar my={2} src="#" />
              <Text textAlign="center">TEST REDUX</Text>
            </Flex>
          </Flex>
        </Flex>

        {/* col2 */}
        <Flex
          w={['100%', '100%', '60%', '60%', '55%']}
          p="3%"
          flexDir="column"
          overflow="auto"
          minH="100vh">
          <VStack
            spacing={4}
            align="stretch"
          >
            <Box >
              <Heading
                fontWeight="normal"
                mb={4}
                letterSpacing="tight"
                color={fontColor}
              >
                            Welcome back, <Flex display="inline-flex" fontWeight="bold">TEST REDUX</Flex>
              </Heading>
            </Box>
            <Box >
              <ProgressDashboard />
            </Box>

          </VStack>
        </Flex>

        {/* col 3 */}
 
        {/* col 4 */}
     
      </Flex>
      <Footer/>
    </>
  );
 
}


export default Dashboard;
