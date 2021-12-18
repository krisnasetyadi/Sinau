import React, { useEffect } from 'react';
import firebase from '../config/firebase';
import Navbar from '../components/navbardashboard.js';
import Sidebar from '../components/sidebardashboard.js';
import { Input, Text, FormControl, Image,FormLabel, Switch, Menu, MenuButton, MenuList, Button, MenuItem, Container } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Footer from '../components/footer';
const db = firebase.firestore();

const AddCourses = () => {
  const [fileUrl, setFileUrl] = React.useState(null);
  const [users, setUsers] = React.useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
    console.log(file.type);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const coursename = e.target.coursename.value;
    const filetype = e.target.type;
    if (!username || !fileUrl) {
      return;
    }
    await db.collection('users').doc(username).set({
      name: username,
      avatar: fileUrl,
      type: filetype,
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection('users').get();

      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        }),
      );
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <title>Add Courses Page</title>

      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Container mt="-230px" ml="200px">
        <Text mb='8px'>Courses Name</Text>
        <form onSubmit={onSubmit}>
          <Input
            type="text"
            size='sm'
            width='300px'
            background='white'
            color='black'
            name="coursename"
          />
          <Text mb='8px' mt="20px">Description</Text>
          <Input
            size='sm'
            width='300px'
            background='white'
            color='black'
          />
          <FormControl display='flex' alignItems='center' mt="20px">
            <Switch size="lg" />
            <FormLabel ml="10px">
            Free?
            </FormLabel>
          </FormControl>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} background="white" color="black" mt="20px">
            File
            </MenuButton>
            <MenuList>
              <MenuItem>PDF</MenuItem>
              <MenuItem>MP4</MenuItem>
            </MenuList>
            <Input type="file" onChange={onFileChange} />
          </Menu>
        </form>
        <ul>
          {users.map((user) => {
            return (
              <li key={user.name}>
                <Image width="320" height="240" src={user.avatar} alt={user.name} />
                <video width="320" height="240" controls>
                  <source src={user.avatar} type="video/mp4" />
                </video>
                <p>{user.name}</p>
              </li>
            );
          })}
        </ul>
      </Container>
      <Footer/> 
    </div>
  );
};

export default AddCourses;