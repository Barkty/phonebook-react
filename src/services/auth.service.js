import API from "utils/BackendAPI";

export const login = async (data) => {

    try {
        const res = await API.post(`/api/auth/login`, data)

        return res.data
    } catch (e) {
        throw e?.response
    }
}
