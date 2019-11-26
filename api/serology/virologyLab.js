import api from 'consts/apiRequest';
import EP from 'consts/api';

export default class virologyLab {
	static getVirologyLab = (data) => api('post', EP.Serology.GETVIROLOGYDATA(), data);
	static submitVirologySamples = (data) => api('post', EP.Serology.ADDVIROLOGYDATA(), data);
	static getLipemicTest = (data) => api('post', EP.Serology.GETLIPEMICTEST(), data);
	static addLipemicTest = (data) => api('post', EP.Serology.ADDLIPEMICTEST(), data);
}
