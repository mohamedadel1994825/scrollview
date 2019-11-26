import serology from "api/serology/reconciliation";

//===========Constant================
export const ADD_SAMPLES = "ADD_SAMPLES";
export const GET_COLLECTION_SITESRECON = "GET_COLLECTION_SITESRECON";
export const GET_SITES_HISTORY = "GET_SITES_HISTORY";
export const GET_ALLRECONCILATION_SAMPLES = "GET_ALLRECONCILATION_SAMPLES";
export const SAVE_CHANGES = "SAVE_CHANGES";
export const GET_RECON_AUDIT = "GET_RECON_AUDIT";
export const RESET_RECONC_SEROLOGY_STORE = "RESET_RECONC_SEROLOGY_STORE";
export const RESET_RECONC_SEROLOGY_ERROR = "RESET_RECONC_SEROLOGY_ERROR";
///===========Action==================
export function addSamples(data) {
  return {
    type: ADD_SAMPLES,
    payload: serology.addsamples(data)
  };
}
export function getCollectionsites() {
  return {
    type: GET_COLLECTION_SITESRECON,
    payload: serology.getCollectionSites()
  };
}
export function getCollectionsiteshistory(data) {
  return {
    type: GET_SITES_HISTORY,
    payload: serology.getCollectionsiteshistory(data)
  };
}

export function getAllReconciliationsAudit(data) {
  return {
    type: GET_RECON_AUDIT,
    payload: processing.getAllReconciliationsAudit(data)
  };
}
export function saveChangesOnClickItem(data) {
  return {
    type: SAVE_CHANGES,
    payload: serology.saveChangesOnClickItem(data)
  };
}
export function getAllReconciliationsSamples(data) {
  return {
    type: GET_ALLRECONCILATION_SAMPLES,
    payload: serology.getAllReconciliationsSamples(data)
  };
}
export function serologyReconResetError() {
  return {
    type: RESET_RECONC_SEROLOGY_ERROR
  };
}
export function serologyReconResetStore() {
  return {
    type: RESET_RECONC_SEROLOGY_STORE
  };
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  reconciliationData: [],
  reconAudit: [],
  samples: [],
  collectionsites: [],
  isPending: false,
  error: false,
  time: "All",
  disableAddNewRow: true,
  rowItem: [],
  success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function reconcilationReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_RECONC_SEROLOGY_ERROR:
      return {
		error: false,
		success: false
      };
    case RESET_RECONC_SEROLOGY_STORE:
      return {
        reconciliationData: [],
        reconAudit: [],
        samples: [],
        collectionsites: [],
        isPending: false,
        error: false,
        time: "All",
        disableAddNewRow: true,
        rowItem: [],
        success: false
      };
    case `${SAVE_CHANGES}_PENDING`:
    case `${GET_SITES_HISTORY}_PENDING`:
    case `${GET_ALLRECONCILATION_SAMPLES}_PENDING`:
    case `${GET_RECON_AUDIT}_PENDING`:
    case `${ADD_SAMPLES}_PENDING`:
    case `${GET_COLLECTION_SITESRECON}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false,
        success: false
      };
    case `${SAVE_CHANGES}_REJECTED`:
    case `${ADD_SAMPLES}_REJECTED`:
    case `${GET_RECON_AUDIT}_REJECTED`:

    case `${GET_ALLRECONCILATION_SAMPLES}_REJECTED`:

    case `${GET_COLLECTION_SITESRECON}_REJECTED`:
    case `${GET_SITES_HISTORY}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${ADD_SAMPLES}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: "Saved Successfully"
      };
    case `${GET_COLLECTION_SITESRECON}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        collectionsites: action.payload.body
      };

    case `${GET_SITES_HISTORY}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        reconciliationData: action.payload.body
      };
    case `${GET_RECON_AUDIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        reconAudit: action.payload.body
      };

    case `${SAVE_CHANGES}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        rowItem: action.payload.body
      };

    case `${GET_ALLRECONCILATION_SAMPLES}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        samples: action.payload.body
      };
    default:
      return state;
  }
}
