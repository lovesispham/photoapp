import React from "react";
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { PHOTO_CATEGORY_OPTIONS } from "../constants/global";
import InputField from '../custom-fields/InputField';
import SelectField from '../custom-fields/SelectField';
import RandomPhotoField from '../custom-fields/RandomPhotoField';
import { Formik, Form, FastField } from "formik";
import * as Yup from 'yup'
import Spinner from "./Spinner";
PhotoForm.propTypes={
    PhotoForm:PropTypes.func
}

PhotoForm.defaultProps={
    onSubmit:null,
}
function PhotoForm(props){
    const {initialValues, isAddMode} = props

    const validationSchema = Yup.object().shape({
        title:Yup.string().required('This filed is required.'),

        categoryId:Yup.number().required('This field is required').nullable(),

        photo:Yup.string().required('This field is required')
    })

    

  return (
    <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit = {props.onSubmit}
    >
      {formikProps => {
        
        //do something here ....
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
                // props FastField
                name="title"
                component={InputField}

                // props input field
                label="Title"
                placeholder="Enter title here..."
            />
            <FastField 
                name="categoryId"
                component={SelectField}

                label="Category"
                placeholder="What's your photo category"
                options={PHOTO_CATEGORY_OPTIONS}

            />

            <FastField 
                name="photo"
                component={RandomPhotoField}

                label="Photo"

            />
            <div className="form-input"><button type="submit" className="btn bg-theme">
            {isAddMode ? 'Add Photo' : 'Update Photo'}
            
            </button></div>
            {
                isSubmitting &&
                 ReactDOM.createPortal(
                    <React.Fragment>
                        <Spinner />
                        </React.Fragment>,
                    document.body
                    )
                    
            }   
          </Form>
        );
      }}
    </Formik>
  );
};

export default PhotoForm;
