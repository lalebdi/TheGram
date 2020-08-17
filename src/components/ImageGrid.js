import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images'); // <- the images is the name in the firebase database
    console.log(docs);
    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}
                onClick ={ () => setSelectedImg(doc.url)}
                >
                    <img src={doc.url} alt="gram uploads" />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;
