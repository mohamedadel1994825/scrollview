import processing from "api/processing/discard";

//===========Constant================
export const GET_DISCARDBYUNIT = "GET_DISCARDBYUNIT";
export const ADD_DISCARDBYUNIT = "ADD_DISCARDBYUNIT";
export const GET_DISCARDBYBATCH = "GET_DISCARDBYBATCH";
export const ADD_DISCARDBYBATCH = "ADD_DISCARDBYBATCH";
export const GET_DISCARDED_REASON = "GET_DISCARDED_REASON";
export const RESETERROR_DISCARD_PROCESS = "RESETERROR_DISCARD_PROCESS";
export const RESET_DISCARD_PROCESSING_STORE = "RESET_DISCARD_PROCESSING_STORE";
///===========Action==================

export function resetErrorProcessDiscard() {
  return {
    type: RESETERROR_DISCARD_PROCESS
  };
}
export function addDiscardByUnit(data) {
  return {
    type: ADD_DISCARDBYUNIT,
    payload: processing.addDiscardByUnit(data)
  };
}
export function addDiscardByBatch(data) {
  return {
    type: ADD_DISCARDBYBATCH,
    payload: processing.addDiscardByBatch(data)
  };
}
export function getDiscardByUnit(data) {
  return {
    type: GET_DISCARDBYUNIT,
    payload: processing.getDiscardByUnit(data)
  };
}
export function getDiscardByBatch(data) {
  return {
    type: GET_DISCARDBYBATCH,
    payload: processing.getDiscardByBatch(data)
  };
}
export function getDiscardedReasons() {
  return {
    type: GET_DISCARDED_REASON,
    payload: processing.getDiscardedReasons()
  };
}
export function resetDiscardedStoreProcess(){
  return{
    type: RESET_DISCARD_PROCESSING_STORE
  }
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  reasonArr: [],
  discardByUnit: null,
  discardByBatch: null,
  isPending: false,
  error: false,
  success:false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function DiscardProcessingReducer(state = initialState, action) {
  switch (action.type) {
    case RESETERROR_DISCARD_PROCESS:
      return {
        ...state,
        error: false,
        success:false
      };
    case RESET_DISCARD_PROCESSING_STORE:
      return{
        reasonArr: [],
        discardByUnit: null,
        discardByBatch: null,
        isPending: false,
        error: false,
        success:false
      }  
    case `${GET_DISCARDBYUNIT}_PENDING`:
    case `${ADD_DISCARDBYUNIT}_PENDING`:
    case `${GET_DISCARDBYBATCH}_PENDING`:
    case `${ADD_DISCARDBYBATCH}_PENDING`:
    case `${GET_DISCARDED_REASON}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${GET_DISCARDBYUNIT}_REJECTED`:
    case `${ADD_DISCARDBYUNIT}_REJECTED`:
    case `${GET_DISCARDBYBATCH}_REJECTED`:
    case `${ADD_DISCARDBYBATCH}_REJECTED`:
    case `${GET_DISCARDED_REASON}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${ADD_DISCARDBYBATCH}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };
    case `${ADD_DISCARDBYUNIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };

    case `${GET_DISCARDBYBATCH}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        discardByBatch: action.payload.body
      };
    case `${GET_DISCARDBYUNIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        discardByUnit: action.payload.body
      };
      case `${GET_DISCARDED_REASON}_FULFILLED`:
            return {
              ...state,
              isPending: false,
              reasonArr: action.payload.body
            };
    default:
      return state;
  }
}
