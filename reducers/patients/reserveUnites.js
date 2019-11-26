import patients from "api/patients/reserveUnites";
////Constant
export const GET_ALL_RESERIVEDUNITES_BY_REQESTNUMBER =
  "GET_ALL_RESERIVEDUNITES_BY_REQESTNUMBER";
export const GET_ALL_RESERIVEDUNITES_BY_REQESTID =
  "GET_ALL_RESERIVEDUNITES_BY_REQESTID";
export const ADD_RESVERIVEDUNITES = "ADD_RESVERIVEDUNITES";
export const RESET_STORE_RESERIVEDUNITES_CASH =
  "RESET_STORE_RESERIVEDUNITES_CASH";
export const RESET_ERROR_RESERIVEUNITES_ERROR =
  "RESET_ERROR_RESERIVEUNITES_ERROR";

/////Action

export function getAllReserivedUnitesByReqestNumber(reqestNumber) {
  return {
    type: GET_ALL_RESERIVEDUNITES_BY_REQESTNUMBER,
    payload: patients.getAllReserivedUnitesByReqestNumber(reqestNumber)
  };
}
export function getAllReserivedUnitesByReqestId(reqestId) {
  return {
    type: GET_ALL_RESERIVEDUNITES_BY_REQESTID,
    payload: patients.getAllReserivedUnitesByReqestId(reqestId)
  };
}
export function resetStoreReseriveUnites() {
  return {
    type: RESET_STORE_RESERIVEDUNITES_CASH
  };
}
export function resetErrorReseriveUnitesPatient() {
  return {
    type: RESET_ERROR_RESERIVEUNITES_ERROR
  };
}
export function addReservedUnit(data) {
  return {
    type: ADD_RESVERIVEDUNITES,
    payload: patients.addReservedUnit(data)
  };
}

const initialState = {
  allreserviedUnites: null,
  isPending: false,
  error: false,
  success: false
};

// Reducer
// ------------------------------------

export default function PatientReseriveUnitesReducer(
  state = initialState,
  action
) {
  switch (action.type) {
      case RESET_ERROR_RESERIVEUNITES_ERROR:
          return{
              ...state,
              error: false,
              success: false
          }
      case RESET_STORE_RESERIVEDUNITES_CASH:
         return{
            allreserviedUnites: null,
            isPending: false,
            error: false,
            success: false
         } 
    case `${ADD_RESVERIVEDUNITES}_PENDING`:
    case `${GET_ALL_RESERIVEDUNITES_BY_REQESTNUMBER}_PENDING`:
    case `${GET_ALL_RESERIVEDUNITES_BY_REQESTID}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${ADD_RESVERIVEDUNITES}_REJECTED`:
    case `${GET_ALL_RESERIVEDUNITES_BY_REQESTNUMBER}_REJECTED`:
    case `${GET_ALL_RESERIVEDUNITES_BY_REQESTID}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${ADD_RESVERIVEDUNITES}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };
      case `${GET_ALL_RESERIVEDUNITES_BY_REQESTID}_FULFILLED`:
            return {
              ...state,
              isPending: false,
              allreserviedUnites: action.payload.body
            };

    default:
      return state;
  }
}
