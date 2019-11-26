import api from 'consts/apiRequest';
import EP from 'consts/api';
export default class serology {
	static addsamples = (data) => api('post', EP.Serology.ADDSAMPLES(), data);
	static getCollectionSites = () => api('get', EP.Serology.GETCOLLECTIONSITES());
	static getCollectionsiteshistory = (data) => api('post', EP.Serology.GETCOLLECTIONSITEHISTORY(), data);
	static getAllReconciliationsSamples = (data) => api('post', EP.Serology.GETALLRECONCILATIONSAMPLES(), data);
	static saveChangesOnClickItem = (rowId) => api('put', EP.Serology.SAVECHANGES(rowId));
	static getAllReconciliationsAudit = (data) => api('post', EP.Serology.GETALLRECONCAUDITDATA(), data);
}
