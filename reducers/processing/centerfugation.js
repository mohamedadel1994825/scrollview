import processing from "api/processing/centerfugation";

//===========Constant================
export const GET_BAGESMATCHINGBLOODTYPE = "GET_BAGESMATCHINGBLOODTYPE";
export const ADD_BAGES_CENTERFUGATION = "ADD_BAGES_CENTERFUGATION";
export const RESETERROR_CENTERFUGATION = "RESETERROR_CENTERFUGATION";
export const GET_PROGRAM_TYPE = "GET_PROGRAM_TYPE";
export const GET_ALL_BLOODTYPE = "GET_ALL_BLOODTYPE";
export const GET_CENTERFUGATION_TYPES = "GET_CENTERFUGATION_TYPES";
export const RESET_CENTERFUGATION_STORE = "RESET_CENTERFUGATION_STORE";
///===========Action==================

export function resetErrorProcessCenterFugation() {
  return {
    type: RESETERROR_CENTERFUGATION
  };
}
export function getAllowedBagsMatchingBloodType(data) {
  return {
    type: GET_BAGESMATCHINGBLOODTYPE,
    payload: processing.getAllowedBagsMatchingBloodType(data)
  };
}
export function addBagesCenterFugation(data) {
  return {
    type: ADD_BAGES_CENTERFUGATION,
    payload: processing.addBagesCenterFugation(data)
  };
}
export function getProgramType(centerfugationId) {
  return {
    type: GET_PROGRAM_TYPE,
    payload: processing.getProgramType(centerfugationId)
  };
}
export function getAllbloodType(programID) {
  return {
    type: GET_ALL_BLOODTYPE,
    payload: processing.getAllbloodType(programID)
  };
}
export function getCenterfugeType() {
  return {
    type: GET_CENTERFUGATION_TYPES,
    payload: processing.getCenterfugeType()
  };
}

export function resetCenterFugationStore(){
  return {
    type: RESET_CENTERFUGATION_STORE
  }
} 
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  bagDataCenterfug: null,
  programDropdown: [],
  bloodDropDown: [],
  centerfugationDropDown: [],
  isPending: false,
  error: false,
  success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function CenterFugationReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case RESETERROR_CENTERFUGATION:
      return {
        ...state,
        error: false,
        success:false
      };
    case RESET_CENTERFUGATION_STORE:
      return{
        bagDataCenterfug: null,
        programDropdown: [],
        bloodDropDown: [],
        centerfugationDropDown: [],
        isPending: false,
        error: false,
        success:false
      }  
    case `${GET_BAGESMATCHINGBLOODTYPE}_PENDING`:
    case `${ADD_BAGES_CENTERFUGATION}_PENDING`:
    case `${GET_PROGRAM_TYPE}_PENDING`:
    case `${GET_ALL_BLOODTYPE}_PENDING`:
    case `${GET_CENTERFUGATION_TYPES}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${GET_BAGESMATCHINGBLOODTYPE}_REJECTED`:
    case `${ADD_BAGES_CENTERFUGATION}_REJECTED`:
    case `${GET_PROGRAM_TYPE}_REJECTED`:
    case `${GET_ALL_BLOODTYPE}_REJECTED`:
    case `${GET_CENTERFUGATION_TYPES}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${ADD_BAGES_CENTERFUGATION}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };

    case `${GET_BAGESMATCHINGBLOODTYPE}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        bagDataCenterfug: action.payload.body
      };
    case `${GET_PROGRAM_TYPE}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        programDropdown: action.payload.body
      };
    case `${GET_ALL_BLOODTYPE}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        bloodDropDown: action.payload.body
      };
    case `${GET_CENTERFUGATION_TYPES}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        centerfugationDropDown: action.payload.body
      };
    default:
      return state;
  }
}
