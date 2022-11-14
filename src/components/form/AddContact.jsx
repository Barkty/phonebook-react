import React from 'react'
import { Avatar } from '@mui/material'
import { ButtonFilled, ErrorMessage, FormContainer, FormControl, Option } from './styles'
import { AddCircleRounded } from '@mui/icons-material'
import { CSpinner } from '@coreui/react'

const AddContact = ({ formik }) => {
  const options = [
    { value: '', label: 'Select Gender' },
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Others', label: 'Others' }
  ]

  const {handleBlur, handleChange, handleSubmit, isSubmitting, resetForm, values: { firstName, lastName, gender, phone }, errors: { firstName: firstNameError, lastName: lastNameError, gender: genderError, phone: phoneError }, touched: { firstName: firstNameTouched, lastName: lastNameTouched, gender: genderTouched, phone: phoneTouched }} = formik
  
  return (
    <FormContainer>
      <div className='add_banner'>
        <Avatar sx={{width: '92px', height: '92px', marginBottom: '30px', position: 'relative', top: '-25px'}}/>
      </div>
      <form className='form_container' onSubmit={handleSubmit}>
        <FormControl>
          <label htmlFor='firstName'>First Name:</label>
          <div className='input'>
            <input type='text' name='firstName' placeholder='First Name' value={firstName} onChange={handleChange} onBlur={handleBlur}/>
          </div>
          {(firstNameTouched && firstNameError) && (<ErrorMessage>{firstNameError}</ErrorMessage>)}
        </FormControl>
        <FormControl>
          <label htmlFor='lastName'>Last Name:</label>
          <div className='input'>
            <input type='text' name='lastName' placeholder='Last Name' value={lastName} onChange={handleChange} onBlur={handleBlur}/>
          </div>
          {(lastNameTouched && lastNameError) && (<ErrorMessage>{lastNameError}</ErrorMessage>)}
        </FormControl>
        <FormControl>
          <label htmlFor='phone'>Phone:</label>
          <div className='input'>
            <input type='text' name='phone' placeholder='Phone' value={phone} onChange={handleChange} onBlur={handleBlur}/>
          </div>
          {(phoneTouched && phoneError) && (<ErrorMessage>{phoneError}</ErrorMessage>)}
        </FormControl>
        <FormControl>
          <label htmlFor='gender'>Gender:</label>
          <div className='input'>
            <select placeholder='Select Gender'
              value={gender} onChange={handleChange} onBlur={handleBlur}
              name='gender'>
                  {options.map((option, index) => (
                    <Option  value={option.value} key={index}>{option.label}</Option>
                  ))}
            </select>
          </div>
          {(genderTouched && genderError) && (<ErrorMessage>{genderError}</ErrorMessage>)}
        </FormControl>
        <ButtonFilled type='submit' disabled={isSubmitting}>
          {!isSubmitting ? (<><AddCircleRounded sx={{ fontSize: '24px'}}/> Add Address</>) : (<CSpinner size="sm" component="span"/>)}
        </ButtonFilled>
      </form>
    </FormContainer>
  )
}

export default AddContact