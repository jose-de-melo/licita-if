import axios from 'axios'
import consts from '../../main/consts'

export const getDocs = () => {
    const request = axios.get(`${consts.BASE_URL}/docs`)
    
    return {
        type: 'DOCS_FETCHED',
        payload:request
    }
}