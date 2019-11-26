import api from 'consts/apiRequest';
import EP from 'consts/api';
export default class patients {
	static getSourceOfSamplesDropDown = () => api('get', EP.Patient.GETSOURCEOFSAMPLESDROPDOWN());
	static getPhlebotomistDropDown = () => api('get', EP.Patient.GETPHLEBOTOMISTDROPDOWN());
	static addGroupingSamples = (data) => api('post', EP.Patient.ADDGROUPINGSAMPLES(), data);
}
