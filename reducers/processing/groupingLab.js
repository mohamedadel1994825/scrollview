import processing from "api/processing/groupingLab";

//===========Constant================
export const GET_GROUPINGSAMPLE = "GET_GROUPINGSAMPLE";
export const ADD_GROUPINGSAMPLE = "ADD_GROUPINGSAMPLE";
export const GET_AUDIT_GROUPINGLAB = "GET_AUDIT_GROUPINGLAB";
export const RESETERROR_GROUPINGLABPROCESSING ="RESETERROR_GROUPINGLABPROCESSING";
export const RESET_GROUPING_SAMPLE_PROCESSING ="RESET_GROUPING_SAMPLE_PROCESSING";
export const EDIT_GROBUINGLAB_SAMPLES = "EDIT_GROBUINGLAB_SAMPLES";  
///===========Action==================

export function resetErrorProcessGroupLabing() {
  return {
    type: RESETERROR_GROUPINGLABPROCESSING
  };
}
export function addGroupingLabSamples(data) {
  return {
    type: ADD_GROUPINGSAMPLE,
    payload: processing.addGroupingLabSamples(data)
  };
}
export function getGroupingSamples(data) {
  return {
    type: GET_GROUPINGSAMPLE,
    payload: processing.getGroupingSamples(data)
  };
}
export function getAuditSamplesData(data) {
  return {
    type: GET_AUDIT_GROUPINGLAB,
    payload: processing.getAuditSamplesData(data)
  };
}
export function editAuditBarcode(barcodeId, data) {
	return {
		type: EDIT_GROBUINGLAB_SAMPLES,
		payload: processing.editAuditBarcode(barcodeId, data)
	};
}
export function resetStoreGroupingSamplesStore() {
  return {
    type: RESET_GROUPING_SAMPLE_PROCESSING
  };
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  bagData: null,
  bagAuditData: null,
  isPending: false,
  error: false,
  success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function GroupingLabProcessReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case RESETERROR_GROUPINGLABPROCESSING:
      return {
        ...state,
        error: false,
        success: false
      };
    case RESET_GROUPING_SAMPLE_PROCESSING:
      return {
        bagData: null,
        bagAuditData: null,
        isPending: false,
        error: false,
        success: false

      };
    case `${GET_GROUPINGSAMPLE}_PENDING`:
    case `${ADD_GROUPINGSAMPLE}_PENDING`:
    case `${GET_AUDIT_GROUPINGLAB}_PENDING`:
    case `${EDIT_GROBUINGLAB_SAMPLES}_PENDING`:  
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${GET_GROUPINGSAMPLE}_REJECTED`:
    case `${ADD_GROUPINGSAMPLE}_REJECTED`:
    case `${GET_AUDIT_GROUPINGLAB}_REJECTED`:
    case `${EDIT_GROBUINGLAB_SAMPLES}_REJECTED`:  
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${ADD_GROUPINGSAMPLE}_FULFILLED`:
    case `${EDIT_GROBUINGLAB_SAMPLES}_FULFILLED`:  
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };

    case `${GET_GROUPINGSAMPLE}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        bagData: action.payload.body
      };
    case `${GET_AUDIT_GROUPINGLAB}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        bagAuditData: action.payload.body
      };
    default:
      return state;
  }
}
