import patients from "api/patients/issuingUnits";
////Constant
export const GET_VISUAL_INSPECTION = "GET_VISUAL_INSPECTION";
export const ADD_ISSUING_UNITS = "ADD_ISSUING_UNITS";
export const RESET_STORE_ISSUINGUNITS_CASH = "RESET_STORE_ISSUINGUNITS_CASH";
export const RESET_ERROR_ISSUINGUNITS_ERROR = "RESET_ERROR_ISSUINGUNITS_ERROR";

/////Action

export function getVisualInspectionShared() {
  return {
    type: GET_VISUAL_INSPECTION,
    payload: patients.getVisualInspectionShared()
  };
}

export function resetStoreIssuingUnits() {
  return {
    type: RESET_STORE_ISSUINGUNITS_CASH
  };
}
export function resetErrorIssuingUnits() {
  return {
    type: RESET_ERROR_ISSUINGUNITS_ERROR
  };
}
export function addIsuingUnites(data) {
  
  return {
    type: ADD_ISSUING_UNITS,
    payload: patients.addIsuingUnites(data)
  };
}

const initialState = {
  visualInspection: [],
  isPending: false,
  error: false,
  success: false
};

// Reducer
// ------------------------------------

export default function PatientIssuingUnitesReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case RESET_ERROR_ISSUINGUNITS_ERROR:
      return {
        ...state,
        error: false,
        success: false
      };
    case RESET_STORE_ISSUINGUNITS_CASH:
      return {
        visualInspection: [],
        isPending: false,
        error: false,
        success: false
      };
    case `${GET_VISUAL_INSPECTION}_PENDING`:
    case `${ADD_ISSUING_UNITS}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${GET_VISUAL_INSPECTION}_REJECTED`:
    case `${ADD_ISSUING_UNITS}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${ADD_ISSUING_UNITS}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };
    case `${GET_VISUAL_INSPECTION}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        visualInspection: action.payload.body
      };

    default:
      return state;
  }
}
