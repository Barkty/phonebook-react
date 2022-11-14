import { CSpinner } from '@coreui/react'
import { AddCircleRounded } from '@mui/icons-material'
import React from 'react'
import { ButtonFilled, FormControl, FormControlSmall, MultiFormContainer, Option } from './styles'

const EditMultipleContact = ({ formik, handleChange, handleSubmit, isSubmitting }) => {
    const options = [
        { value: '', label: 'Select Gender' },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Others', label: 'Others' }
    ]

    const {firstName, lastName, gender, phone } = formik

  return (
    <MultiFormContainer>
        <div className='multi_banner'>
            <p className='heading'>Update Multiple Address</p>
        </div>
        <form className='form_container' name='multiForm' onSubmit={handleSubmit}>
            <div className='form_group'>
                <FormControlSmall>
                    <label htmlFor='firstName'>First Name:</label>
                    <div className='input'>
                        <input type='text' name='firstName' placeholder='First Name' value={firstName} onChange={handleChange}/>
                    </div>
                </FormControlSmall>
                <FormControlSmall>
                    <label htmlFor='lastName'>Last Name:</label>
                    <div className='input'>
                        <input type='text' name='lastName' placeholder='Last Name' value={lastName} onChange={handleChange}/>
                    </div>
                </FormControlSmall>
                <FormControlSmall>
                    <label htmlFor='phone'>Phone:</label>
                    <div className='input'>
                        <input type='text' name='phone' placeholder='Phone' value={phone} onChange={handleChange}/>
                    </div>
                </FormControlSmall>
                <FormControlSmall>
                    <label htmlFor='gender'>Gender:</label>
                    <div className='input'>
                        <select placeholder='Select Gender'
                        value={gender} onChange={handleChange}
                        name='gender'>
                            {options.map((option, index) => (
                                <Option  value={option.value} key={index}>{option.label}</Option>
                            ))}
                        </select>
                    </div>
                </FormControlSmall>
            </div>
            <div className='form_group'>
                <FormControlSmall>
                    <label htmlFor='firstName'>First Name:</label>
                    <div className='input'>
                        <input type='text' name='firstName#01' placeholder='First Name' value={firstName} onChange={handleChange}/>
                    </div>
                </FormControlSmall>
                <FormControlSmall>
                    <label htmlFor='lastName'>Last Name:</label>
                    <div className='input'>
                        <input type='text' name='lastName#01' placeholder='Last Name' value={lastName} onChange={handleChange}/>
                    </div>
                </FormControlSmall>
                <FormControlSmall>
                    <label htmlFor='phone'>Phone:</label>
                    <div className='input'>
                        <input type='text' name='phone#01' placeholder='Phone' value={phone} onChange={handleChange}/>
                    </div>
                </FormControlSmall>
                <FormControlSmall>
                    <label htmlFor='gender'>Gender:</label>
                    <div className='input'>
                        <select placeholder='Select Gender'
                        value={gender} onChange={handleChange}
                        name='gender#01'>
                            {options.map((option, index) => (
                                <Option  value={option.value} key={index}>{option.label}</Option>
                            ))}
                        </select>
                    </div>
                </FormControlSmall>
            </div>
            <ButtonFilled type='submit' disabled={isSubmitting}>
                {!isSubmitting ? (<><AddCircleRounded sx={{ fontSize: '24px'}}/> Update Address</>) : (<CSpinner size="sm" component="span"/>)}
            </ButtonFilled>
        </form>
    </MultiFormContainer>
  )
}

export default EditMultipleContact