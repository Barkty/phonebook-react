import React, { useEffect, useState } from 'react'
import { AddCircleRounded, Edit, SearchOutlined } from '@mui/icons-material'
import { Checkbox, Icon, Stack, Skeleton } from '@mui/material'
import { AddressCard, ContactCard, ContactCardOutlined, Container, SearchContainer } from 'components/styles/styles'
import { IoTrashBinSharp } from 'react-icons/io5'
import { HiChevronDown, HiTrash } from 'react-icons/hi'
import Text from 'components/typograhy/Text'
import { motion } from 'framer-motion'
import { createContact, deleteBulkContacts, deleteBulkContactsById, deleteContactById, getContact, getContacts, updateContactById } from 'services/contacts.service'
import useContextGetter from 'hooks/useContextGetter'
import dictionary from 'assets/phonebook.svg'
import excel from 'assets/excel.svg'
import male from 'assets/malebanner.svg'
import { useSnackbar } from "notistack";
import CustomModal from 'components/modal/CustomModal'
import EditContact from 'components/form/EditContact'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import AddContact from 'components/form/AddContact'
// import EditMultipleContact from 'components/form/EditMultipleContact'
import UploadExcel from 'components/form/UploadExcel'
import UploadDelete from 'components/form/UploadDelete'
import ConfirmDelete from 'components/form/ConfirmDelete'
import UploadEdit from 'components/form/UploadEdit'

const Home = () => {
    const { getAllContacts, getSingleContact, phoneContacts } = useContextGetter()
    const { enqueueSnackbar } = useSnackbar();
    const [contacts, setContacts] = useState([])
    const [contact, setContact] = useState([])
    const [contactIds, setContactIds] = useState('')
    const [search, setSearch] = useState('')
    const [contactViewed, setContactViewed] = useState(false)
    const [allChecked, setAllChecked] = useState(false)
    const [singleCheck, setSingleChecked] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [addContact, setAddContact] = useState(false)
    const [addBulkContact, setAddBulkContact] = useState(false)
    const [deleteBulk, setDeleteBulk] = useState(false)
    const [deleteMethod, setDeleteMethod] = useState(false)
    const [editMulti, setEditMulti] = useState(false)
    const [drop, setDrop] = useState(false)

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

    useEffect(() => {
        let ids = []
        for(let i = 0; i < contacts?.length; i++) {
            ids?.push(contacts[i]?._id)
        }
        let idString = ids?.join('#');

        setContactIds(idString)
    }, [contacts])

    useEffect(()=> {
        let temp = phoneContacts?.filter(e => e?.firstName?.includes(search) || e?.lastName?.includes(search))
        setContacts(temp)
    }, [search])

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

    const deleteMultiple = async (ids) => {
        let data = { ids: ids };

        try {
            const res = await deleteBulkContactsById(data)
            if(res.success) {
                handleSuccess(res.message)
                await fetchContacts()
            }

        } catch (e) {
            handleFail(e?.message)
        }
    }

    const editContact = async (values) => {

        try {
            const res = await updateContactById(contact._id, values)

            if(res.success) {
                handleSuccess(res.message)
                await fetchContacts()
            }

        } catch (e) {
            handleFail(e?.message) 
        }
    }

    const createNewContact = async (values) => {

        try {
            const res = await createContact(values)

            if(res.success) {
                handleSuccess(res.message)
                await fetchContacts()
                setAddContact(false)
            }

        } catch (e) {
            handleFail(e?.message) 
        }
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().max(12, 'First name must be 20 characters or less').required('First name is required'),
        lastName: Yup.string().max(20, 'Last name must be 20 characters or less').required('Last name is required'),
        phone: Yup.string().min(11, 'Phone number must be 11 charcters or less').required('Phone number is required'),
        gender: Yup.string().required('Gender is required')
    })
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            gender: ''
        },
        onSubmit: editContact,
        enableReinitialize: true,
        validationSchema
    })

    const contactFormik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            gender: ''
        },
        onSubmit: createNewContact,
        enableReinitialize: true,
        validationSchema
    })

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
                        <input className='search' placeholder='Search address' onChange={(e)=>{setSearch(e.target.value)}}/>
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
            <AddressCard display={drop ? 'block' : ''}>
                <div className='top'>
                    <div className='checkbox_wrap'>
                        <Checkbox sx={{color: '#757AFF', padding: '0', marginRight: '10px'}} onClick={()=>setAllChecked(!allChecked)}/>
                        {allChecked && (
                            <>
                                <IoTrashBinSharp color='#757AFF' size={24} style={{marginRight: '10px', cursor: 'pointer' }} onClick={()=>setDeleteMethod(true)}/>
                                <Edit sx={{ fontSize: 24, color: '#757AFF', cursor: 'pointer'}} onClick={()=>setEditMulti(true)}/>
                            </>
                        )}
                        
                    </div>
                    {/* Bulk address */}
                    <div className='dropdown_wrap'>
                        <div className='dropdown' onClick={()=>setDrop(!drop)}>
                            <span>Add address</span> <HiChevronDown/>
                        </div>
                        <div className='dropdown_child'>
                            <button type='button' className='add_bulk' onClick={()=>setAddContact(true)}>
                                <AddCircleRounded sx={{ fontSize: '14px'}}/>
                                Single address
                            </button>
                            <button type='button' className='add_bulk' onClick={()=>setAddBulkContact(true)}>
                                <img src={excel} alt='Excel' />
                                Upload address
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    {contacts?.length === 0 && (
                        <>
                            <div className='skeleton_border'>
                                <Stack spacing={2} width='129px' height='163px'>
                                    <Skeleton variant="circular" width={59} height={59} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </Stack>
                            </div>
                            <div className='skeleton_border'>
                                <Stack spacing={2} width='129px' height='163px'>
                                    <Skeleton variant="circular" width={59} height={59} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </Stack>
                            </div>
                            <div className='skeleton_border'>
                                <Stack spacing={2} width='129px' height='163px'>
                                    <Skeleton variant="circular" width={59} height={59} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </Stack>
                            </div>
                            <div className='skeleton_border'>
                                <Stack spacing={2} width='129px' height='163px'>
                                    <Skeleton variant="circular" width={59} height={59} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </Stack>
                            </div>
                            <div className='skeleton_border'>
                                <Stack spacing={2} width='129px' height='163px'>
                                    <Skeleton variant="circular" width={59} height={59} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </Stack>
                            </div>
                            <div className='skeleton_border'>
                                <Stack spacing={2} width='129px' height='163px'>
                                    <Skeleton variant="circular" width={59} height={59} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </Stack>
                            </div>
                        </>
                    )}
                    {contacts?.length > 0 && contacts?.map(contact => (
                        <ContactCardOutlined key={contact?._id} index={index++} onClick={()=> {getContactById(contact?._id); setContactViewed(true)}}>
                            <div className='checkbox_left'>
                                <Checkbox name={contact?._id} sx={{color: '#757AFF', padding: '0', marginTop: '10px'}} checked={singleCheck === contact?._id ? true : allChecked} onClick={()=> {setSingleChecked(contact._id)}}/>
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
        <CustomModal openModal={openModal} setOpenModal={setOpenModal}>
            <EditContact formik={formik}/>
        </CustomModal>
        <CustomModal openModal={addContact} setOpenModal={setAddContact}>
            <AddContact formik={contactFormik}/>
        </CustomModal>
        <CustomModal openModal={addBulkContact} setOpenModal={setAddBulkContact}>
            <UploadExcel fetchContacts={fetchContacts}/>
        </CustomModal>
        <CustomModal openModal={deleteBulk} setOpenModal={setDeleteBulk}>
            <UploadDelete fetchContacts={fetchContacts}/>
        </CustomModal>
        <CustomModal openModal={editMulti} setOpenModal={setEditMulti}>
            <UploadEdit fetchContacts={fetchContacts}/>
        </CustomModal>
        <CustomModal openModal={deleteMethod} setOpenModal={setDeleteMethod}>
            <ConfirmDelete deleteMultiple={deleteMultiple} contactIds={contactIds} setDeleteBulk={setDeleteBulk} setDeleteMethod={setDeleteMethod}/>
        </CustomModal>
    </Container>
  )
}

export default Home