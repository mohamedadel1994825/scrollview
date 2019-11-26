import api from 'consts/apiRequest'
import EP from 'consts/api'

export default class processing {
    static getCollectionSites = () => api('get', EP.Processing.GETCOLLECTIONSITESRECO())
    static addSamples = (data) => api('post', EP.Processing.AddSAMPLESRECON(), data)
    static getBarcodeInfo = (barcode) => api('get', EP.Processing.GETBARCODEINFO(barcode))
    static getAllReconciliations = (data) => api ('post', EP.Processing.GETALLRECONHISTORY(), data)
    static getAllReconciliationsAudit = (data) => api ('post', EP.Processing.GETALLRECONCAUDITDATA(), data)
    static deleteReconBarcode = (barcodeId)=> api ('delete', EP.Processing.DELETERECONBARCODE(barcodeId))
    static editReconBarcode = (barcodeId, data)=> api ('put', EP.Processing.EDITRECONBARCODE(barcodeId), data)
}