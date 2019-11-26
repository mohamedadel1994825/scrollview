import api from 'consts/apiRequest'
import EP from 'consts/api'

export default class donors {
    static getRegesterDropDown = () => api('get', EP.Donation.GETREGESTERDROPDOWN())
    static regesterNewDonor =(data)=> api ('post', EP.Donation.ADDNEWDONOR(), data)
    static editDonorDtata =(donorID, data)=> api('put', EP.Donation.EDITDONORDATA(donorID), data)
}