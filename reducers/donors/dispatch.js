import donors from "api/donors/dispatch";

//===========Constant================
export const GET_ALLDISPATCH = "GET_ALLDISPATCH";
export const ADD_DISPATCH = "ADD_DISPATCH";
export const GET_DISPATCH_UNIT = "GET_DISPATCH_UNIT";
export const DELETE_DISPATCH_UNIT = "DELETE_DISPATCH_UNIT";
export const RESETERROR_DISPATCH = "RESETERROR_DISPATCH";
export const RESET_DISPATCH_STORE = "RESET_DISPATCH_STORE";
///===========Action==================

/// ===========GeT ALL DONORS DROWPDON=====================

export function getAllDispatch() {
  return {
    type: GET_ALLDISPATCH,
    payload: donors.getAllDispatch()
  };
}
export function getDispatchUnit(dispatchUnitId) {
  return {
    type: GET_DISPATCH_UNIT,
    payload: donors.getDispatchUnit(dispatchUnitId)
  };
}
export function addDispatchData(data) {
  return {
    type: ADD_DISPATCH,
    payload: donors.addDispatchData(data)
  };
}
export function deleteDispatch(dispatchUnitId) {
    return {
      type: DELETE_DISPATCH_UNIT,
      payload: donors.deleteDispatch(dispatchUnitId)
    };
  }
export function resetErrorDispatch() {
  return {
    type: RESETERROR_DISPATCH
  };
}
export function resetDispatchStore(){
  return{
    type: RESET_DISPATCH_STORE
  }
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  dispatchArry: null,
  dispatchUnit: null,
  isPending: false,
  error: false,
  success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function DispatchReducer(state = initialState, action) {
  switch (action.type) {
    case RESETERROR_DISPATCH:
      return {
        ...state,
        error: false,
        success: false
      };
    case RESET_DISPATCH_STORE:
      return{
        dispatchArry: null,
        dispatchUnit: null,
        isPending: false,
        error: false,
        success: false
      }
    case `${GET_ALLDISPATCH}_PENDING`:
    case `${ADD_DISPATCH}_PENDING`:
    case `${GET_DISPATCH_UNIT}_PENDING`:
    case `${DELETE_DISPATCH_UNIT}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };

    case `${GET_ALLDISPATCH}_REJECTED`:
    case `${ADD_DISPATCH}_REJECTED`:
    case `${GET_DISPATCH_UNIT}_REJECTED`:
    case `${DELETE_DISPATCH_UNIT}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };

    case `${GET_ALLDISPATCH}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        dispatchArry: action.payload.body
      };
    case `${GET_DISPATCH_UNIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        dispatchUnit: action.payload.body
      };
    case `${DELETE_DISPATCH_UNIT}_FULFILLED`:
    case `${ADD_DISPATCH}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };
    default:
      return state;
  }
}
