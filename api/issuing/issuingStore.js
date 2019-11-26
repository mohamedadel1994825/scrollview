import EP from 'consts/api'
import api from 'consts/apiRequest'

export default class issuing {
    ////
    static addMainStoreByUnit = (data) => api('post', EP.Issuing.ADDMAINSTOREBYUNIT(), data)
    static addMainStoreByBatch = (data) => api('post', EP.Issuing.ADDMAINSTOREBYBATCH(), data)
    static getMainStoreByUnit = (data) => api('post', EP.Issuing.GETMSINSTOREBYUNIT(), data)
    static getMainStoreByBatch = (data) => api('post', EP.Issuing.GETMAINSTOREBYBATCH(), data)
    static getBloodtypeWithMainStoreId = (mainStoreId)=> api('get', EP.Issuing.ISSINGBLOODSTORE(mainStoreId))
/////shared
   //
   static sharedSubStoreDropdown = (mainStoreId) => api('get', EP.Issuing.SHAREDSUBSTOREISSING(), false, {mainStoreId:mainStoreId})
   static sharedMainStoreDropdown = () => api('get', EP.Issuing.SHAREDMAINSTOREISSING())
   static shevielesSharedStore = () => api('get', EP.Issuing.SHEVIELESSHAREDSTOREISSING())
   ///
    static addSubStoreBatch = (data) => api('post', EP.Issuing.ADDMAINSTOREBYBATCH(), data)
    static addSubStoreUnit = (data) => api('post', EP.Issuing.ADDMAINSTOREBYUNIT(), data)
    static getSubStoreByBatch = (data) => api('post', EP.Issuing.GETMAINSTOREBYBATCH(), data)
    static getSubStoreByUnit = (data) => api('post', EP.Issuing.GETMSINSTOREBYUNIT(), data)
    ///StockReport
    static viewStockReport = (data) => api('post', EP.Issuing.GETISSUINGREPORT(), data)

} 