import AddNewVideoForm from '../components/AddNewVideoForm';
import { Wrap, WrapItem, Center } from '@chakra-ui/layout';
import Navvbar from '../components/navvbar';
import Layout from '../components/Layout/';
function NewVideoPage() {

  function AddVideoData(videoData) {
    fetch(
      'https://auth-sinau-cp10-default-rtdb.firebaseio.com/indexCourses.json',
      {
        method: 'POST',
        body: JSON.stringify(videoData),
        headers: {
          'Content-Type': 'application/json'
        },
      }
    );
    alert('data has been added successfuly');
  }

  return (
    <>
      <Navvbar />
      <Wrap justify={'center'} bg={'rgb(26, 32, 44);'}>

        <WrapItem >
          <Center>
            <section>
              <AddNewVideoForm onAddVideoData={AddVideoData} />
            </section>
          </Center>
        </WrapItem>
      </Wrap>
      <Layout/>
    </>
  );

}

export default NewVideoPage;