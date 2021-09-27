import React from 'react';

function UploadFileButton(props) {
    const onChange = (e) => {
        const file = e.target.files[0];
        const storageRef = props.storage.ref()
        const fileRef = storageRef.child(file.name)
        fileRef.put(file).then(() => {
            console.log("Uploaded a file")
        })
    }
    return(
        <input type="file" onChange={onChange}/>
    );
}

export default UploadFileButton;