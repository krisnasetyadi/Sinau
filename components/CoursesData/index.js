import styles from '../../styles/coursedata.module.css';
import { Wrap, WrapItem, Text, Center, Flex, Box, Heading, Container, Stack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Badge } from '@chakra-ui/layout';
import { StarIcon } from '@chakra-ui/icons';
import { ChakraProvider } from '@chakra-ui/react';
import { useContext } from 'react';
import { VidCoursesContextProvider } from '../../context/AddVideoContext';

export default function CoursesData(props) {
  const property = [
    {
      id: 0,
      imageUrl: '/stats.png',
      imageAlt: 'Learn with the best Mentor',
      author1: 'Daniel Costa',
      author2: 'John Doe',
      title: 'Data Science Course from Zero to Hero',
      formattedPrice: 'Rp. 1000.000',
      reviewCount: 34,
      rating: 4,
    }];
  return (
    <ChakraProvider>
      <Box w='100%' h='200px' bgGradient='linear(to-l, #7928CA, #FF0080)' />
      <Heading>Lets Start Learning </Heading>
      <br/><br/>
      <Heading as='h3' size='md'> All Available Videos</Heading>
      <Container display='contents'>
        <Wrap>
          {props.availVideos.map((data) => {
            return (
            
              <Center key={data.id}>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' >
                  <Image src='/stats.png' alt={property.imageAlt} />
                  <Box p='6'>
                    <Box display='flex' >
                      <Badge borderRadius='full' px='2' colorScheme='teal'>
                      New
                      </Badge>
                      <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                      >
                      Instructor : {data.author1}  &bull; {data.author2}
                      </Box>
                    </Box>
                    <Box
                      mt='1'
                      fontWeight='semibold'
                      as='h4'
                      lineHeight='tight'
                      isTruncated
                    >
                      <a href='CoursePage'>{data.title}</a>
                    </Box>
                    <Box>
                      {data.price}
                      <Box as='span' color='gray.600' fontSize='sm'>
                      / wk
                      </Box>
                    </Box>
                    <Box display='flex' mt='2'>
                      {Array(5)
                        .fill('')
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            color={i < data.rating ? 'teal.500' : 'gray.300'}
                          />
                        ))}
                      <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {data.reviewCount} reviews
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Center>
                     


            );
          })}
        </Wrap>
      </Container>
    </ChakraProvider>

  );
}