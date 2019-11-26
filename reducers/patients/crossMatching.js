import patients from "api/patients/crossmatching";
////Constant
export const GET_TECHNIQES_SHARED = "GET_TECHNIQES_SHARED";
export const GET_TESTRESULT_SHARED = "GET_TESTRESULT_SHARED";
export const ADD_CROSSMATCHING = "ADD_CROSSMATCHING";
export const RESET_STORE_CROSMATCHING_CASH = "RESET_STORE_CROSMATCHING_CASH";
export const RESET_ERROR_CROSSMATCHING_ERROR = "RESET_ERROR_CROSSMATCHING_ERROR";

/////Action

export function getTechniqeShared() {
  return {
    type: GET_TECHNIQES_SHARED,
    payload: patients.getTechniqeShared()
  };
}
export function getTestResultShared() {
  return {
    type: GET_TESTRESULT_SHARED,
    payload: patients.getTestResultShared()
  };
}
export function resetStoreCrossMatching() {
  return {
    type: RESET_STORE_CROSMATCHING_CASH
  };
}
export function resetErrorCrossMatching() {
  return {
    type: RESET_ERROR_CROSSMATCHING_ERROR
  };
}
export function addcrossMatching(data) {
  
  return {
    type: ADD_CROSSMATCHING,
    payload: patients.addcrossMatching(data)
  };
}

const initialState = {
  technique: [],
  testResult: [],
  isPending: false,
  error: false,
  success: false
};

// Reducer
// ------------------------------------

export default function PatientCrossMatchingReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case RESET_ERROR_CROSSMATCHING_ERROR:
      return {
        ...state,
        error: false,
        success: false
      };
    case RESET_STORE_CROSMATCHING_CASH:
      return {
        technique: [],
        testResult: [],
        isPending: false,
        error: false,
        success: false
      };
    case `${GET_TECHNIQES_SHARED}_PENDING`:
    case `${GET_TESTRESULT_SHARED}_PENDING`:
    case `${ADD_CROSSMATCHING}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${GET_TECHNIQES_SHARED}_REJECTED`:
    case `${GET_TESTRESULT_SHARED}_REJECTED`:
    case `${ADD_CROSSMATCHING}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${ADD_CROSSMATCHING}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };
    case `${GET_TECHNIQES_SHARED}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        technique: action.payload.body
      };
    case `${GET_TESTRESULT_SHARED}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        testResult: action.payload.body
      };

    default:
      return state;
  }
}
