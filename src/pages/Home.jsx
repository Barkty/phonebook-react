import React, { useEffect, useState } from 'react'
import { AddCircleRounded, Edit, SearchOutlined } from '@mui/icons-material'
import { Checkbox, Icon, Stack, Skeleton } from '@mui/material'
import { AddressCard, ContactCard, ContactCardOutlined, Container, SearchContainer } from 'components/styles/styles'
import { IoTrashBinSharp } from 'react-icons/io5'
import { HiTrash } from 'react-icons/hi'
import Text from 'components/typograhy/Text'
import { motion } from 'framer-motion'
import { deleteContactById, getContact, getContacts, getContactsBySearch, updateContactById } from 'services/contacts.service'
import useContextGetter from 'hooks/useContextGetter'
import dictionary from 'assets/phonebook.svg'
import male from 'assets/malebanner.svg'
import { useSnackbar } from "notistack";

const Home = () => {
    const { getAllContacts, getSingleContact } = useContextGetter()
    const { enqueueSnackbar } = useSnackbar();
    const [contacts, setContacts] = useState([])
    const [contact, setContact] = useState([])
    const [contactViewed, setContactViewed] = useState(false)
    const [allChecked, setAllChecked] = useState(false)
    const [openModal, setOpenModal] = useState(false)

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

    const fetchContacts = async () => {
        try {
            const res = await getContacts()

            getAllContacts(res.data)
            setContacts(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        (async function() {
            await fetchContacts()
        })()
    }, [])

    const searchContacts = async (search) => {

        try {
            const res = await getContactsBySearch(search)

            getAllContacts(res.data)
            setContacts(res.data)

        } catch (e) {
            console.log(e)
        }
    }

    const getContactById = async (id) => {

        try {
            const res = await getContact(id)

            console.log(res)
            getSingleContact(res.data)
            setContact(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const deleteContact = async (id) => {

        try {
            const res = await deleteContactById(id)

            if(res.success) {
                handleSuccess(res.message)
                await fetchContacts()
            }
            console.log(res)
        } catch (e) {
            handleFail(e?.message)
        }
    }

    const editContact = async (id, values) => {

        try {
            const res = await updateContactById(id, values)

            if(res.success) {
                handleSuccess(res.message)
                await fetchContacts()
            }

        } catch (e) {
            handleFail(e?.message) 
        }
    }
    let index = 0;

  return (
    <Container>
        <div className='left'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >    
                <Text translate='yes' title='Phone Book'/>
                <SearchContainer>
                    <div className='select_wrap'>
                        <SearchOutlined/>
                        <input className='search' placeholder='Search address' onChange={(e)=>{searchContacts(e.target.value)}}/>
                    </div>
                </SearchContainer>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <AddressCard>
                <div className='top'>
                    <div className='checkbox_wrap'>
                        <Checkbox sx={{color: '#757AFF', padding: '0', marginRight: '10px'}} onClick={()=>setAllChecked(!allChecked)}/>
                        {allChecked && (
                            <>
                                <IoTrashBinSharp color='#757AFF' size={24} style={{marginRight: '10px', cursor: 'pointer' }}/>
                                <Edit sx={{ fontSize: 24, color: '#757AFF', cursor: 'pointer'}}/>
                            </>
                        )}
                        
                    </div>
                    <button className='add_new'>
                        <AddCircleRounded sx={{ fontSize: '14px'}}/>
                        Add address
                    </button>
                </div>
                <div className='bottom'>
                    {contacts.length > 0 && contacts.map(contact => (
                        <ContactCardOutlined key={contact._id} index={index++} onClick={()=> {getContactById(contact._id); setContactViewed(true)}}>
                            <div className='checkbox_left'>
                                <Checkbox sx={{color: '#757AFF', padding: '0', marginTop: '10px'}} checked={allChecked}/>
                            </div>
                            <div className='contact_right'>
                                <div className='avatar'>
                                    <p className='avatar_placeholder'>{contact.firstName[0].toUpperCase()}</p>
                                </div>
                                <div className='contact_info'>
                                    <p className='contact_name'>{contact.firstName}</p>
                                    <p className='contact_phone'>{contact.phone}</p>
                                </div>
                            </div>
                        </ContactCardOutlined>
                    ))}
                </div>
            </AddressCard>
          </motion.div>
        </div>
        <div className='right'>
            <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
            > 
                {contactViewed === false ? (
                    <div className='dictionary_wrap'>
                        <img alt='Phone Dictionary' src={dictionary}/>
                    </div>
                ) : (
                    <ContactCard background={contact?.gender === 'Male' ? '#02F0FF' : null} banner={contact?.gender === 'Male' ? male : null}>
                        <div className='contact_banner'>
                            <div className='contact_actions'>
                                <div className='icon_container'>
                                    <HiTrash size={24} onClick={()=>deleteContact(contact._id)}/>
                                </div>
                                <div className='icon_container'>
                                    <Edit sx={{ fontSize: 24}} onClick={()=>setOpenModal(true)}/>
                                </div>
                            </div>
                        </div>
                        <div className='contact_details'>
                            <p className='fullname'>{contact.firstName} {contact.lastName}</p>
                            <p className='phone_address'>{contact.phone}</p>
                            <div className='gender_wrap'>
                                {contact.gender === 'Male' ? (<Icon sx={{fontSize: 35, color: '#FFFFFF', opacity: '0.7'}}>face_6</Icon>) : (<Icon sx={{fontSize: 35, color: '#FFFFFF', opacity: '0.7'}}>face_4</Icon>)}
                                <p className='gender'>{contact.gender}</p>
                            </div>
                        </div>
                    </ContactCard>
                )}

            </motion.div>
        </div>
    </Container>
  )
}

export default Home