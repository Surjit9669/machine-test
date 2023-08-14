import React, { useState } from 'react'
import Header from './Header'
import { upload } from '../apiRequest';

const UploadVideo = () => {


    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const uploadApi = async (data) => {
        await upload(data, {
            onUploadProgress: (progressEvent) => {
                const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                setUploadProgress(progress);
            },
        }).then((res) => {
            console.log('Upload completed:', res.data);

        }).catch((error) => console.log(error))
    }

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('video', file);
        uploadApi(formData)

    };
    return (
        <div className='uploadPage'>
            <Header />
            <div>
                <input type="file" accept="video/*" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload</button>
                {uploadProgress > 0 && <div>Upload Progress: {uploadProgress}%</div>}
            </div>
        </div>
    )
}

export default UploadVideo