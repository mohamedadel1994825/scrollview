import api from 'consts/apiRequest';
import EP from 'consts/api';

export default class natLap {
	static getAllNatSamples = (data) => api('post', EP.Serology.GETALLNATSAMPLES(), data);
	static addNatSamples = (data) => api('post', EP.Serology.ADDALLNATSAMPLES(), data);
}
