import processing from "api/processing/release";

//===========Constant================
export const GET_RELEASEBYUNIT = "GET_RELEASEBYUNIT";
export const ADD_RELEASEBYUNIT = "ADD_RELEASEBYUNIT";
export const GET_RELEASEBYBATCH = "GET_RELEASEBYBATCH";
export const ADD_RELEASEBYBATCH = "ADD_RELEASEBYBATCH";
export const GET_BLOOD_COMPONENT_SHARED = "GET_BLOOD_COMPONENT_SHARED";
export const RESETERROR_RELEASE_PROCESS = "RESETERROR_RELEASE_PROCESS";
export const RESET_RELEASE_PROCESSING = "RESET_RELEASE_PROCESSING"
///===========Action==================

export function resetErrorProcessRelease() {
  return {
    type: RESETERROR_RELEASE_PROCESS
  };
}
export function addReleaseByUnit(data) {
  return {
    type: ADD_RELEASEBYUNIT,
    payload: processing.addReleaseByUnit(data)
  };
}
export function addReleaseByBatch(data) {
  return {
    type: ADD_RELEASEBYBATCH,
    payload: processing.addReleaseByBatch(data)
  };
}
export function getReleaseByUnit(data) {
  return {
    type: GET_RELEASEBYUNIT,
    payload: processing.getReleaseByUnit(data)
  };
}
export function getReleaseByBatch(data) {
  return {
    type: GET_RELEASEBYBATCH,
    payload: processing.getReleaseByBatch(data)
  };
}
export function getSharedBloodComponent() {
  return {
    type: GET_BLOOD_COMPONENT_SHARED,
    payload: processing.getSharedBloodComponent()
  };
}
export function resetReleaseProccessingStore(){
return{
  type: RESET_RELEASE_PROCESSING
}
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  bloodComponentArr: [],
  releaseByUnit: null,
  releaseByBatch: null,
  isPending: false,
  error: false,
  success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function ReleaseProcessingReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case RESETERROR_RELEASE_PROCESS:
      return {
        ...state,
        error: false,
        success: false
      };
    case RESET_RELEASE_PROCESSING:
      return{
        bloodComponentArr: [],
        releaseByUnit: null,
        releaseByBatch: null,
        isPending: false,
        error: false,
        success: false
      }  
    case `${GET_RELEASEBYUNIT}_PENDING`:
    case `${ADD_RELEASEBYUNIT}_PENDING`:
    case `${GET_RELEASEBYBATCH}_PENDING`:
    case `${ADD_RELEASEBYBATCH}_PENDING`:
    case `${GET_BLOOD_COMPONENT_SHARED}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${GET_RELEASEBYUNIT}_REJECTED`:
    case `${ADD_RELEASEBYUNIT}_REJECTED`:
    case `${GET_RELEASEBYBATCH}_REJECTED`:
    case `${ADD_RELEASEBYBATCH}_REJECTED`:
    case `${GET_BLOOD_COMPONENT_SHARED}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${ADD_RELEASEBYBATCH}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };
    case `${ADD_RELEASEBYUNIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };

    case `${GET_BLOOD_COMPONENT_SHARED}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        bloodComponentArr: action.payload.body
      };
    case `${GET_RELEASEBYBATCH}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        releaseByBatch: action.payload.body
      };
    case `${GET_RELEASEBYUNIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        releaseByUnit: action.payload.body
      };
    default:
      return state;
  }
}
