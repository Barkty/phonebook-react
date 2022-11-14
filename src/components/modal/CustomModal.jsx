import { ChevronLeft } from '@mui/icons-material';
import React from 'react'
import styles from "./Modal.module.css";
import { Modal, ModalContent, ModalOverlay } from './styles';

const CustomModal = ({ children, openModal, setOpenModal }) => {
    return (
      <div className={openModal ? `${styles.block}` : `${styles.none_block}`}>
        <ModalOverlay/>
        <Modal>
          <ChevronLeft className='modal_inside' onClick={() => setOpenModal(false)}/>
          <ModalContent>{children}</ModalContent>
        </Modal>
      </div>
    );
  };
  
  export default CustomModal;