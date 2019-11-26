import EP from 'consts/api'
import api from 'consts/apiRequest'

export default class processing {
    static addDiscardByUnit = (data) => api('post', EP.Processing.ADDDISCARDBYUNIT(), data)
    static addDiscardByBatch = (data) => api('post', EP.Processing.ADDDISCARDBYBATCH(), data)
    static getDiscardByUnit = (data) => api('post', EP.Processing.GETDISCARDBYUNIT(), data)
    static getDiscardByBatch = (data) => api('post', EP.Processing.GETDISCARDBYBATCH(), data)
    static getDiscardedReasons = () => api('get',  EP.Processing.GETDISCARDEDREASON())
} 