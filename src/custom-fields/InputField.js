import React from 'react'
import PropTypes from 'prop-types';


InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
  };
InputField.defaultProps = {
    type:'text',
    label:'',
    placeholder:'',
    disabled:false
}
function InputField(props) {
    const {
        field, form,
        type,label,disabled
    } = props

    const {name} = field

    const{errors, touched} = form
    const showError = errors[name] && touched[name]
    return (
        <div className={`form-input ${showError ? 'error' : ''}` }>
              { label && <label htmlFor={name} className="label-name">{label}</label>}

              <input
                id={name}
                {...field}
                
                type={type}
                disabled={disabled}
                className="form-control"
                placeholder="Enter title here..."
              />
              {showError && <p className="error-msg">{errors[name]}</p>}
            </div>
    )
}

export default InputField
