import donors from "api/donors/searchDonor";

//===========Constant================
export const SEARCH_DONORS = "SEARCH_DONORS";
export const RESETERROR_SEARCH_DONORS = "RESETERROR_SEARCH_DONORS";
export const RESET_STORE_DONONR_SEARCH = "RESET_STORE_DONONR_SEARCH";
///===========Action==================
export function searchDonors(data) {
  return {
    type: SEARCH_DONORS,
    payload: donors.searchdonor(data)
  };
}
export function resetErrorSearchDonor() {
  return {
    type: RESETERROR_SEARCH_DONORS
  };
}
export function resetSearchDonorStore() {
  return {
    type: RESET_STORE_DONONR_SEARCH
  };
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  donors: [],
  isPending: false,
  error: false,
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function DonorSearchReducer(state = initialState, action) {
  switch (action.type) {
    case RESETERROR_SEARCH_DONORS:
      return {
        ...state,
        error: false
      };
    case `${RESET_STORE_DONONR_SEARCH}`:
      return {
        donors: [],
        isPending: false,
        error: false
      };
    case `${SEARCH_DONORS}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${SEARCH_DONORS}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${SEARCH_DONORS}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        donors: action.payload.body
      };

    default:
      return state;
  }
}
