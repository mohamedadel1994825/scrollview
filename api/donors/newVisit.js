import api from 'consts/apiRequest'
import EP from 'consts/api'

export default class donors {
    static getDonorData =(donorId)=> api ('get', EP.Donation.GETDONORDATA(donorId))
    static getLastDonorVisit =(donorId)=> api ('get', EP.Donation.GETLASTVISIT(donorId))
    static getVisitEligablity =(donorId)=> api ('get', EP.Donation.GETVISITSELIGIBLILITY(donorId))
    static donationTypesDropDownList = () => api('get', EP.Donation.DONATIONTYPESDROPDOWNLIST())
    static subDonationTypesDropDownList = () => api('get', EP.Donation.SUPDONATIONTYPESDROPDOWNLIST())
    static validateDonationType = (data) => api('post', EP.Donation.VALIDATEDONATIONTYPE(), data)
    static addNewVisit = (data) => api('post', EP.Donation.ADDNEWVISIT(), data)
    static getVisitDataWithVistId=(visitId)=> api('get', EP.Donation.GETVISTEDITDATA(visitId)) 
    static editNewVisit = (id, data)=> api('put', EP.Donation.EDITVISTEDITDATA(id), data)
}