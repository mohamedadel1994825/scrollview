import api from 'consts/apiRequest'
import EP from 'consts/api'

export default class donors {
    static getAllDispatch = () => api('get', EP.Donation.GETALLDISPATCHDATA())
    static getDispatchUnit = (dispatchI) => api('get', EP.Donation.GETDISPATCHUNIT(dispatchI))
    static addDispatchData =(data)=> api ('post', EP.Donation.ADDDISPATCH(), data)
    static deleteDispatch =(dispatchId)=> api ('delete', EP.Donation.DELETEDISPATCHUNIT(dispatchId))

}