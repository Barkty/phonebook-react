import React, { useRef } from 'react'
import useFileUpload from 'react-use-file-upload';
import { CloudUploadRounded } from '@mui/icons-material'
import { ConfirmContainer } from './styles'
import { deleteBulkContacts } from 'services/contacts.service';
import { useSnackbar } from 'notistack';

const UploadDelete = ({ fetchContacts }) => {
    const { enqueueSnackbar } = useSnackbar();
    
    const handleSuccess = (message) => {
        enqueueSnackbar(message, {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
    };

    const handleFail = (message) => {
        enqueueSnackbar(message, {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
    };

    const {
        files,
        fileNames,
        // fileTypes,
        // totalSize,
        // totalSizeInBytes,
        handleDragDropEvent,
        // clearAllFiles,
        // createFormData,
        setFiles,
        // removeFile,
    } = useFileUpload();

    const inputRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = {
            file: files[0]
        }

        try {

            const res = await deleteBulkContacts(data)

            if(res.success) {
                handleSuccess(res.message)
                await fetchContacts()
            }

        } catch (e) {
            console.log(e)
            handleFail(e?.data?.message) 
        }
    }

  return (
    <ConfirmContainer>
        <p className='confirm_text'>Upload excel file to delete addresses</p>
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

export default UploadDelete