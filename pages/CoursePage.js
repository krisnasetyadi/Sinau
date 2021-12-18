import {
  Flex,
  Heading,
  Text,
  Icon,
  Link,Button
} from '@chakra-ui/react';
import {title} from '../components/CoursesData/index';
import {
  FiHome,
  FiBook,
  FiUsers,
} from 'react-icons/fi';
import { cld } from '../config/cloudinary';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { useRouter } from 'next/router';
import Footer from '../components/footer';
function CoursePage(props) {
  const { url } = props;
  const themeColor = '#B2F5EA';
  const fontColor = '#@30c040';
  const titles = title;
  const router = useRouter();
  function toPdf(){
    try {
      router.push('/uploadpdf');
    }
    catch(err){
      console.error(err.message);
    }
  }

  return (
    <>
      <Flex h={[null, null, '100vh']}
        maxW="2000px"
        flexDir={['row', 'row', 'row']}
        overflow="hidden">
        {/* first col */}
        <Flex
          // w={["50%", "50%", "10%", "15%", "15%"]}
          w={['25%', '25%', '10%', '15%']}
          flexDir="column"
          alignItems="center"
          bgColor="#171A21"
          color="#FFF"
          overflow="hidden"
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
                fontSize={['4xl', '5xl', '1.5xl', '2xl']}
                alignSelf="center"
                letterSpacing="tight"
                display={{ base: 'column', md: 'none', ld: 'none' }}
              >
                              COURSE
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
                  <Link _hover={{ textDecor: 'none' }} display={['flex', 'flex', 'none', 'flex', 'flex']}>
                    <Text ml={3}><a href='AvailableCourses'>Other Courses</a></Text>
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

          </Flex>
        </Flex>

        {/* second col  */}
        <Flex w={['100%', '100%', '60%', '60%', '55%']}
          flexDir="column"
          overflow="auto"
          minH="100vh"
          ml={'10%'}>
          <Flex flexDir="row"
            mb={'20px'}>
            <Heading>WELCOME TO COURSE</Heading>

          </Flex>
          <Flex mb={'10px'}>
            <video
              // height="360"
              // width="720"
              controls
            >
              <source src={url} type="video/mp4"></source>
              {/* <source src={FetchVideo} type="video/mp4"></source>  */}
            </video>
          </Flex>
          <Flex flexDir="row">
            <section>
              <Button colorScheme="teal" mr="4" h="30px" w="100px" id="sendDt" onClick={toPdf} padding="5px">View PDF</Button>
              <br/>
              <Heading as='h2' size='md'> About This Course</Heading>
              <Text>Commonly asked questions
Where is the source code?
You will notice for A LOT of modules there is no source code. That is on purpose. If you simply copy and paste the code I write in every video you will not learn very much. This bootcamp is designed to help you learn and set you up for success. If you want to take the easy way out—this isnot the bootcamp for you. That is why it is called a bootcamp.
              <br/>
But thats only for the simple (I use that term lightly) subjects like <strong>HTML and JavaScript</strong>.
              <br/>
Other modules have the source code included because they are advanced, like Django. In some videos I will type A LOT of code and it is just too much to expect someone to remember it all and it is easier at that point to learn how to code by dissecting my code, breaking things, and fixing things.
              <br/>
              <br/>
What text editor do I use in these videos?
I use VS Code. Its free, powerful and flexible. Theres also an entire module on VS Code in this bootcamp.
              <br/><br/>
Where do I share my projects?
In each project lesson I will say something like, Share your project down below or Share your project in the project section. Sinau doesnt have a project section, per se, so please leave your project screenshots in the comment section and I will get a notification and review it ASAP.
              <br/><br/>
Will you be able to get a job by the end of this bootcamp?
Yes. There is even a module to show you exactly how to get a job as a web developer with industry tips, tricks and secrets.
This entire bootcamp is designed to turn you into a successful and efficient web developer. No student is left behind! 
              <br/><br/>
How often do I answer questions?
Every day. I check the Q and A first thing in the morning when I get up. I answer EVERY question. For further assistance, you can also join the Facebook group using this link: https://www.facebook.com/groups/398841427882502/ — You will either get an answer from me (Kalob Taulien) or my co-producer (Kane Ezki).</Text>
              <Footer/>
            </section>

          </Flex>

        </Flex>
      </Flex >
    </>

  );
}
export async function getServerSideProps(context) {

  const myVideo = cld.video('samples/sea-turtle');
  myVideo.resize(scale().width(800));
  // Get the URL of the video.
  const myURL = myVideo.toURL();

  return {
    props: { 
      url: myURL }, // will be passed to the page component as props
  };
}


export default CoursePage;
