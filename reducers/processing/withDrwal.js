import processing from "api/processing/withDrwal";

//===========Constant================
export const GET_WITHDRWALPROCESS = "GET_WITHDRWALPROCESS";
export const ADD_WITHDRWALPROCESS = "ADD_WITHDRWALPROCESS";
export const RESETERROR_WITHDRWALPROCESSPROCESSING = "RESETERROR_WITHDRWALPROCESSPROCESSING";
export const RESET_STORE_WITHDRWALPROCESSING = "RESETERROR_WITHDRWALPROCESSPROCESSING";
///===========Action==================

export function resetErrorWithDrwal() {
  return {
    type: RESETERROR_WITHDRWALPROCESSPROCESSING
  };
}
export function addWithDrawlData (data) {
    return {
      type: ADD_WITHDRWALPROCESS,
      payload: processing.addWithDrawlData(data)
    };
  }
  export function getWithDrawlData (data) {
    return {
      type: GET_WITHDRWALPROCESS,
      payload: processing.getWithDrawlData(data)
    };
  }
  export function resetWithDrwalProcessingData(){
    return{
      type: RESET_STORE_WITHDRWALPROCESSING
    }
  }
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  withDrwalData: null,
  afterWithDrwal: null,
  isPending: false,
  error: false,
  success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function  WithDrwalProcessReducer(state = initialState, action) {
  switch (action.type) {
    case RESETERROR_WITHDRWALPROCESSPROCESSING:
      return {
        ...state,
        error: false,
        success: false
      };
    case RESET_STORE_WITHDRWALPROCESSING:
      return{
        withDrwalData: null,
        afterWithDrwal: null,
        isPending: false,
        error: false,
        success: false
      }  
    case `${ADD_WITHDRWALPROCESS}_PENDING`:
    case `${GET_WITHDRWALPROCESS}_PENDING`:
 
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${ADD_WITHDRWALPROCESS}_REJECTED`:
    case `${GET_WITHDRWALPROCESS}_REJECTED`:

      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${ADD_WITHDRWALPROCESS}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        afterWithDrwal: action.payload.body,
        success: 'Saved Successfully'
      };

    case `${GET_WITHDRWALPROCESS}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        withDrwalData: action.payload.body
      };
    default:
      return state;
  }
}
