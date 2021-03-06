import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images'); // <- the images is the name in the firebase database
    // console.log(docs);
    const { isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                layout
                whileHover={{ opacity: 1 }}
                onClick ={ () => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="gram uploads" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1}}
                        />
                </motion.div>
            ))}
        </div>
        )
    )
}

export default ImageGrid;
