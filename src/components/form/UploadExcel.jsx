import React, { useRef } from 'react'
import useFileUpload from 'react-use-file-upload';
import { CloudUploadRounded } from '@mui/icons-material'
import { ConfirmContainer } from './styles'
import { createBulkContact } from 'services/contacts.service';

const UploadExcel = () => {

    const {
        files,
        fileNames,
        // fileTypes,
        // totalSize,
        // totalSizeInBytes,
        handleDragDropEvent,
        // clearAllFiles,
        createFormData,
        setFiles,
        // removeFile,
    } = useFileUpload();

    const inputRef = useRef()

    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log(files)

        let data = {
            file: files[0]
        }
        console.log(data)

        try {

            const res = await createBulkContact(data)

            console.log(res)

        } catch (e) {
            console.log(e)
        }
    }

  return (
    <ConfirmContainer>
        <p className='confirm_text'>Upload CSV file to create new addresses</p>
        <div 
            onDragEnter={handleDragDropEvent}
            onDragOver={handleDragDropEvent}
            onDrop={(e) => {
                handleDragDropEvent(e);
                setFiles(e, 'a');
            }}
        >
            <CloudUploadRounded 
                sx={{fontSize: '96px', color: '#757AFF', cursor: 'pointer'}} 
                onClick={() => inputRef.current.click()}/>
            <input
                ref={inputRef}
                type="file"
                name='file'
                style={{ display: 'none' }}
                onChange={(e) => {
                    setFiles(e, 'a');
                    inputRef.current.value = null;
                }}
            />
            <span className='span'>{fileNames[0]}</span>
            <button type='button' className='upload_button' onClick={handleSubmit}>Upload File</button>
        </div>
    </ConfirmContainer>
  )
}

export default UploadExcel