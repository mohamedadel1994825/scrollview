import donors from "api/donors/regesterDonors";

//===========Constant================
export const REGESTER_DROPDOWN = "REGESTER_DROPDOWN";
export const ADDNEWDONOR = "ADDNEWDONOR";
export const RESETERROR_REGESTER = "RESETERROR_REGESTER";
export const RESET_DONOR_REGESTER = "RESET_DONOR_REGESTER";
export const EDIT_DONOR_INFO = "EDIT_DONOR_INFO";
///===========Action==================

/// ===========GeT ALL DONORS DROWPDON=====================

export function getRegesterDropDown() {
  return {
    type: REGESTER_DROPDOWN,
    payload: donors.getRegesterDropDown()
  };
}
export function regesterNewDonor(data) {
  return {
    type: ADDNEWDONOR,
    payload: donors.regesterNewDonor(data)
  };
}
export function resetErrorDonorRegester() {
  return {
    type: RESETERROR_REGESTER
  };
}
export function resetStoreDonationRegester() {
  return {
    type: RESET_DONOR_REGESTER
  };
}
export function editDonorDtata(donorID, data) {
  return {
    type: EDIT_DONOR_INFO,
    payload: donors.editDonorDtata(donorID, data)
  };
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  donorsRegesterDropDown: null,
  donorId: null,
  isPending: false,
  error: false,
  success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function DonorRegesterReducer(state = initialState, action) {
  switch (action.type) {
    case RESETERROR_REGESTER:
      return {
        ...state,
        error: false,
        success: false
      };
    case RESET_DONOR_REGESTER:
      return {
        donorsRegesterDropDown: null,
        donorId: null,
        isPending: false,
        error: false,
        success: false
      };
    case `${REGESTER_DROPDOWN}_PENDING`:
    case `${EDIT_DONOR_INFO}_PENDING`:
    case `${ADDNEWDONOR}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${REGESTER_DROPDOWN}_REJECTED`:
    case `${ADDNEWDONOR}_REJECTED`:
    case `${EDIT_DONOR_INFO}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${REGESTER_DROPDOWN}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        donorsRegesterDropDown: action.payload.body
      };
    case `${ADDNEWDONOR}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        donorId: action.payload.body,
        success: 'Saved Successfully'

      };
      case `${EDIT_DONOR_INFO}_FULFILLED`:
        return {
          ...state,
          isPending: false,
          success: 'Saved Successfully'
        }
    default:
      return state;
  }
}
