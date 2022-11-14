import React from 'react'
import { Avatar } from '@mui/material'
import { ButtonFilled, FormContainer, FormControl } from './styles'
import Select from 'react-select'
import { AddCircleRounded } from '@mui/icons-material'

const EditContact = () => {
  const options = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Others', label: 'Others' }
  ]
    
  return (
    <FormContainer>
      <div className='edit_banner'>
        <Avatar sx={{width: '92px', height: '92px', marginBottom: '30px', position: 'relative', top: '-25px'}}/>
      </div>
      <form className='form_container'>
        <FormControl>
          <label htmlFor='firstName'>First Name:</label>
          <div className='input'>
            <input type='text' name='firstName' placeholder='First Name'/>
          </div>
        </FormControl>
        <FormControl>
          <label htmlFor='lastName'>Last Name:</label>
          <div className='input'>
            <input type='text' name='lastName' placeholder='Last Name'/>
          </div>
        </FormControl>
        <FormControl>
          <label htmlFor='phone'>Phone:</label>
          <div className='input'>
            <input type='text' name='phone' placeholder='Phone'/>
          </div>
        </FormControl>
        <FormControl>
          <label htmlFor='gender'>Gender:</label>
          <div className='input'>
            <Select
              options={options}
              className='select'
              placeholder='Select Gender'
            />
          </div>
        </FormControl>
        <ButtonFilled>
          <AddCircleRounded sx={{ fontSize: '24px'}}/> Update Address
        </ButtonFilled>
      </form>
    </FormContainer>
  )
}

export default EditContact