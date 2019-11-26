import api from 'consts/apiRequest'
import EP from 'consts/api'

export default class donors {
    static getVisitQueue = (data) => api('get', EP.Donation.GetVISITQUEUE() )
}