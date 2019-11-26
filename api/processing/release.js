import EP from 'consts/api'
import api from 'consts/apiRequest'

export default class processing {
    static addReleaseByUnit = (data) => api('post', EP.Processing.ADDRELEASEBYUNIT(), data)
    static addReleaseByBatch = (data) => api('post', EP.Processing.ADDRELEASEBYBATCH(), data)
    static getReleaseByUnit = (data) => api('post', EP.Processing.GETRELEASEBYUNIT(), data)
    static getReleaseByBatch = (data) => api('post', EP.Processing.GETRELEASEBYBATCH(), data)
    static getSharedBloodComponent = () => api('get', EP.Processing.GETSHAREDBLOODCOMPONENT())
} 