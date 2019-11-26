import api from 'consts/apiRequest';
import EP from 'consts/api';

export default class groupingLab {
	static getCollectionSites = () => api('get', EP.Serology.GETCOLLECTIONSITES());
	static getAllGroupingSamples = (data) => api('post', EP.Serology.GETALLGROUPINGSAMPLES(), data);
	static submitGroupingSamples = (data) => api('post', EP.Serology.ADDALLGROUPINGSAMPLES(), data);
}
