import React from 'react'
import PhotoForm from '../components/PhotoForm'
import {useDispatch, useSelector} from 'react-redux'
import { addPhoto, updatePhoto } from '../redux/photo/photoSlice';
import {useHistory, useParams} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'; 




const AddEdit = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {photoId} = useParams()

    const isAddMode = !photoId

    const editedPhoto = useSelector(state => {
        const foundPhoto = state.photos.find(x => x.id === photoId);
        console.log({ photos: state.photos, photoId, foundPhoto });
        return foundPhoto;
      });
      console.log({ photoId, editedPhoto })

    const initialValues = isAddMode
        ? {
            title:"",
            categoryId:null,
            photo:'',
            
        }
        : editedPhoto

    console.log({photoId})
    const handleSubmit = (values) => {
        return new Promise(resolve => {

            console.log('Form submit:',values)

            setTimeout(()=> {
                if (isAddMode) {
                    const newPhoto = {
                        ...values,
                        id:uuidv4()
                    }
                    const action = addPhoto(newPhoto)
                    console.log({action})
                    dispatch(action)
                    
                } else{
                    // do something
                    const action = updatePhoto(values)
                    dispatch(action)
                }
        
                history.push('/photo')
                resolve(true)
            }, 1000)
        })
        

        
        
    }

    return (
        <div className="photo-form">
            <div className="container">
            <PhotoForm 
                isAddMode ={isAddMode}
                initialValues ={initialValues}
                onSubmit={handleSubmit}/>
            </div>
        </div>
    )
}

export default AddEdit
