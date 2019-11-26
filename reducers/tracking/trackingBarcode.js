import tracking from "api/tracking/trackingBarcode";

//===========Constant================
export const GET_BARCODE_TRACKING = "GET_BARCODE_TRACKING";
export const GET_TUBLINE_TRACKING = "GET_TUBLINE_TRACKING";
export const GET_SEROLOGY_RESULT = "GET_SEROLOGY_RESULT";
export const GET_PHELOPOTHMY_RESULT = "GET_PHELoPOTHMY_RESULT";
export const GET_UNIT_TRACKING = "GET_UNIT_TRACKING";
export const RESETERROR_TRACKING = "RESETERROR_TRACKING";
export const RESET_TRACKING_BARCODE_STORE = "RESET_TRACKING_BARCODE_STORE";
///===========Action==================

/// ===========GeT ALL DONORS DROWPDON=====================

export function getBarcodeTracking(barcodeId) {
  return {
    type: GET_BARCODE_TRACKING,
    payload: tracking.getBarcodeTracking(barcodeId)
  };
}
///
export function getTubelineTracking(tubeLineId) {
  return {
    type: GET_TUBLINE_TRACKING,
    payload: tracking.getTubelineTracking(tubeLineId)
  };
}
export function getUnitTracking(barcodeUnitId, standared) {
  return {
    type: GET_UNIT_TRACKING,
    payload: tracking.getUnitTracking(barcodeUnitId, standared)
  };
}
export function getSerologyTrackingData(barcodeId) {
  return {
    type: GET_SEROLOGY_RESULT,
    payload: tracking.getSerologyTrackingData(barcodeId)
  };
}
export function getPhlepotomyResult(barcodeId) {
  return {
    type: GET_PHELOPOTHMY_RESULT,
    payload: tracking.getPhlepotomyResult(barcodeId)
  };
}

export function resetErrorBarcodeTracking() {
  return {
    type: RESETERROR_TRACKING
  };
}
export function resetrackingBarcodeStore(){
  return{
    type: RESET_TRACKING_BARCODE_STORE
  }
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  barcodeTracking: null,
  unitTracking: null,
  serologyresultData: null,
  phelopothmyData: null,
  isPending: false,
  error: false,
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function TrackingBarcodeReducer(state = initialState, action) {
  switch (action.type) {
    case RESETERROR_TRACKING:
      return {
        ...state,
        error: false,
      };
    case RESET_TRACKING_BARCODE_STORE:
      return{
        barcodeTracking: null,
        unitTracking: null,
        serologyresultData: null,
        phelopothmyData: null,
        isPending: false,
        error: false,
      }
    case `${GET_BARCODE_TRACKING}_PENDING`:
    case `${GET_TUBLINE_TRACKING}_PENDING`:
    case `${GET_SEROLOGY_RESULT}_PENDING`:
    case `${GET_PHELOPOTHMY_RESULT}_PENDING`:
    case `${GET_UNIT_TRACKING}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${GET_BARCODE_TRACKING}_REJECTED`:
    case `${GET_TUBLINE_TRACKING}_REJECTED`:
    case `${GET_SEROLOGY_RESULT}_REJECTED`:
    case `${GET_PHELOPOTHMY_RESULT}_REJECTED`:
    case `${GET_UNIT_TRACKING}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${GET_BARCODE_TRACKING}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        barcodeTracking: action.payload.body
      };
    case `${GET_TUBLINE_TRACKING}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        barcodeTracking: action.payload.body
      };
    case `${GET_SEROLOGY_RESULT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        serologyresultData: action.payload.body
      };

    case `${GET_PHELOPOTHMY_RESULT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        phelopothmyData: action.payload.body
      };

    case `${GET_UNIT_TRACKING}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        unitTracking: action.payload.body
      };

    default:
      return state;
  }
}
