import React from 'react'
import PropTypes from 'prop-types'

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random()*2000)
    return `https://picsum.photos/350/200?random=${randomId} `
}

function RandomPhoto(props) {
    const { name, imageUrl, onImageUrlChange, onRandomButtonBlur} = props
    
    const handleRandomPhoto = async() => {
        if (onImageUrlChange){
            const randomImageUrl = getRandomImageUrl()
            onImageUrlChange(randomImageUrl)
        }
    }
    return (
        <div className="random-photo-box">
            <span className="btn-outline br-theme"
                    name={name}
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhoto}
            >Random a Photo</span>
            <div className="random-photo">
                { imageUrl && (
                    <img src={imageUrl} 
                     alt="Ooops ... not found. Please click random again!"
                     onError={handleRandomPhoto}   
                    />
                )}
            </div>
        </div>
    )
}

RandomPhoto.propTypes = {
    name:PropTypes.string,
    imageUrl:PropTypes.string,
    onImageUrlChange:PropTypes.func,
    onRandomButtonBlur:PropTypes.func
}

RandomPhoto.defaultProps = {
    name:'',
    imageUrl:'',
    onImageUrlChange:null,
    onRandomButtonBlur:null,
}

export default RandomPhoto

