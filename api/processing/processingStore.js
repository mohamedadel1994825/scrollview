import EP from 'consts/api'
import api from 'consts/apiRequest'

export default class processing {
    ////
    static addMainStoreByUnit = (data) => api('post', EP.Processing.ADDMAINSTOREBYUNIT(), data)
    static addMainStoreByBatch = (data) => api('post', EP.Processing.ADDMAINSTOREBYBATCH(), data)
    static getMainStoreByUnit = (data) => api('post', EP.Processing.GETMSINSTOREBYUNIT(), data)
    static getMainStoreByBatch = (data) => api('post', EP.Processing.GETMAINSTOREBYBATCH(), data)
    static getBloodTypeFromMainStoreID=(mainStoreId)=>api('get', EP.Processing.GETBLOODWITHMAINSTOREPROCESS(mainStoreId))
   ///
    static addSubStoreBatch = (data) => api('post', EP.Processing.ADDMAINSTOREBYBATCH(), data)
    static addSubStoreUnit = (data) => api('post', EP.Processing.ADDMAINSTOREBYBATCH(), data)
    static getSubStoreByBatch = (data) => api('post', EP.Processing.GETMAINSTOREBYBATCH()(), data)
    static getSubStoreByUnit = (data) => api('post', EP.Processing.GETMSINSTOREBYUNIT(), data)
    //
    static sharedSubStoreDropdown = (mainStoreId) => api('get', EP.Processing.SHAREDSUBSTORE(), false, {mainStoreId:mainStoreId})
    static sharedMainStoreDropdown = () => api('get', EP.Processing.SHAREDMAINSTORE())
    static shevielesSharedStore = () => api('get', EP.Processing.SHEVIELESSHAREDSTORE())
    //
    static getProcessingStoreHistory = (id) => api('post', EP.Processing.GETHISTORYPROCESSINGSTORE(id))
    
} 