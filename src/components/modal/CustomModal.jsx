import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import styles from "./Modal.module.css";
import { Modal, ModalContent, ModalOverlay } from './styles';

const CustomModal = ({ children, openModal, setOpenModal }) => {
    return (
      <div className={openModal ? `${styles.block}` : `${styles.none_block}`}>
        <ModalOverlay/>
        <Modal>
            <div className='modal_inside'>
                <button type='button' className='modal_btn' onClick={() => setOpenModal(false)}>

                    <IoCloseSharp color='#8E8E8E' size={26} />
                </button>
            </div>
            <ModalContent>{children}</ModalContent>
        </Modal>
      </div>
    );
  };
  
  export default CustomModal;