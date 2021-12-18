import styles from '../styles/footer.module.css';
import Link from 'next/link';
import { Stack, Center, Container } from '@chakra-ui/layout';



const Footer = (props) => {
  return (
    <Container className={styles.foot}>
      <Center>


        <Stack direction={'row'}
          justifyContent={'space-evenly'}
          spacing={'60px'}
          id="footer"
          marginBottom={'10px'}>

          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="#">
            <a>Contact Us</a>
          </Link>
          <Link href="#">
            <a>© 2021</a>
          </Link>
        </Stack>
      </Center>

    </Container>
  );
};

export default Footer;