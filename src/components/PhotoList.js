import React from 'react'
import PropTypes from 'prop-types'
import PhotoCard from './PhotoCard'

PhotoList.propTypes = {
    onClickPhotoEdit: PropTypes.func,
    onClickPhotoRemove: PropTypes.func,
    photoList: PropTypes.array
  }

PhotoList.defaultProps = {
    photoList : [],
    onClickPhotoEdit:null,
    onClickPhotoRemove:null
}

function PhotoList(props) {
    const {photoList, onClickPhotoEdit,onClickPhotoRemove} = props
    return (
        <div className="photo-listing">
            <div className="container">
                <div className="row">
                    {
                        photoList.length === 0 ? (
                            <div className="nocart-list text-center">
                            <p>There is no photo. Click <a className="f600" href="/photo/add">here</a> upload new photo</p>
                        </div>
                        ) : (
                            <div>
                                {
                                    photoList.map((photo,index)=>(
                                        <div className="col-xs-4" key={index}>
                                            <PhotoCard 
                                                photo={photo}
                                                
                                                onClickEdit={onClickPhotoEdit}
                                                onClickRemove={onClickPhotoRemove}
                                            />
                                        </div>  
                                    ))
                                }
                            </div>
                            
                        )} 
                </div>
            </div>
        </div>
    )
}



export default PhotoList

