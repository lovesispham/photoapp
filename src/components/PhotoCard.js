import React from 'react'
import PropTypes from 'prop-types'

PhotoCard.defaultProps = {
    photo: {},
    onClickEdit:null,
    onClickRemove:null,
}

function PhotoCard(props) {
    const {photo, onClickEdit, onClickRemove} = props

    const handleClickEdit = () => {
        onClickEdit(photo)
    }

    const handleClickRemove = () => {
        onClickRemove(photo)
    }

    return (
        <div className="item">
            <div className="photo">
            <img src={photo.photo} alt={photo.title}/>
            <div className="info">
                <h3 className="title">{photo.title}</h3>
                <div className="btn-g">
                    <span className="btn-outline" onClick={handleClickEdit}>Edit</span>
                    <span className="btn-outline" onClick={handleClickRemove}>Remove</span>
                </div>
            </div>
            </div>
            
            
        </div>
    )
}

PhotoCard.propTypes = {
  onClickEdit: PropTypes.func,
  onClickRemove: PropTypes.func,
  photo: PropTypes.object
}

export default PhotoCard

