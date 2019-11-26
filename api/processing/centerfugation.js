import EP from 'consts/api'
import api from 'consts/apiRequest'

export default class processing {
    static getAllowedBagsMatchingBloodType = (data) => api('post', EP.Processing.GETALLBAGSMATCHINGBLOODTYPE(), data)
    static addBagesCenterFugation = (data) => api('post', EP.Processing.ADDCENTERFUGATION(), data)
    static getAllbloodType = (programType) => api('post', EP.Processing.GETALLBLOODTYPE(programType))  
    static getCenterfugeType = () => api('get', EP.Processing.GETCENTERFUGATIONTYPEID())
    static getProgramType = (centerfugType) => api('post', EP.Processing.GETPROGRAMTYPE(centerfugType))
} 