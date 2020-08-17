import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
// our hooks are for handling the uploads

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // refernces
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');
        // this will upload the file to the refrence. it is async
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes)* 100;
            setProgress(percentage);
        }, (err) =>{
            setError(err);
        }, async() => {
            const url = await storageRef.getDownloadURL(); //the image url will be saved in the firebase
            const createdAt = timestamp(); // this is a firebase timestamp that was created in the config file
            collectionRef.add({ url, createdAt }) // createdAt is a time stamp for when the doc was created
            setUrl(url);
        })
    }, [file])

    return { progress, url, error }
}

export default useStorage;