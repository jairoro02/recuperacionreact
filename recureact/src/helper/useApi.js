import axios from 'axios'

export const useApi = async url =>{
    // axios.get(url).
    // then(response => {
    //     return response
    // }).catch(error=>{
    //     console.log(error)
    // });
    const response = await  fetch(url)
    const responseJSON = await response.json()
    return responseJSON.data
}