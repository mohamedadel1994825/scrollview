import api from 'consts/apiRequest'
import EP from 'consts/api'

export default class donors {
    static searchdonor = (data) => api('post', EP.Donation.SEARCHFORDONOR(), data )
}