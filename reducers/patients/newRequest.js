import patients from "api/patients/newRequest";

//===========Constant================
export const GET_NEEDED_DROPDOWN = "GET_NEEDED_DROPDOWN";
export const GET_BLOODGROUP_DROPDOWN = "GET_BLOODGROUP_DROPDOWN";
export const GET_CHECK_AVAILABILITY = "GET_CHECK_AVAILABILITY";
export const GET_PATIENT_DATA = "GET_PATIENT_DATA";
export const ADD_NEW_REQUEST = "ADD_NEW_REQUEST";
export const RESET_ERROR_PATIENTNEWREQEST = "RESET_ERROR_PATIENTNEWREQEST";
export const RESET_STORE_PATIENTNEWREQEST = "RESET_STORE_PATIENTNEWREQEST";
///===========Action==================

export function neededComponentDropDownList() {
  return {
    type: GET_NEEDED_DROPDOWN,
    payload: patients.neededComponentDropDownList()
  };
}

export function bloodGroupDropDownList() {
  return {
    type: GET_BLOODGROUP_DROPDOWN,
    payload: patients.bloodGroupDropDownList()
  };
}

export function addNewRequest(values) {
  return {
    type: ADD_NEW_REQUEST,
    payload: patients.addNewRequest(values)
  };
}
export function checkAvailability(data) {
  return {
    type: GET_CHECK_AVAILABILITY,
    payload: patients.checkAvailability(data)
  };
}
export function getPatientData(patiantId) {
  return {
    type: GET_PATIENT_DATA,
    payload: patients.getPatientData(patiantId)
  };
}
export function resetErrorPatientNewReqest() {
  return {
    type: RESET_ERROR_PATIENTNEWREQEST
  };
}
export function resetStorePatientNewReqest() {
  return {
    type: RESET_STORE_PATIENTNEWREQEST
  };
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  patientData: null,
  isAvailable: "_",
  neededComponent: [],
  bloodGroup: [],
  requestId: null,
  isPending: false,
  error: false,
  success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function NewRequestPatientReducer(state = initialState, action) {
  switch (action.type) {
    case `${RESET_ERROR_PATIENTNEWREQEST}`:
      return {
        ...state,
        error: false,
        success: false
      };
    case `${RESET_STORE_PATIENTNEWREQEST}`:
      return {
        patientData: null,
        isAvailable: "_",
        neededComponent: [],
        bloodGroup: [],
        requestId: null,
        isPending: false,
        error: false,
        success: false
      };
    case `${GET_NEEDED_DROPDOWN}_PENDING`:
    case `${GET_PATIENT_DATA}_PENDING`:

    case `${GET_CHECK_AVAILABILITY}_PENDING`:
    case `${GET_BLOODGROUP_DROPDOWN}_PENDING`:
    case `${ADD_NEW_REQUEST}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };

    case `${GET_PATIENT_DATA}_REJECTED`:
    case `${ADD_NEW_REQUEST}_REJECTED`:

    case `${GET_NEEDED_DROPDOWN}_REJECTED`:

    case `${GET_CHECK_AVAILABILITY}_REJECTED`:
    case `${GET_BLOODGROUP_DROPDOWN}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };

    case `${GET_NEEDED_DROPDOWN}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        neededComponent: action.payload.body
      };
    case `${ADD_NEW_REQUEST}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        requestId: action.payload.body,
        success: 'Saved Successfully'
      };

    case `${GET_BLOODGROUP_DROPDOWN}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        bloodGroup: action.payload.body
      };

    case `${GET_CHECK_AVAILABILITY}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        isAvailable: action.payload.body
      };

    case `${GET_PATIENT_DATA}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        patientData: action.payload.body
      };

    default:
      return state;
  }
}
