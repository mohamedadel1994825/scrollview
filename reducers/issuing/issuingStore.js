import issuing from "api/issuing/issuingStore";

//===========Constant================
// main store
export const GET_ISSUING_MAINSTORE_BY_UNIT = "GET_ISSUING_MAINSTORE_BY_UNIT";
export const GET_ISSUING_MAINSTORE_BY_BATCH = "GET_ISSUING_MAINSTORE_BY_BATCH";
export const ADD_ISSUING_MAINSTORE_BY_UNIT = "ADD_ISSUING_MAINSTORE_BY_UNIT";
export const ADD_ISSUING_MAINSTORE_BY_BATCH = "ADD_ISSUING_MAINSTORE_BY_BATCH";
export const VIEW_STOCK_REPORT = "VIEW_STOCK_REPORT";
// Sub Store
export const GET_ISSUING_SUBSTORE_BY_UNIT = "GET_ISSUING_SUBSTORE_BY_UNIT";
export const GET_ISSUING_SUBSTORE_BY_BATCH = "GET_ISSUING_SUBSTORE_BY_BATCH";
export const ADD_ISSUING_SUBSTORE_BY_UNIT = "ADD_ISSUING_SUBSTORE_BY_UNIT";
export const ADD_ISSUING_SUBSTORE_BY_BATCH = "ADD_ISSUING_SUBSTORE_BY_BATCH";
// shared
export const GET_MAIN_STORE_SHARED_ISSING = "GET_MAIN_STORE_SHARED_ISSING";
export const GET_SUB_STORE_SHARED_ISSING = "GET_SUB_STORE_SHARED_ISSING";
export const GET_SHEVELES_STORE_SHARED_ISSING = "GET_SHEVELES_STORE_SHARED_ISSING";
//reset error
export const RESETERROR_STORE_ISSUING = "RESETERROR_STORE_ISSUING";
export const GET_BLOOD_TYPE_WITH_MAINSTORE_ID = "GET_BLOOD_TYPE_WITH_MAINSTORE_ID";
export const RESET_STORE_ISSUING = "RESET_STORE_ISSUING";
///===========Action==================
//error Reset
export function resetErrorIssuingStores() {
  return {
    type: RESETERROR_STORE_ISSUING
  };
}

//main Store
export function addMainStoreByUnit(data) {
  return {
    type: ADD_ISSUING_MAINSTORE_BY_UNIT,
    payload: issuing.addMainStoreByUnit(data)
  };
}
export function addMainStoreByBatch(data) {
  return {
    type: ADD_ISSUING_MAINSTORE_BY_BATCH,
    payload: issuing.addMainStoreByBatch(data)
  };
}
export function getMainStoreByUnit(data) {
  return {
    type: GET_ISSUING_MAINSTORE_BY_UNIT,
    payload: issuing.getMainStoreByUnit(data)
  };
}
export function getMainStoreByBatch(data) {
  return {
    type: GET_ISSUING_MAINSTORE_BY_BATCH,
    payload: issuing.getMainStoreByBatch(data)
  };
}
export function getBloodtypeWithMainStoreId(mainStoreId) {
  return {
    type: GET_BLOOD_TYPE_WITH_MAINSTORE_ID,
    payload: issuing.getBloodtypeWithMainStoreId(mainStoreId)
  };
}

//// Sub Store

export function addSubStoreBatch(data) {
  return {
    type: ADD_ISSUING_SUBSTORE_BY_BATCH,
    payload: issuing.addSubStoreBatch(data)
  };
}
export function addSubStoreUnit(data) {
  return {
    type: ADD_ISSUING_SUBSTORE_BY_UNIT,
    payload: issuing.addSubStoreUnit(data)
  };
}
export function getSubStoreByBatch(data) {
  return {
    type: GET_ISSUING_SUBSTORE_BY_BATCH,
    payload: issuing.getSubStoreByBatch(data)
  };
}
export function getSubStoreByUnit(data) {
  return {
    type: GET_ISSUING_SUBSTORE_BY_UNIT,
    payload: issuing.getSubStoreByUnit(data)
  };
}
export function viewStockReport(data) {
  return {
    type: VIEW_STOCK_REPORT,
    payload: issuing.viewStockReport(data)
  };
}
export function resetIssunigStore() {
  return {
    type: RESET_STORE_ISSUING
  };
}
/// shared
export function sharedSubStoreDropdown(mainStoreId) {
  return {
    type: GET_SUB_STORE_SHARED_ISSING,
    payload: issuing.sharedSubStoreDropdown(mainStoreId)
  };
}
export function sharedMainStoreDropdown() {
  return {
    type: GET_MAIN_STORE_SHARED_ISSING,
    payload: issuing.sharedMainStoreDropdown()
  };
}
export function shevielesSharedStore() {
  return {
    type: GET_SHEVELES_STORE_SHARED_ISSING,
    payload: issuing.shevielesSharedStore()
  };
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  issuingMainStoreByUnitData: null,
  issuingMainStoreByBatchData: null,
  issuingSubStoreByUnitData: null,
  issuingSubStoreByBatchData: null,
  bloodMainStoreType: null,
  sharedMainStoreData: [],
  sharedSubStoreData: [],
  sharedShevelesData: [],
  stockReportData: null,
  isPending: false,
  error: false,
  success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function StoreIssuingReducer(state = initialState, action) {
  switch (action.type) {
    case RESETERROR_STORE_ISSUING:
      return {
        ...state,
        error: false,
        success: false
      };
    case RESET_STORE_ISSUING:
      return {
        issuingMainStoreByUnitData: null,
        issuingMainStoreByBatchData: null,
        issuingSubStoreByUnitData: null,
        issuingSubStoreByBatchData: null,
        stockReportData: null,
        isPending: false,
        error: false,
        success: false
      };
    case `${GET_ISSUING_MAINSTORE_BY_UNIT}_PENDING`:
    case `${GET_ISSUING_MAINSTORE_BY_BATCH}_PENDING`:
    case `${ADD_ISSUING_MAINSTORE_BY_UNIT}_PENDING`:
    case `${ADD_ISSUING_MAINSTORE_BY_BATCH}_PENDING`:
    case `${GET_ISSUING_SUBSTORE_BY_UNIT}_PENDING`:
    case `${ADD_ISSUING_SUBSTORE_BY_BATCH}_PENDING`:
    case `${GET_ISSUING_SUBSTORE_BY_BATCH}_PENDING`:
    case `${ADD_ISSUING_SUBSTORE_BY_UNIT}_PENDING`:
    case `${GET_SUB_STORE_SHARED_ISSING}_PENDING`:
    case `${GET_MAIN_STORE_SHARED_ISSING}_PENDING`:
    case `${GET_SHEVELES_STORE_SHARED_ISSING}_PENDING`:
    case `${VIEW_STOCK_REPORT}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${GET_ISSUING_MAINSTORE_BY_UNIT}_REJECTED`:
    case `${GET_ISSUING_MAINSTORE_BY_BATCH}_REJECTED`:
    case `${ADD_ISSUING_MAINSTORE_BY_UNIT}_REJECTED`:
    case `${ADD_ISSUING_MAINSTORE_BY_BATCH}_REJECTED`:
    case `${GET_ISSUING_SUBSTORE_BY_UNIT}_REJECTED`:
    case `${ADD_ISSUING_SUBSTORE_BY_BATCH}_REJECTED`:
    case `${GET_ISSUING_SUBSTORE_BY_BATCH}_REJECTED`:
    case `${GET_SUB_STORE_SHARED_ISSING}_REJECTED`:
    case `${GET_MAIN_STORE_SHARED_ISSING}_REJECTED`:
    case `${GET_SHEVELES_STORE_SHARED_ISSING}_REJECTED`:
    case `${ADD_ISSUING_SUBSTORE_BY_UNIT}_REJECTED`:
    case `${VIEW_STOCK_REPORT}_REJECTED`:
    case  `${GET_BLOOD_TYPE_WITH_MAINSTORE_ID}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${ADD_ISSUING_MAINSTORE_BY_UNIT}_FULFILLED`:
    case `${ADD_ISSUING_MAINSTORE_BY_BATCH}_FULFILLED`:
    case `${ADD_ISSUING_SUBSTORE_BY_BATCH}_FULFILLED`:
    case `${ADD_ISSUING_SUBSTORE_BY_UNIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };
      case  `${GET_BLOOD_TYPE_WITH_MAINSTORE_ID}_FULFILLED`: 
      return{
        ...state,
        isPending: false,
        bloodMainStoreType: action.payload.body
      }
    case `${GET_SUB_STORE_SHARED_ISSING}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        sharedSubStoreData: action.payload.body
      };
    case `${GET_MAIN_STORE_SHARED_ISSING}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        sharedMainStoreData: action.payload.body
      };

    case `${GET_SHEVELES_STORE_SHARED_ISSING}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        sharedShevelesData: action.payload.body
      };
    case `${GET_ISSUING_SUBSTORE_BY_BATCH}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        issuingSubStoreByBatchData: action.payload.body
      };
    case `${GET_ISSUING_SUBSTORE_BY_UNIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        issuingSubStoreByUnitData: action.payload.body
      };
    case `${GET_ISSUING_MAINSTORE_BY_UNIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        issuingMainStoreByUnitData: action.payload.body
      };
    case `${GET_ISSUING_MAINSTORE_BY_BATCH}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        issuingSubStoreByBatchData: action.payload.body
      };
    case `${VIEW_STOCK_REPORT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        stockReportData: action.payload.body
      };
    default:
      return state;
  }
}
