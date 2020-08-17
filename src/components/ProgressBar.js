import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file); // this hook will fire the useEffect and create a refrence and try to uplaod the file and we get vlaues for the progess.
    // console.log(progress, url);
    // below is a hook to remove the progress bar once there's a url. basically taking the setFile and have it set the file to null
    useEffect(() => {
        if(url){
            setFile(null)
        }
    }, [url, setFile])
    return (
        <motion.div className="progress-bar"
        initial={{ width: 0 }}
        animate= {{ width: progress + '%' }} >
            
        </motion.div>
    )
}

export default ProgressBar
