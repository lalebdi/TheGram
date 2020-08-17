import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) =>{  // here we're listening to the database and creating docs of them everytime an image is uploaded
            let documents = [];
            snap.forEach(doc =>{ // cycles through the documents in the db 
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents) // to update the documents 
        });
        //  the documents will be in sync with the fb db
        return() => unsub();
    }, [collection])
    return { docs };
}

export default useFirestore;
