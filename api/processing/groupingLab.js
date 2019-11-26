import EP from 'consts/api'
import api from 'consts/apiRequest'

export default class processing {
    static addGroupingLabSamples = (data) => api('post', EP.Processing.ADDGROUPINGSAMPLEPROCESS(), data)
    static getGroupingSamples = (data) => api('post', EP.Processing.GETGROUPINGSAMPLEPROCESS(), data)
    static stagetAuditSamplesData = (data) => api('post', EP.Processing.GETGROUPINGAUDITSAMPLEPROCESS(), data)
    static editAuditBarcode =(barcodeId, data)=> api('put', EP.Processing.EDITGROUBINGLAPPROCSS(barcodeId), data)
}