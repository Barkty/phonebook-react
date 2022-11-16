import React from 'react'
import { Avatar } from '@mui/material'
import { AddCircleRounded } from '@mui/icons-material'
import { CSpinner } from '@coreui/react'
import { ButtonFilled, ErrorMessage, FormContainer, FormControl } from './styles'

const UploadExcel = ({ setFile, handleSubmit, fileError, isSubmitting}) => {

    const handleChange = (e) => {
        const { files } = e.target;
        setFile(files[0])
    }

  return (
    <FormContainer>
        <div className='add_banner'>
            <Avatar sx={{width: '92px', height: '92px', marginBottom: '30px', position: 'relative', top: '-25px'}}/>
        </div>
        <form className='form_container' onSubmit={handleSubmit} encType='multipart/form-data'>
            <FormControl>
                <label htmlFor='firstName'>Upload Excel:</label>
                <div className='input'>
                    <input type='file' accept=".xlsx" name='file' placeholder='First Name' onChange={handleChange}/>
                </div>
                {(fileError) && (<ErrorMessage>{fileError}</ErrorMessage>)}
            </FormControl>
            <ButtonFilled type='submit' disabled={isSubmitting}>
                {!isSubmitting ? (<><AddCircleRounded sx={{ fontSize: '24px'}}/> Upload File</>) : (<CSpinner size="sm" component="span"/>)}
            </ButtonFilled>
        </form>
    </FormContainer>
  )
}

export default UploadExcel