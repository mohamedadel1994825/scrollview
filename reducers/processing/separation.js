import processing from "api/processing/separation";

//===========Constant================
export const RESETERROR_SEPARATION = "RESETERROR_SEPARATION";
export const REMOVE_CONFIRMATION = "REMOVE_CONFIRMATION";
export const GET_ALLSPERATAEDBYUNIT = "GET_ALLSPERATAEDBYUNIT";
export const GET_ALLSPERATAEDBYBATCH = "GET_ALLSPERATAEDBYBATCH";
export const ADD_SPERATEDBYUNIT = "ADD_SPERATEDBYUNIT";
export const ADD_SPERATEDBYBATCH = "ADD_SPERATEDBYBATCH";
export const GET_BAG_TYPE = "GET_BAG_TYPE";
export const RESET_SPARATION_STORE_PROCESSING = "RESET_SPARATION_STORE_PROCESSING";
///===========Action==================

export function resetErrorProcessSeparation() {
  return {
    type: RESETERROR_SEPARATION
  };
}
export function removeConfirmation(barcodeId) {
  return {
    type: REMOVE_CONFIRMATION,
    payload: processing.removeConfirmation(barcodeId)
  };
}
export function getAllSperatedBagsByUnit(barcodeId) {
  return {
    type: GET_ALLSPERATAEDBYUNIT,
    payload: processing.getAllSperatedBagsByUnit(barcodeId)
  };
}
export function addSperatedByUnit(data) {
  return {
    type: ADD_SPERATEDBYUNIT,
    payload: processing.addSperatedByUnit(data)
  };
}
export function addSperatedByBatch(data) {
  return {
    type: ADD_SPERATEDBYBATCH,
    payload: processing.addSperatedByBatch(data)
  };
}
export function getBagType() {
  return {
    type: GET_BAG_TYPE,
    payload: processing.getBagType()
  };
}
export function getAllSperatedBagsByBatch(bagId) {
  return {
    type: GET_ALLSPERATAEDBYBATCH,
    payload: processing.getAllSperatedBagsByBatch(bagId)
  };
}
export function resetStoreSaparationProceessing(){
  return{
    type: RESET_SPARATION_STORE_PROCESSING
  }
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  bagTypeArr: [],
  sperationBagesByBatch: null,
  bagsOfSperation: null,
  removeConfirm: null,
  isPending: false,
  error: false,
  success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function SeparationProcessReducer(state = initialState, action) {
  switch (action.type) {
    case RESETERROR_SEPARATION:
      return {
        ...state,
        error: false,
        success: false
      };
    case RESET_SPARATION_STORE_PROCESSING:
      return{
        bagTypeArr: [],
        sperationBagesByBatch: null,
        bagsOfSperation: null,
        removeConfirm: null,
        isPending: false,
        error: false,
        success: false
      }  
    case `${REMOVE_CONFIRMATION}_PENDING`:
    case `${GET_ALLSPERATAEDBYUNIT}_PENDING`:
    case `${ADD_SPERATEDBYUNIT}_PENDING`:
    case `${ADD_SPERATEDBYBATCH}_PENDING`:
    case `${GET_BAG_TYPE}_PENDING`:
    case `${GET_ALLSPERATAEDBYBATCH}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${REMOVE_CONFIRMATION}_REJECTED`:
    case `${GET_ALLSPERATAEDBYUNIT}_REJECTED`:
    case `${ADD_SPERATEDBYUNIT}_REJECTED`:
    case `${ADD_SPERATEDBYBATCH}_REJECTED`:
    case `${GET_ALLSPERATAEDBYBATCH}_REJECTED`:
    case `${GET_BAG_TYPE}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${ADD_SPERATEDBYUNIT}_FULFILLED`:
      return {
        ...state,
        isPending: false
      };
    case `${ADD_SPERATEDBYBATCH}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };
    case `${GET_ALLSPERATAEDBYUNIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        bagsOfSperation: action.payload.body
      };
    case `${REMOVE_CONFIRMATION}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        removeConfirm: action.payload.body
      };
    case `${GET_BAG_TYPE}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        bagTypeArr: action.payload.body
      };
    case `${GET_ALLSPERATAEDBYBATCH}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        sperationBagesByBatch: action.payload.body
      };
    default:
      return state;
  }
}
