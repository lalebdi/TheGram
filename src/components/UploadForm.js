import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { useAuth0 } from '@auth0/auth0-react';

const UploadForm = () => {
    const [file, setFile]= useState(null);
    const [error , setError] = useState(null);
    // below I'm selecting what's allowed to be uploaded
    const types = ['image/png' , 'image/jpeg'];

    const { isAuthenticated } = useAuth0();

    const changeHandler = (e) => {
        // console.log("changed");
        let selected = e.target.files[0];
        // console.log(selected);
        // the if statement below is to ensure that the state is updated when a file is selected
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError(''); // this is so the error message disappear one an image file is selected
        } else{
            setFile(null); // reseting the file
            setError('Please select an image file');
        }
    }

    return (
      isAuthenticated && (
        <form>
        <label>
          <input type="file" onChange={changeHandler} />
          <span>+</span>
        </label>
        <div className="output">
          { error && <div className="error">{ error }</div>}
          { file && <div>{ file.name }</div> }
          { file && <ProgressBar file={file} setFile={setFile} /> }
        </div>
      </form>
      )
    )
}

export default UploadForm;
