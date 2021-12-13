import {createSlice} from '@reduxjs/toolkit'

import { v4 as uuidv4 } from 'uuid'; 




const initialPhotos = [
    {
        id:uuidv4(),
        categoryId:5,
        photo:'https://picsum.photos/350/200?random=1098',
        title:'demo 1'
    },
    {
        id:uuidv4(),
        categoryId:3,
        photo:'https://picsum.photos/350/200?random=555',
        title:'demo 2'
    },
    {
        id:uuidv4(),
        categoryId:2,
        photo:'https://picsum.photos/350/200?random=432',
        title:'demo 3'
    }
]





const photo = createSlice({
    name:'photos',
    initialState:initialPhotos,
    reducers: {
        addPhoto:(state, action) => {
            // const newPhoto = action.payload
            // state.push(newPhoto)
            state.push(action.payload)
        },
        removePhoto:(state,action) => {
            const removePhotoId = action.payload
            return state.filter(photo => photo.id !== removePhotoId)
            
        },
        updatePhoto:(state,action) => {
            const newPhoto = action.payload;
            const photoIndex = state.findIndex(photo => photo.id === newPhoto.id)

            if(photoIndex >= 0){
                state[photoIndex] = newPhoto
            }
        }

    }
})

const {reducer, actions} = photo;
export const {addPhoto, removePhoto, updatePhoto} = actions
export default reducer