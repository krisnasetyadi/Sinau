// import styles from '../styles/homepage.module.css';
import { Wrap, WrapItem, Center, Box, Heading, Container } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Badge } from '@chakra-ui/layout';
import { StarIcon } from '@chakra-ui/icons';
import { ChakraProvider } from '@chakra-ui/react';
export default function Homes() {
  const property = {
    imageUrl: '/stats.png',
    imageAlt: 'Rear view of modern home with pool',
    author1: 'Daniel Costa',
    author2: 'John Doe',
    title: 'Data Science Course from Zero to Hero',
    formattedPrice: 'Rp. 1000.000',
    reviewCount: 34,
    rating: 4,
  };
  return (
    <ChakraProvider>
      <Box w='100%' h='200px' bgGradient={'linear(to-l, #7928CA, #FF0080)'} />
      <Heading>Lets Start Learning, Budi</Heading>
      <Container display='contents' >
        <Center>
          <Wrap >
            <WrapItem>
              <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={property.imageUrl} alt={property.imageAlt} />
                <Box p='6'>
                  <Box display='flex' alignItems='baseline'>
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
                        Instructor : {property.author1}  &bull; {property.author2}
                    </Box>
                  </Box>
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                  >
                    {property.title}
                  </Box>
                  <Box>
                    {property.formattedPrice}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / wk
                    </Box>
                  </Box>

                  <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={property.imageUrl} alt={property.imageAlt} />

                <Box p='6'>
                  <Box display='flex' alignItems='baseline'>
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
                        Instructor : {property.author1}  &bull; {property.author2}
                    </Box>
                  </Box>
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                  >
                    {property.title}
                  </Box>
                  <Box>
                    {property.formattedPrice}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / wk
                    </Box>
                  </Box>

                  <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={property.imageUrl} alt={property.imageAlt} />

                <Box p='6'>
                  <Box display='flex' alignItems='baseline'>
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
                        Instructor : {property.author1}  &bull; {property.author2}
                    </Box>
                  </Box>

                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                  >
                    {property.title}
                  </Box>

                  <Box>
                    {property.formattedPrice}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / wk
                    </Box>
                  </Box>

                  <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
            </WrapItem>
          </Wrap>
        </Center>
        <Center>
          <Wrap>
            <WrapItem>
              <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={property.imageUrl} alt={property.imageAlt} />
                <Box p='6'>
                  <Box display='flex' alignItems='baseline'>
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
                        Instructor : {property.author1}  &bull; {property.author2}
                    </Box>
                  </Box>
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                  >
                    {property.title}
                  </Box>
                  <Box>
                    {property.formattedPrice}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / wk
                    </Box>
                  </Box>
                  <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={property.imageUrl} alt={property.imageAlt} />
                <Box p='6'>
                  <Box display='flex' alignItems='baseline'>
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
                        Instructor : {property.author1}  &bull; {property.author2}
                    </Box>
                  </Box>
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                  >
                    {property.title}
                  </Box>
                  <Box>
                    {property.formattedPrice}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / wk
                    </Box>
                  </Box>
                  <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={property.imageUrl} alt={property.imageAlt} />
                <Box p='6'>
                  <Box display='flex' alignItems='baseline'>
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
                        Instructor : {property.author1}  &bull; {property.author2}
                    </Box>
                  </Box>
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                  >
                    {property.title}
                  </Box>

                  <Box>
                    {property.formattedPrice}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / wk
                    </Box>
                  </Box>
                  <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
            </WrapItem>
          </Wrap>
        </Center>
      </Container>
    </ChakraProvider>

  );
}