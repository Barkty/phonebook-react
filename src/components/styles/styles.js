import styled from 'styled-components'
import female from 'assets/femalebanner.svg'

export const Container = styled.div`
    width: 100%;
    padding: 2.7rem 3.9rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;


    .left {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .right {
        width: 60%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        .dictionary_wrap {
            height: 557px;
            width: 50vw;
            border: 2px solid #FFFFFF;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10rem;

            img {
                width: 256px;
                height: 256px;
                object-fit: contain;
            }
        }
    }
`

export const TitleText = styled.p`
    text-align: left;
    vertical-align: top;
    font-size: 36px;
    font-family: "Poppins", sans-serif;
    letter-spacing: 5%;
    line-height: auto;
    color: #ffffff;
`

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 200px 15px 21px;
    gap: 10px;
    width: 483px;
    height: 59px;
    background: #757AFF;
    border-radius: 50px;
    margin-top: 2.4rem;

    .select_wrap {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 30px;
        background-color: inherit;
        width: 16.375rem;
        height: 29px;
        flex: none;
        order: 0;
        flex-grow: 0;


        .search {
            width: 85%;
            height: 100%;
            background-color: inherit;
            border: none;
            outline: none;

            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 19px;
            line-height: 28px;
            letter-spacing: 0.25em;
            color: #222235;
        }

        &::placeholder {
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 19px;
            line-height: 28px;
            letter-spacing: 0.25em;
            color: #222235;
        }

        &:focus {
            border-bottom: 1px solid #222235;
        }
    }

`

export const AddressCard = styled.div`
    width: 482px;
    height: 557px;
    background: #111221;
    border-radius: 20px;
    margin-top: 2.1rem;
    padding: 23px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    .top {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        .checkbox_wrap {
            width: fit-content;
            height: 17px;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap: 3px;

            .checkbox {
                width: 17px;
                height: 17px;
                background: #757AFF;
                border-radius: 2px;
                flex: none;
                order: 0;
                flex-grow: 0;
            }
        }

        .add_new {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 3px 10px;
            gap: 10px;
            width: 148px;
            height: 29px;
            background: #757AFF;
            border-radius: 5px;
            cursor: pointer;

            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 22px;
            text-align: center;
            letter-spacing: 0.01em;
            color: #111221;
            white-space: nowrap;
        }
        .add_bulk {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 3px 10px;
            gap: 10px;
            width: 100%;
            height: 29px;
            background: #757AFF;
            border-radius: 5px;
            cursor: pointer;
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 22px;
            text-align: center;
            letter-spacing: 0.01em;
            color: #111221;
            white-space: nowrap;

            img {
                width: 14px;
                height: 14px;
                object-fit: contain;
            }
        }

        .dropdown_wrap {

            width: 166px;
            height: auto;

            .dropdown {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 3px 10px;
                gap: 10px;
    
                width: 166px;
                height: 29px;
                background: #757AFF;
                border-radius: 5px;
                cursor: pointer;
            }

            .dropdown_child {
                width: 170px;
                height: 60px;
                display: ${(props) => (props.display ? props.display : 'none')};

            }
        }
    }

    .bottom {
        width: 100%;
        height: 408px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        overflow-y: scroll;
        overflow-x: hidden;

        .skeleton_border {
            width: 129px;
            height: 163px;
            border: 1px solid #313358;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 1.5%;
            
        }
    }

    .bottom::-webkit-scrollbar {
        width: 6px !important;
    }

    /* Track */
    .bottom::-webkit-scrollbar-track {
        background: inherit !important;
    }

    /* Handle */
    .bottom::-webkit-scrollbar-thumb {
        background: #292929 !important;
        border-radius: 4px;
    }

`

export const ContactCardOutlined = styled.div`
    width: 129px;
    height: 163px;
    background: #222235;
    border: 1px solid #313358;
    border-radius: 20px;
    padding: 13px 9px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-bottom: .8rem;
    cursor: pointer;

    .checkbox_left {
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 3;
        top: -3.5rem;
    }

    .contact_right {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        right: 11px;

        .avatar {
            width: 59px;
            height: 59px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${(props) => (props.index % 2 === 0 ? '#4247CB' : props.index % 3 === 0 ? '#FF7C02' : '#FA00FF;')};
    
            .avatar_placeholder {
    
                font-style: normal;
                font-weight: 600;
                font-size: 32px;
                line-height: 48px;
                /* identical to box height */
                text-align: center;
                letter-spacing: 0.03em;
                color: #FFFFFF;
            }
        }
    
        .contact_info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 0px;
            width: 112px;
            height: 62px;
    
            .contact_name {
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 36px;
                /* identical to box height */
    
                letter-spacing: 0.05em;
                color: #FFFFFF;
                /* Inside auto layout */
                flex: none;
                order: 0;
                flex-grow: 0;
            }
    
            .contact_phone {
                font-style: normal;
                font-weight: 300;
                font-size: 17px;
                line-height: 26px;
                /* identical to box height */
            
                text-align: center;
                letter-spacing: 0.03em;
                color: #FFFFFF;
            
                /* Inside auto layout */
            
                flex: none;
                order: 1;
                flex-grow: 0;
            }
    
        }
    }

`

export const ContactCard = styled.div`
    width: 655px;
    height: 557px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;

    .contact_banner {
        width: 100%;
        height: 219px;
        background-color: ${(props) => (props.background ? props.background : '#FA00FF')};
        border-radius: 20px;
        background-image: url(${(props) => (props.banner ? props.banner : female)});
        padding: 20px;

        .contact_actions {
            width: 100px;
            height: 42.81px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: row;
            position: relative;
            top: 9rem;
            float: right;

            .icon_container {
                width: 42.85px;
                height: 42.85px;
                border-radius: 10px;
                background-color: rgba(255, 255, 255, 0.31);
                opacity: 0.31;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }

        }
    }

    .contact_details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 0 0 30px;
        width: 489px;
        height: 204px;

        .fullname {
            font-style: normal;
            font-weight: 600;
            font-size: 48px;
            line-height: 72px;
            text-align: center;
            letter-spacing: 0.03em;
            color: #FFFFFF;
            flex: none;
            order: 0;
            flex-grow: 0;
            margin-bottom: 20px;
            white-space: nowrap;
        }

        .phone_address {
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 36px;
            text-align: right;
            letter-spacing: 0.03em;
            color: #FFFFFF;
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        .gender_wrap {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            gap: 10px;
            width: 155px;
            height: 56px;
            flex: none;
            order: 2;
            flex-grow: 0;

            .gender {
                font-style: normal;
                font-weight: 300;
                font-size: 24px;
                line-height: 36px;
                text-align: right;
                letter-spacing: 0.03em;
                color: #FFFFFF;
                flex: none;
                order: 1;
                flex-grow: 0;
            }
        }
    }

`