import React from 'react';
import ReactDOM from 'react-dom';
import Display_model from '../DisplayModel';

// empty react component
export default function CheckFor3DModel(props) {
    if (props.data.image) {
        // Get the file name than check the extension
        const storageRef = props.storage.ref();
        const fileRef = storageRef.child(props.data.image)
        const fileExtension = fileRef.name.split('.').pop();

        if (fileExtension === 'gltf') {

            // Async, cant return anything. Dont know what to do
            fileRef.getDownloadURL().then((url) => {

                console.log(url) // Debug
                // document.getElementById(props.data.id + "-model").innerHTML = {
                //     __html: Display_model(url)
                // }

                ReactDOM.render(<Display_model model_no={1} url={url} controls={true} />, document.getElementById(props.data.id + "-model"))
                // return <Display_model url={url} controls={true} />
            })

            return <h1>Tester</h1>
        }
        else {
            return <>
                <img src="/images/default-image.jpg" alt="Image" id={props.data.id + "-popout"} className="cardImg-Big" />
                {getImage(props)}
            </>
        }
    }
    else {
        return <>
            <img src="/images/default-image.jpg" alt="Image" className="cardImg-Big" />
        </>
    }
}


function getImage(props) {
    if (props.data.image) {
        const storageRef = props.storage.ref();
        const fileRef = storageRef.child(props.data.image)

        fileRef.getDownloadURL().then((url) => {
            // console.log(url) // Debug
            const img = document.getElementById(props.data.id + "-popout")
            if (img) {
                img.setAttribute('src', url);
            }
        })
    }
}