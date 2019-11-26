import api from 'consts/apiRequest';
import EP from 'consts/api';

export default class patients {
	static regesterNewPatient = (data) => api('post', EP.Patient.ADDNEWPATIENT(), data);
}
