import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PhotoList from '../components/PhotoList'
import Spinner from '../components/Spinner'
import { removePhoto } from '../redux/photo/photoSlice';
import {useHistory} from 'react-router-dom'


const Gallery = () => {
    const dispatch = useDispatch()

    const photos = useSelector(state => state.photos)
    const history = useHistory()

    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 500)
    },[])

    console.log('List of photos:',photos)

    const handlePhotoEdit = (photo) => {
        console.log('Edit:',photo.id)
        const editPhotoUrl = `/photo/${photo.id}`
        history.push(editPhotoUrl)
        console.log({editPhotoUrl})
    }

    const handlePhotoRemove = (photo) => {
        console.log('Remove:',photo)
        const removePhotoId = photo.id
        const action = removePhoto(removePhotoId)
        dispatch(action)
    }

    return (
        <div>
            {
            loading ? 
                <Spinner /> :
                <PhotoList 
                    photoList={photos}
                    onClickPhotoEdit={handlePhotoEdit}
                    onClickPhotoRemove={handlePhotoRemove}
                />
                }
        </div>
        
    )
}

export default Gallery
