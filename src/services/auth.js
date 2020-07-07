import axios from "axios"

export const isBrowser = () => typeof window !== "undefined"

export const isTokenValid = async (token) => {

    if (token === undefined) return false
    try {
        const res = await axios.get(
            `http://${process.env.CHAT_API_ADDR}/questionarios/lista`, 
            {headers: {'x-access-token': token}})
        return true
    } catch (error) {
        return false
    }
}

async function isLoggedIn() {
    let token = window.localStorage.getItem("TOKEN")
    let res = await isTokenValid(token)
    if (token && res) {
        return true;
    } else {
        return false;
    }
}

export default isLoggedIn