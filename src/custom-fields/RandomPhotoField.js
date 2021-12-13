import React from 'react'
import PropTypes from 'prop-types'
import RandomPhoto from '../components/RandomPhoto'
function RandomPhotoField(props) {
    const {field, form, label} = props
    const {name,value,onBlur} = field


    const{errors, touched} = form
    const showError = errors[name] && touched[name]


    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl)
    }
    return (
        <div className="form-input">
              { label && <label htmlFor={name} className="label-name">{label}</label>}

              <RandomPhoto 
                    name={name}
                    imageUrl={value}
                    onImageUrlChange = {handleImageUrlChange}
                    onRandomButtonBlur ={onBlur}
              />
              {showError && <p className="error-msg">{errors[name]}</p>}
            </div>
    )
}

RandomPhotoField.propTypes = {
    field:PropTypes.object.isRequired,
    form:PropTypes.object.isRequired,

    label:PropTypes.string,
}

RandomPhotoField.defaultProps ={
    label:''
}

export default RandomPhotoField

