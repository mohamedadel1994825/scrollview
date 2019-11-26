import processing from "api/processing/labelPrinting";

//===========Constant================
export const ADD_PRINTPROCESS = "ADD_PRINTPROCESS";
export const GET_PRINT_BYUNIT = "GET_PRINT_BYUNIT";
export const VERFIT_LABEL_PRINTING = "VERFIT_LABEL_PRINTING";
export const RESETERROR_PROCESS_LABEL_PRINTING = "RESETERROR_PROCESS_LABEL_PRINTING";
export const RESET_STORE_LABElPROCESSING_STORE = "RESET_STORE_LABElPROCESSING_STORE";
///===========Action==================

export function resetErrorProcessLabelPrinting() {
  return {
    type: RESETERROR_PROCESS_LABEL_PRINTING
  };
}
export function getPrintByUnit (data) {
    return {
      type: GET_PRINT_BYUNIT,
      payload: processing.getPrintByUnit(data)
    };
  }
  export function addPrintProcess(data) {
    return {
      type: ADD_PRINTPROCESS,
      payload: processing.addPrintProcess(data)
    };
  }
  export function verifyLabel(data){
    return {
      type: VERFIT_LABEL_PRINTING,
      payload: processing.verifyLabel(data)
    };
  }
  export function resetLabelPrintingStore(){
    return{
      type: RESET_STORE_LABElPROCESSING_STORE
    }
  }
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
 printingUnitData: null,
  isPending: false,
  error: false,
  success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function  LabelPrintingProcessReducer(state = initialState, action) {
  switch (action.type) {
    case RESETERROR_PROCESS_LABEL_PRINTING:
      return {
        ...state,
        error: false,
        success: false
      };
      case RESET_STORE_LABElPROCESSING_STORE:
        return{
          printingUnitData: null,
          isPending: false,
          error: false,
          success: false
        }
    case `${GET_PRINT_BYUNIT}_PENDING`:
    case `${ADD_PRINTPROCESS}_PENDING`:
    case `${VERFIT_LABEL_PRINTING}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${GET_PRINT_BYUNIT}_REJECTED`:
    case `${ADD_PRINTPROCESS}_REJECTED`:
    case `${VERFIT_LABEL_PRINTING}_REJECTED`:

      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${ADD_PRINTPROCESS}_FULFILLED`:
    case `${VERFIT_LABEL_PRINTING}_FULFILLED`:  
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };

    case `${GET_PRINT_BYUNIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        printingUnitData: action.payload.body
      };
    default:
      return state;
  }
}
