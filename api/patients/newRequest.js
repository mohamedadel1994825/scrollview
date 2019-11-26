import api from 'consts/apiRequest';
import EP from 'consts/api';

export default class patients {
	static neededComponentDropDownList = () => api('get', EP.Patient.NEEDEDCOMPONENTDROPDOWN());
	static bloodGroupDropDownList = () => api('get', EP.Patient.BLOODGROUPDROPDOWN());
	static addNewRequest = (data) => api('post', EP.Patient.ADDNEWREQUEST(), data);
	static checkAvailability = (data) => api('post', EP.Patient.CHECKAVAILABILITY(), data);
	static getPatientData = (patiantId) => api('get', EP.Patient.GETPATIENTDATA(patiantId));
}
