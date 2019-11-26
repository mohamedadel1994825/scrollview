import api from "consts/apiRequest";
import EP from "consts/api";

export default class patients {
  static getVisualInspectionShared = () =>
    api("get", EP.Patient.GETVISUALINSPECTIONSHARED());

  static addIsuingUnites = data =>
    api("post", EP.Patient.ADDISSUINGUNITES(), data);
}