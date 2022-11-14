import API from "utils/BackendAPI";

export const getContacts = async () => {

    try {
        const res = await API.get(`/api/contact`)

        return res.data
    } catch (e) {
        throw e?.response
    }
}

export const getContactsBySearch = async (contact_name) => {

    try {
        const res = await API.get(`/api/contact?contact=${contact_name}`)

        return res.data
    } catch (e) {
        throw e?.response
    }
}

export const getContact = async (id) => {

    try {

        const res = await API.get(`/api/contact/${id}`)

        return res.data

    } catch (e) {
       throw e?.response
    }
}

export const deleteContactById = async (id) => {

    try {
        const res = await API.delete(`/api/contact/delete/${id}`)

        return res.data
    } catch (e) {
        throw e?.response.data
    }
}

export const updateContactById = async (id, data) => {

    try {
        const res = await API.patch(`/api/contact/${id}`, data)

        return res.data
    } catch (e) {
        throw e.response.data
    }
}

export const createContact = async (data) => {

    try {
        const res = await API.post(`/api/contact`, data)

        return res.data
        
    } catch (e) {
        throw e.response
    }
}