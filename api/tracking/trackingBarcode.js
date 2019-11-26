import EP from "consts/api";
import api from "consts/apiRequest";

export default class tracking {
  static getBarcodeTracking = barcode =>
    api("get", EP.Tracking.GETBARCODETRACKING(barcode));
  static getTubelineTracking = tubeLine =>
    api("post", EP.Tracking.GETTUBELINE(tubeLine));
  static getUnitTracking = (barcodeUnitId, standard) =>
    api("post", EP.Tracking.GETUNITTRACKING(barcodeUnitId, standard));
  static getSerologyTrackingData = bqarcodeId =>
    api("get", EP.Tracking.GETSEROLOGYTRACKING(bqarcodeId));
  static getPhlepotomyResult = barcodeId =>
    api("get", EP.Tracking.GETPHLEPOTOMY(barcodeId));
}
