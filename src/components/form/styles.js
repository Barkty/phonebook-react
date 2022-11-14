import styled from 'styled-components'

export const FormContainer = styled.div`
    width: 680px;
    height: 471px;
    background: #222235;
    border-radius: 40px;

    .edit_banner {
        height: 123px;
        width: 100%;
        background: #757AFF;
        opacity: 0.8;
        border-radius: 40px 40px 0px 0px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 40px 50px;

        .empty_box {
            width: 7%;
            height: 100%;
        }

    }

    .form_container {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 35px 42px;
    }
`

export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 9px;
    width: 272px;
    height: 79px;
    margin-bottom: 40px;

    label {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.03em;
        color: #FFFFFF;
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .input {
        width: 100%;
        height: 62px;
        flex: none;
        order: 1;
        flex-grow: 0;
        background: #D9D9D9;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;


        input, select {
            width: 100%;
            height: 62px;
            background: inherit;
            outline: none;
            border: none;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 0.03em;
            color: #8F8F8F;
            padding: 22px 34px 22px 19px;

            &::placeholder {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                letter-spacing: 0.03em;
                color: #8F8F8F;
            }
        }

        .select {
            width: 100%;
            height: 100%;
        }
    }
`

export const ButtonFilled = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 10px 10px;
    gap: 10px;
    margin-left: 12rem;
    cursor: pointer;
    
    width: 196px;
    height: 44px;
    background: #D9D9D9;
    border: 1px solid #171725;
    border-radius: 5px;

    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #383858;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
`