import api from 'consts/apiRequest'
import EP from 'consts/api'

export default class processing {
    static removeConfirmation = (barcodeId) => api('get', EP.Processing.REMOVECONFIRMATION(barcodeId))
    static addSperatedByUnit = (data) => api('post', EP.Processing.ADDSPERATIONBYUNIT(), data)
    static getAllSperatedBagsByUnit = (barcodeId) => api('get', EP.Processing.GETALLSPERATEDBYUNIT(barcodeId))
    static getAllSperatedBagsByBatch = (bagid)=> api('get', EP.Processing.GETALLSPERATEDBYBATCH(bagid))
    static getBagType = () => api('get', EP.Processing.GETALLBAGTYPE())
    static addSperatedByBatch = (data) => api('post', EP.Processing.ADDSPERATIONBYBATCH(), data) 
    
}