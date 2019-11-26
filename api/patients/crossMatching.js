import api from "consts/apiRequest";
import EP from "consts/api";

export default class patients {
  static getTechniqeShared = () =>
    api("get", EP.Patient.GETTECHNIQSHARED());
  static getTestResultShared = () =>
    api("get", EP.Patient.GETRESULTSHARED());
  static addcrossMatching = data =>
    api("post", EP.Patient.ADDCROSSMATCHINGDATA(), data);
}
