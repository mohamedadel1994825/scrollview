import api from 'consts/apiRequest'
import EP from 'consts/api'

export default class donors {
    static getPhlebotomyDropDown = () => api('get', EP.Donation.GETPHLEBOTOMYDROPDOWN())
    static addPhlebotomyData =(data)=> api ('post', EP.Donation.ADDPHLEBOTOMY(), data)
    static editPhlbotmyData =(id, data)=> api ('put', EP.Donation.EDITPHLBOTMYDATA(id), data)
    static getPhlebotomyVistId=(vistId) => api('get', EP.Donation.GETPHELBOTMYVISTID(vistId))
    static checkBarcodeExist=(barcode) => api('get', EP.Donation.CHECKBARCODEEXIST(barcode))
}