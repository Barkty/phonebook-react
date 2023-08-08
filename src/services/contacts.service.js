import API from "utils/BackendAPI";

export const getContacts = async (page, limit, search) => {

    try {
        const url = page ? `/contact?page=${page}&limit=${limit}&contact=${search}` : `/contact?page=${page}&limit=${limit}`
        const res = await API.get(url)

        return res.data.data
    } catch (e) {
        throw e?.response
    }
}

export const getContactsBySearch = async (contact_name) => {

    try {
        const res = await API.get(`/contact?contact=${contact_name}`)

        return res.data.data
    } catch (e) {
        throw e?.response
    }
}

export const getContact = async (id) => {

    try {

        const res = await API.get(`/contact/${id}`)

        return res.data.data

    } catch (e) {
       throw e?.response
    }
}

export const deleteContactById = async (id) => {

    try {
        const res = await API.delete(`/contact/delete/${id}`)

        return res.data
    } catch (e) {
        throw e?.response.data
    }
}

export const updateContactById = async (id, data) => {

    try {
        const res = await API.patch(`/contact/${id}`, data)

        return res.data
    } catch (e) {
        throw e.response.data
    }
}

export const createContact = async (data) => {

    try {
        const res = await API.post(`/contact`, data)

        return res.data

    } catch (e) {
        throw e.response
    }
}

export const createBulkContact = async (data) => {

    try {
        const res = await API.post(`/contact/bulk`, data,  {
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
        const res = await API.post(`/contact/bulk/delete/id`, id)

        return res.data
        
    } catch (e) {
        throw e.response
    }
}

export const deleteBulkContacts = async (data) => {

    try {
        const res = await API.post(`/contact/bulk/delete`, data, {
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
        
        const res = await API.patch(`/contact/bulk/update`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })

        return res.data

    } catch (e) {
        throw e.response
    }
}