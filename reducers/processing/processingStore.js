import processing from "api/processing/processingStore";

//===========Constant================
// main store
export const GET_PROCESS_MAINSTORE_BY_UNIT = "GET_PROCESS_MAINSTORE_BY_UNIT";
export const GET_PROCESS_MAINSTORE_BY_BATCH = "GET_PROCESS_MAINSTORE_BY_BATCH";
export const ADD_PROCESS_MAINSTORE_BY_UNIT = "ADD_PROCESS_MAINSTORE_BY_UNIT";
export const ADD_PROCESS_MAINSTORE_BY_BATCH = "ADD_PROCESS_MAINSTORE_BY_BATCH";
// Sub Store
export const GET_PROCESS_SUBSTORE_BY_UNIT = "GET_PROCESS_SUBSTORE_BY_UNIT";
export const GET_PROCESS_SUBSTORE_BY_BATCH = "GET_PROCESS_SUBSTORE_BY_BATCH";
export const ADD_PROCESS_SUBSTORE_BY_UNIT = "ADD_PROCESS_SUBSTORE_BY_UNIT";
export const ADD_PROCESS_SUBSTORE_BY_BATCH = "ADD_PROCESS_SUBSTORE_BY_BATCH";
//Get History
export const GET_PROCESS_STORE_HISTORY = "GET_PROCESS_STORE_HISTORY";
// shared
export const GET_MAIN_STORE_SHARED = "GET_MAIN_STORE_SHARED";
export const GET_SUB_STORE_SHARED = "GET_SUB_STORE_SHARED";
export const GET_SHEVELES_STORE_SHARED = "GET_SHEVELES_STORE_SHARED";
//reset error
export const RESETERROR_STORE_PROCESS = "RESETERROR_STORE_PROCESS";
///===========Action==================
export const RESET_PROCESSING_STORES_INI = "RESET_PROCESSING_STORES_INI";
//error Reset
export const GETBLOOD_COMPONENT_TYPE_WITH_MAINSTOREID = "GETBLOOD_COMPONENT_TYPE_WITH_MAINSTOREID"
export function resetErrorProcessStores() {
  return {
    type: RESETERROR_STORE_PROCESS
  };
}

//main Store
export function addMainStoreByUnit(data) {
  return {
    type: ADD_PROCESS_MAINSTORE_BY_UNIT,
    payload: processing.addMainStoreByUnit(data)
  };
}
export function addMainStoreByBatch(data) {
  return {
    type: ADD_PROCESS_MAINSTORE_BY_BATCH,
    payload: processing.addMainStoreByBatch(data)
  };
}
export function getMainStoreByUnit(data) {
  return {
    type: GET_PROCESS_MAINSTORE_BY_UNIT,
    payload: processing.getMainStoreByUnit(data)
  };
}
export function getMainStoreByBatch(data) {
  return {
    type: GET_PROCESS_MAINSTORE_BY_BATCH,
    payload: processing.getMainStoreByBatch(data)
  };
}
export function getBloodTypeFromMainStoreID(mainStoreId){
  return{
    type: GETBLOOD_COMPONENT_TYPE_WITH_MAINSTOREID,
    payload: processing.getBloodTypeFromMainStoreID(mainStoreId)
  }
}
//// Sub Store

export function addSubStoreBatch(data) {
  return {
    type: ADD_PROCESS_SUBSTORE_BY_BATCH,
    payload: processing.addSubStoreBatch(data)
  };
}
export function addSubStoreUnit(data) {
  return {
    type: ADD_PROCESS_SUBSTORE_BY_UNIT,
    payload: processing.addSubStoreUnit(data)
  };
}
export function getSubStoreByBatch(data) {
  return {
    type: GET_PROCESS_SUBSTORE_BY_BATCH,
    payload: processing.getSubStoreByBatch(data)
  };
}
export function getSubStoreByUnit(data) {
  return {
    type: GET_PROCESS_SUBSTORE_BY_UNIT,
    payload: processing.getSubStoreByUnit(data)
  };
}
/// shared
export function sharedSubStoreDropdown(mainStoreId) {
  return {
    type: GET_SUB_STORE_SHARED,
    payload: processing.sharedSubStoreDropdown(mainStoreId)
  };
}
export function sharedMainStoreDropdown() {
  return {
    type: GET_MAIN_STORE_SHARED,
    payload: processing.sharedMainStoreDropdown()
  };
}
export function shevielesSharedStore() {
  return {
    type: GET_SHEVELES_STORE_SHARED,
    payload: processing.shevielesSharedStore()
  };
}
export function getProcessingStoreHistory(id) {
  return {
    type: GET_PROCESS_STORE_HISTORY,
    payload: processing.getProcessingStoreHistory(id)
  };
}
export function resetStoresprocessingToInI(){
  return{
    type:RESET_PROCESSING_STORES_INI
  }
}

// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  processMainStoreByUnitData: null,
  processMainStoreByBatchData: null,
  processSubStoreByUnitData: null,
  processSubStoreByBatchData: null,
  processingStoreHistory: null,
  bloodRelatedWithMainstore: null,
  sharedMainStoreData: [],
  sharedSubStoreData: [],
  sharedShevelesData: [],
  isPending: false,
  error: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function StoreProcessingReducer(state = initialState, action) {
  switch (action.type) {
    case RESETERROR_STORE_PROCESS:
      return {
        ...state,
        error: false,
        success: false
      };
    case RESET_PROCESSING_STORES_INI:
      return{
        processMainStoreByUnitData: null,
        processMainStoreByBatchData: null,
        processSubStoreByUnitData: null,
        processSubStoreByBatchData: null,
        processingStoreHistory: null,
        sharedMainStoreData: [],
        sharedSubStoreData: [],
        sharedShevelesData: [],
        isPending: false,
        error: false,
        success: false
      }  
    case `${GET_PROCESS_MAINSTORE_BY_UNIT}_PENDING`:
    case `${GET_PROCESS_MAINSTORE_BY_BATCH}_PENDING`:
    case `${ADD_PROCESS_MAINSTORE_BY_UNIT}_PENDING`:
    case `${ADD_PROCESS_MAINSTORE_BY_BATCH}_PENDING`:
    case `${GET_PROCESS_SUBSTORE_BY_UNIT}_PENDING`:
    case `${ADD_PROCESS_SUBSTORE_BY_BATCH}_PENDING`:
    case `${GET_PROCESS_SUBSTORE_BY_BATCH}_PENDING`:
    case `${ADD_PROCESS_SUBSTORE_BY_UNIT}_PENDING`:
    case `${GET_MAIN_STORE_SHARED}_PENDING`:
    case `${GET_SHEVELES_STORE_SHARED}_PENDING`:
    case `${GET_PROCESS_STORE_HISTORY}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${GET_PROCESS_MAINSTORE_BY_UNIT}_REJECTED`:
    case `${GET_PROCESS_MAINSTORE_BY_BATCH}_REJECTED`:
    case `${ADD_PROCESS_MAINSTORE_BY_UNIT}_REJECTED`:
    case `${ADD_PROCESS_MAINSTORE_BY_BATCH}_REJECTED`:
    case `${GET_PROCESS_SUBSTORE_BY_UNIT}_REJECTED`:
    case `${ADD_PROCESS_SUBSTORE_BY_BATCH}_REJECTED`:
    case `${GET_PROCESS_SUBSTORE_BY_BATCH}_REJECTED`:
    case `${ADD_PROCESS_SUBSTORE_BY_UNIT}_REJECTED`:
    case `${GET_SUB_STORE_SHARED}_REJECTED`:
    case `${GET_MAIN_STORE_SHARED}_REJECTED`:
    case `${GET_SHEVELES_STORE_SHARED}_REJECTED`:
    case `${GET_PROCESS_STORE_HISTORY}_REJECTED`:
    case `${GETBLOOD_COMPONENT_TYPE_WITH_MAINSTOREID}_REJECTED`:  
    return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${ADD_PROCESS_MAINSTORE_BY_UNIT}_FULFILLED`:
    case `${ADD_PROCESS_MAINSTORE_BY_BATCH}_FULFILLED`:
    case `${ADD_PROCESS_SUBSTORE_BY_BATCH}_FULFILLED`:
    case `${ADD_PROCESS_SUBSTORE_BY_UNIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };
      case `${GETBLOOD_COMPONENT_TYPE_WITH_MAINSTOREID}_FULFILLED`:  
      return{
        ...state,
        isPending: false,
        bloodRelatedWithMainstore: action.payload.body
      }
    case `${GET_SUB_STORE_SHARED}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        sharedSubStoreData: action.payload.body
      };
    case `${GET_MAIN_STORE_SHARED}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        sharedMainStoreData: action.payload.body
      };

    case `${GET_SHEVELES_STORE_SHARED}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        sharedShevelesData: action.payload.body
      };

    case `${GET_PROCESS_SUBSTORE_BY_BATCH}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        processSubStoreByBatchData: action.payload.body
      };
    case `${GET_PROCESS_SUBSTORE_BY_UNIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        processSubStoreByUnitData: action.payload.body
      };
    case `${GET_PROCESS_MAINSTORE_BY_UNIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        processMainStoreByUnitData: action.payload.body
      };
    case `${GET_PROCESS_MAINSTORE_BY_BATCH}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        processSubStoreByBatchData: action.payload.body
      };
      case `${GET_PROCESS_STORE_HISTORY}_FULFILLED`:
        return{
          ...state,
          isPending: false,
          processingStoreHistory: action.payload.body
        }
    default:
      return state;
  }
}
