
import { useState } from 'react';

function UploadCldForm() {
  // const data_cloud_name = ${process.env.NEXT_CLDNRY_cloud_name}
  const [imageSelected, setImageSelected] = useState('');
  function UploadingFiles () {
    // console.log(files)
    const formData = new FormData();
    formData.append('file', imageSelected);
    formData.append('upload_preset', process.env.NEXT_CLDNRY_preset);
    // problem, data kredensial terlalu terexpose !!!!!!
    const address = `https://api.cloudinary.com/v1_1/${process.env.NEXT_CLDNRY_cloud_name}/image/upload`;
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
      <h1>The Home Page</h1>

      <div>
        <input type="file"
          onChange={(event) => {
            setImageSelected(event.target.files[0]);
          }} />

        <button onClick={UploadingFiles}> Upload Image </button>
      </div>
    </div>
  );
}

export default UploadCldForm;