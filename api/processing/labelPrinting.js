import EP from 'consts/api'
import api from 'consts/apiRequest'

export default class processing {
    static addPrintProcess = (data) => api('post', EP.Processing.ADDGROUPINGSAMPLEPROCESSLABELPRINTING(), data)
    static getPrintByUnit = (data) => api('post', EP.Processing.GETPRINTBYUNIT(), data)
    static verifyLabel= (data) => api('post', EP.Processing.VERIFYLABELPRINTED(), data)
}