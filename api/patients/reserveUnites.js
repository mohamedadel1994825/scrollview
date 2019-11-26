import api from 'consts/apiRequest';
import EP from 'consts/api';

export default class patients {
    static getAllReserivedUnitesByReqestId = (id) => api('get', EP.Patient.GETALLRESERIVEDUNITESBYREQESTID(id));
    static addReservedUnit=(data)=> api('post', EP.Patient.ADDRESERVIEDUNITES(), data);
}
