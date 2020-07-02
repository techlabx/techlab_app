import axios from "axios"

export const isBrowser = () => typeof window !== "undefined"

export const isTokenValid = async (token) => {

    if (token === undefined) return false
    console.log('isTokenValid', token)
    try {
        console.log(`http://${process.env.CHAT_API_ADDR}/questionarios/lista`)
        console.log({headers: {'x-access-token': token}})
        const res = await axios.get(
            `http://${process.env.CHAT_API_ADDR}/questionarios/lista`, 
            {headers: {'x-access-token': token}})
        console.log(res)
        return true
    } catch (error) {
        console.log('isTokenValid', error)
        return false
    }
}

async function isLoggedIn() {

    let token = window.localStorage.getItem("TOKEN")
    console.log('isLoggedIN', token)
    let res = await isTokenValid(token)
    if (token && res) {
        return true;
    } else {
        return false;
    }
}

export default isLoggedIn