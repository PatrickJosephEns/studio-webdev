import React from 'react';
import Display_model from '../DisplayModel';

// empty react component
export default class CheckFor3DModel extends React.Component {
    // empty constructor
    constructor(props) {
        super(props);
    }

    CheckFor3DModel() {
        if (this.props.data.image) {
            // Get the file name than check the extension
            const storageRef = this.props.storage.ref();
            const fileRef = storageRef.child(this.props.data.image)
            const fileExtension = fileRef.name.split('.').pop();

            if (fileExtension === 'gltf') {

                // Async, cant return anything. Dont know what to do
                fileRef.getDownloadURL().then((url) => {
                    console.log(url) // Debug
                    return <Display_model url={url} controls={true} />
                })
            }
            else {
                return <>
                    <img src="/images/default-image.jpg" alt="Image" id={this.props.data.id + "-popout"} className="cardImg-Big" />
                    {this.getImage(this.props, this.props.data.id + "-popout")}
                </>
            }
        }
    }

    getImage(props, imgId) {
        if (props.data.image) {
            const storageRef = props.storage.ref();
            const fileRef = storageRef.child(this.props.data.image)

            fileRef.getDownloadURL().then((url) => {
                // console.log(url) // Debug
                const img = document.getElementById(imgId)
                if (img) {
                    img.setAttribute('src', url);
                }
            })
        }
    }

    render() {
        return <>
            {this.CheckFor3DModel()}
        </>
    }
}

