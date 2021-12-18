
import { useState } from 'react';

function UploadCldForm() {
  // const data_cloud_name = ${process.env.NEXT_CLDNRY_cloud_name}
  const [imageSelected, setImageSelected] = useState('');
  function UploadingFiles () {
    // console.log(files)
    const formData = new FormData();
    formData.append('file', imageSelected);
    formData.append('upload_preset', bqvneyqd);
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
  }
  return (
    <div>

      <div>
        <input type="file"
          onChange={(event) => {
            setImageSelected(event.target.files[0]);
          }} />
      </div>
      <div>
        <button onClick={UploadingFiles}> Upload Image </button>
      </div>


    </div>
  );
}

export default UploadCldForm;