import api from 'consts/apiRequest';
import EP from 'consts/api';

export default class patients {
	static getRequestCategoryDropDown = () => api('get', EP.Patient.GETREQUESTCATEGORYDROPDOWN());
	static getRequestHospitalDropDown = () => api('get', EP.Patient.GETREQUESTHOSPITALDROPDOWN());
	static getRequestPhoneTypesDropDown = () => api('get', EP.Patient.GETREQUESTPHONETYPESDROPDOWN());
	static getRequestTrasnfusionsDropDown = () => api('get', EP.Patient.GETREQUESTTRANSNFUSIONSDROPDOWN());
	static getRequestDiagnosisDropDown = () => api('get', EP.Patient.GETREQUESTDIAGNOSISDROPDOWN());
	static getRequestPriorityDropDown = () => api('get', EP.Patient.GETREQUESTPRIORITYDROPDOWN());
	static getRequestPatientsTypesDropDown = () => api('get', EP.Patient.GETREQUESTPATIENTSTYPESDROPDOWN());
	static getRequestPhyisiciansDropDown = () => api('get', EP.Patient.GETREQUESTPHYSICIANSDROPDOWN());
	static getRequestSurgeyTypesDropDown = () => api('get', EP.Patient.GETREQUESTSURGEYTYPESDROPDOWN());
	static getRequestServicesDropDown = () => api('get', EP.Patient.GETREQUESTSERVICEDROPDOWN());
	static getRequestMedicationsDropDown = () => api('get', EP.Patient.GETREQUESTMEDICATIONDROPDOWN());
	static addRequestInfo = (data) => api('post', EP.Patient.ADDREQUESTINFO(), data);
	static getRequestData = (requestId) => api('get', EP.Patient.GETREQUESTDATA(requestId));
}
