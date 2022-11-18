import React from 'react'
import { ConfirmContainer } from './styles'
import { CloudUploadRounded } from '@mui/icons-material'

const ConfirmDelete = ({ deleteMultiple, contactIds, setDeleteBulk, setDeleteMethod }) => {

    return (
        <ConfirmContainer>
            <p className='confirm_text'>Would you like to delete via upload or delete all?</p>

            <div className='confirm_flex'>
                <button type='button' className='delete_all' onClick={()=>{deleteMultiple(contactIds)}}>Delete All</button>
                <button type='button' className='delete_upload' onClick={()=>{setDeleteBulk(true); setDeleteMethod(false)}}>
                    <CloudUploadRounded sx={{fontSize: '20px', color: '#383858'}} />
                    Upload
                </button>
            </div>
        </ConfirmContainer>
    )
}

export default ConfirmDelete