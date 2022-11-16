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

    .add_banner {
        height: 123px;
        width: 100%;
        background: #D9D9D9;
        opacity: 0.2;
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

    .multi_banner {
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
export const MultiFormContainer = styled.div`
    width: 888px;
    height: 645px;
    background: #222235;
    border-radius: 40px;

    .multi_banner {
        height: 52px;
        width: 100%;
        background: #757AFF;
        opacity: 0.8;
        border-radius: 40px 40px 0px 0px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 40px 50px;

        .heading {
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 0.03em;
            color: #222235;
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

        .form_group {
            width: 380px;
            height: 222px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .form_group.form_group_entry {
            display: flex;
        }
        .form_group.form_group_none {
            display: none;
        }
    }


`
export const FormControlSmall = styled.div`
    padding: 0px;
    width: 184px;
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
        float: left;
        margin-bottom: 0.8rem;
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
export const FormControl = styled.div`
    padding: 0px;
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
        float: left;
        margin-bottom: 0.8rem;
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
export const Option = styled.option`
    width: 100%;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 20px 13px;
    height: 39px;
    display: flex;
    cursor: pointer;

    &:hover {
        background: #D9D9D9;
        border-radius: 5px;
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

export const ErrorMessage = styled.span`
    color: red;
    width: 100%;
    position: relative;
    font-size: 16px;
    top: 0rem;
    left: -55px;
    text-align: left;
`