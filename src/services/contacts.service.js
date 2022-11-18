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

export const createBulkContact = async (data) => {

    try {
        const res = await API.post(`/api/contact/bulk`, data,  {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })

        return res.data

    } catch (e) {
        throw e
    }
}

export const deleteBulkContactsById = async (id) => {
    try {
        const res = await API.post(`/api/contact/bulk/delete/id`, id)

        return res.data
        
    } catch (e) {
        throw e.response
    }
}

export const deleteBulkContacts = async (data) => {

    try {
        const res = await API.post(`/api/contact/bulk/delete`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })

        return res.data
        
    } catch (e) {
        throw e.response
    }
}

export const updateBulkContacts = async (data) => {

    try {
        
        const res = await API.patch(`/api/contact/bulk/update`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })

        return res.data

    } catch (e) {
        throw e.response
    }
}