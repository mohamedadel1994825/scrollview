import donors from "api/donors/newVisit";

//===========Constant================
export const GET_DONOR_DATA = "GET_DONOR_DATA";
export const GET_LAST_DONOR_VISIT = "GET_LAST_DONOR_VISIT";
export const GET_VISIT_ELIGABLITY = "GET_VISIT_ELIGABLITY";
export const GET_DONATION_TYPES_DROPDOWN = "GET_DONATION_TYPES_DROPDOWN";
export const GET_SUB_DONATION_TYPES_DROPDOWN =
  "GET_SUB_DONATION_TYPES_DROPDOWN";
export const GET_VALIDATEDONATIONTYPE = "GET_VALIDATEDONATIONTYPE";
export const ADD_NEW_VISIT = "ADD_NEW_VISIT";
export const GET_NEW_VIST_WITH_VISIT_ID = "GET_NEW_VIST_WITH_VISIT_ID";
export const RESETERROR_NEWVISIT = "RESETERROR_NEWVISIT";
export const RESET_NEWVISIT_STORE = "RESET_NEWVISIT_STORE";
export const EDIT_NEW_VISIT = "EDIT_NEW_VISIT";
///===========Action==================

export function getDonorData(donorId) {
  return {
    type: GET_DONOR_DATA,
    payload: donors.getDonorData(donorId)
  };
}
export function getLastDonorVisit(donorId) {
  return {
    type: GET_LAST_DONOR_VISIT,
    payload: donors.getLastDonorVisit(donorId)
  };
}
export function getVisitEligablity(donorId) {
  return {
    type: GET_VISIT_ELIGABLITY,
    payload: donors.getVisitEligablity(donorId)
  };
}
export function donationTypesDropDownList() {
  return {
    type: GET_DONATION_TYPES_DROPDOWN,
    payload: donors.donationTypesDropDownList()
  };
}

export function subDonationTypesDropDownList() {
  return {
    type: GET_SUB_DONATION_TYPES_DROPDOWN,
    payload: donors.subDonationTypesDropDownList()
  };
}
export function validateDonationType(values) {
  return {
    type: GET_VALIDATEDONATIONTYPE,
    payload: donors.validateDonationType(values)
  };
}
export function addNewVisit(values) {
  return {
    type: ADD_NEW_VISIT,
    payload: donors.addNewVisit(values)
  };
}
export function resetErrorNewVisit() {
  return {
    type: RESETERROR_NEWVISIT
  };
}
export function reaetNewVisitStore() {
  return {
    type: RESET_NEWVISIT_STORE
  };
}
export function getVisitDataWithVistId(visitId) {
  return {
    type: GET_NEW_VIST_WITH_VISIT_ID,
    payload: donors.getVisitDataWithVistId(visitId)
  };
}
export function editNewVisit(id, data) {
  return {
    type: EDIT_NEW_VISIT,
    payload: donors.editNewVisit(id, data)
  };
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  donorData: null,
  lastDonorVisit: null,
  donationTypeValid: null,
  eligibleOn: null,
  visitId: null,
  visitDataEdit: null,
  donationTypes: [],
  subDonationTypes: [],
  visitsEligibility: [],
  isPending: false,
  error: false,
  success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function DonorNewVisitReducer(state = initialState, action) {
  switch (action.type) {
    case RESETERROR_NEWVISIT:
      return {
        ...state,
        error: false,
        success: false
      };
    case RESET_NEWVISIT_STORE:
      return {
        donorData: null,
        lastDonorVisit: null,
        donationTypeValid: null,
        eligibleOn: null,
        visitId: null,
        donationTypes: [],
        subDonationTypes: [],
        visitsEligibility: [],
        isPending: false,
        error: false,
        success: false
      };
    case `${GET_DONOR_DATA}_PENDING`:
    case `${GET_LAST_DONOR_VISIT}_PENDING`:
    case `${GET_VISIT_ELIGABLITY}_PENDING`:
    case `${GET_DONATION_TYPES_DROPDOWN}_PENDING`:
    case `${GET_SUB_DONATION_TYPES_DROPDOWN}_PENDING`:
    // case `${GET_VALIDATEDONATIONTYPE}_PENDING`:
    case `${ADD_NEW_VISIT}_PENDING`:
    case `${GET_NEW_VIST_WITH_VISIT_ID}_PENDING`:
    case `${EDIT_NEW_VISIT}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${GET_DONOR_DATA}_REJECTED`:
    case `${GET_LAST_DONOR_VISIT}_REJECTED`:
    case `${GET_VISIT_ELIGABLITY}_REJECTED`:
    case `${GET_DONATION_TYPES_DROPDOWN}_REJECTED`:
    case `${GET_SUB_DONATION_TYPES_DROPDOWN}_REJECTED`:
    case `${GET_VALIDATEDONATIONTYPE}_REJECTED`:
    case `${ADD_NEW_VISIT}_REJECTED`:
    case `${GET_NEW_VIST_WITH_VISIT_ID}_REJECTED`:
    case `${EDIT_NEW_VISIT}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${GET_DONOR_DATA}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        donorData: action.payload.body
      };

    case `${GET_LAST_DONOR_VISIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        lastDonorVisit: action.payload.body
      };

    case `${GET_VISIT_ELIGABLITY}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        visitsEligibility: action.payload.body
      };

    case `${GET_DONATION_TYPES_DROPDOWN}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        donationTypes: action.payload.body
      };

    case `${GET_SUB_DONATION_TYPES_DROPDOWN}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        subDonationTypes: action.payload.body
      };
    case `${GET_VALIDATEDONATIONTYPE}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        donationTypeValid: action.payload.body.isEligibile,
        eligibleOn: action.payload.body.eligibleOn
      };
    case `${ADD_NEW_VISIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        visitId: action.payload.body.id,
        success: 'Saved Successfully'
      };

    case `${EDIT_NEW_VISIT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };
    case `${GET_NEW_VIST_WITH_VISIT_ID}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        visitDataEdit: action.payload.body
      };

    default:
      return state;
  }
}
