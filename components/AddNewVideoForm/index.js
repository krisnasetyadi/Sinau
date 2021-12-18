import CardFrame from '../Card';
import classes from './NewVideoForm.module.css';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Textarea } from '@chakra-ui/react';

function AddNewVideoForm(props) {

  const [vidSelected, setVidSelected] = useState('');
  const [nameFile, setNameFile] = useState('');

  const titleVideo = useRef();
  const email = useRef();
  const idVideo = useRef(nameFile);
  const description = useRef();
  const author1 = useRef();
  const author2 = useRef();
  const imageUrl = useRef();
  const formattedPrice = useRef();
  const router = useRouter();
  // const reviewCount: 34,
  // const rating: 4,
  

  function submitHandler(event) {
    // prevent browser default--> vanila javascript
    event.preventDefault();
    const enterTitle = titleVideo.current.value;
    const enterEmail = email.current.value;
    const enterIdVid = idVideo.current.value;
    const enterAuthor1 = author1.current.value;
    const enterAuthor2 = author2.current.value;
    const enterImageUrl = imageUrl.current.value;
    const enterFormattedPrice = formattedPrice.current.value;
    const enterDescription = description.current.value;



    // upload video
    const formData = new FormData();
    formData.append('file', vidSelected);
    formData.append('upload_preset', 'bqvneyqd');
    // problem, data kredensial terlalu terexpose !!!!!!
    const address = 'https://api.cloudinary.com/v1_1/di1kxmnrn/image/upload';
    fetch(address, {
      method: 'POST', // or 'PUT',
      body: formData,
    })
      .then(data => {
        console.log('success: ', data);

      })
      .catch((error) => {
        console.log('error: ', error);
      });

    const infoData = {
      title: enterTitle,
      email: enterEmail,
      idVideo: enterIdVid,
      desc: enterDescription,
      author1: enterAuthor1,
      author2: enterAuthor2,
      price: enterFormattedPrice,
      urlImage: enterImageUrl,
      reviewCount: 54,
      rating: 4,
    };
    // console.log(infoData);
    props.onAddVideoData(infoData);
    router.push('/AvailableCourses');
  }

  return (
    <CardFrame bg={'black'}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title-video">Video Title</label>
          <input type="text" required id="title-video" ref={titleVideo} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email-instructor">Email Instructor</label>
          <input type="text" required id="email-instructor" ref={email} />
        </div>
        <div className={classes.control}>
          <label htmlFor="id-video">Upload Video to Cloudinary</label>
          {/* <input type="file" required id="id-video" ref={idVideo} /> */}
          <input type="file"
            onChange={(event) => {
              setVidSelected(event.target.files[0]);
              
            }} ref={idVideo} />
        </div>
        <div className={classes.control}>
          <label htmlFor="author1">Author 1</label>
          <input type="text" required id="id-author1" ref={author1} />
        </div>
        <div className={classes.control}>
          <label htmlFor="author2">Author 2</label>
          <input type="text" required id="id-author2" ref={author2} />
        </div>
        <div className={classes.control}>
          <label htmlFor="imageUrl">URL Image in Cloud</label>
          <input type="text" required id="id-imageUrl" ref={imageUrl} />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Course Price</label>
          <input type="text" required id="id-formattedPrice" ref={formattedPrice} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Course Description</label>
          <Textarea type="text"  id="descripftion" required rows="5" description="course desc" ref={description} />
        </div>
        <div className={classes.actions}>
          {/* button inside <form> will fire after submitHandler clicked */}
          <button type="submit"> Add Data </button>
        </div>

      </form>
    </CardFrame>
  );
}

export default AddNewVideoForm;