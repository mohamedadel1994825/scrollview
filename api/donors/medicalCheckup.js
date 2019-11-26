import api from 'consts/apiRequest'
import EP from 'consts/api'

export default class donors {
    static getMedicalcheckupDropDown = () => api('get', EP.Donation.GETREMIDICALCHECKUPDROPDOWN())
    static getVisitData = (visitId) => api('get', EP.Donation.GETVISITDATA(visitId))
    static addMedicalCheckUpData =(data)=> api ('post', EP.Donation.ADDMEDICALCHECKUP(), data)
    static editMedicalCheckUpData=(id, data)=> api('put', EP.Donation.EDITMEDICALCHECKUP(id), data)
    static getMedicalcheckupWithVistId=(vistId)=> api('get', EP.Donation.GETMEDICALCHECKUPWITHVISTID(vistId))
}