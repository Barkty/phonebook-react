import styled from "styled-components";

export const ModalOverlay = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: rgb(165, 161, 161, 0.4);
`

export const Modal = styled.div`
    width: auto;
    height: auto;
    background: #fff;
    border-radius: 20px;
    position: absolute;
    top: 51%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    text-align: center;

    .modal_inside {
        width: 50px;
        height: 50px;
        position: relative;
        float: right;
        top: -4px;
        background: #ffffff;
        /* placeholder */
        border-radius: 25px;
        z-index: 3;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }

    .modal_btn {
        width: 100%;
        height: 100%;
        background-color: transparent;
        outline: none;
        border: none;
        border-radius: 12.5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }


    @media screen and (max-width: 600px) {
        
        width: 95%;
        padding: 7% 0;
        
        .modal_inside {
            top: -2rem;
        }

    }

`

export const ModalContent = styled.div`
    height: auto;
    padding: 0;
    margin: 0;
    position: relative;
    top: -20px;

    @media screen and (max-width: 600px) {
        .modal_content {
            top: -52px;
        }
    }
`