import { CSpinner } from '@coreui/react'
import { AddCircleRounded } from '@mui/icons-material'
import React, { useState } from 'react'
// import { updateBulkContacts } from 'services/contacts.service'
import { ButtonFilled, FormControlSmall, MultiFormContainer, Option } from './styles'

const EditMultipleContact = ({ formik, handleChange, handleSubmit, isSubmitting }) => {
    const [addNew, setAddNew] = useState(false)

    const options = [
        { value: '', label: 'Select Gender' },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Others', label: 'Others' }
    ]

    const {firstName, lastName, gender, phone } = formik

    // const handleMultipleData = async (e) => {
    //     let multiFormElement = document.getElementById('multiForm')

    //     e.preventDefault()
    //     const formData = new FormData(multiFormElement)

    //     console.log([...formData.entries()])

    //     const res = await updateBulkContacts(formData)

    //     console.log(res)
    // }


  return (
    <MultiFormContainer>
        <div className='multi_banner'>
            <p className='heading'>Update Multiple Address</p>
        </div>
        <form className='form_container' name='multiForm' id='multiForm' onSubmit={handleSubmit} encType='multipart/form-data'>
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
            <div className={addNew ? 'form_group form_group_entry' : 'form_group form_group_none'}>
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
            <ButtonFilled type='button' disabled={isSubmitting} onClick={()=>setAddNew(true)}>
                <AddCircleRounded sx={{ fontSize: '24px'}}/> Add New Entry
            </ButtonFilled>
            <ButtonFilled type='submit' disabled={isSubmitting}>
                {!isSubmitting ? (<><AddCircleRounded sx={{ fontSize: '24px'}}/> Update Address</>) : (<CSpinner size="sm" component="span"/>)}
            </ButtonFilled>
        </form>
    </MultiFormContainer>
  )
}

export default EditMultipleContact