import api from 'consts/apiRequest';
import EP from 'consts/api';

export default class patients {
	static searchPatients = (data) => api('post', EP.Patient.SEARCHFORPATIENT(), data);
}
