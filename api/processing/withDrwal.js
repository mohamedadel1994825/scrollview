import EP from 'consts/api'
import api from 'consts/apiRequest'

export default class processing {
    static getWithDrawlData = (data) => api('post', EP.Processing.GETWiTHDRWALDATA(), data)
    static addWithDrawlData = (data) => api('post', EP.Processing.ADDWITHDRAWALDATA(), data)
}