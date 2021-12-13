import React from 'react'
import PropTypes from 'prop-types'
import Select from "react-select";
function SelectField(props) {
    const {
        field,form,
        
        options,label,placeholder,disabled
    } = props
    const {name, value}= field

    const{errors, touched} = form
    const showError = errors[name] && touched[name]

    const selectedOption = options.find(option => option.value === value)

    const handleSelectedOption = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption

        const changeEvent = {
            target: {
                name:name,
                value:selectedValue
            }
        }
        field.onChange(changeEvent)
    }


    return (
        <div className="form-input">
              { label && <label htmlFor={name} className="label-name">{label}</label> }
              <Select 
                  id = {name}
                  {...field}
                  value={selectedOption}
                  onChange={handleSelectedOption}

                  placeholder={placeholder}
                  isDisabled={disabled}
                  options={options}
              />

                {showError && <p className="error-msg">{errors[name]}</p>}
        </div>
    )
}

SelectField.propTypes = {
    field:PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label:PropTypes.string,
    placeholder:PropTypes.string,
    disabled:PropTypes.bool,
    options:PropTypes.array
}

SelectField.defaultProps ={
    label:'',
    placeholder:'',
    disabled:false,
    options:[],
}


export default SelectField

