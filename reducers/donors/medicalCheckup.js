import donors from "api/donors/medicalCheckup";

//===========Constant================
export const GET_MEDICALCHECKUPDROPDOWN = "GET_MEDICALCHECKUPDROPDOWN";
export const GET_VISITS = "GET_VISITS";
export const ADD_MEDICALCHECKUP = "ADD_MEDICALCHECKUP";
export const RESETERROR_MEDICALCHECKUP = "RESETERROR_MEDICALCHECKUP";
export const RESETE_MEDICALCHECKUP_STORE = "RESETE_MEDICALCHECKUP_STORE";
export const EDIT_MEDICALCHECKUP = "EDIT_MEDICALCHECKUP";
export const GET_MEDICAL_CHECKUPWITHVISTID = "GET_MEDICAL_CHECKUPWITHVISTID";
///===========Action==================

/// ===========GeT ALL DONORS DROWPDON=====================

export function getMedicalcheckupDropDown() {
  return {
    type: GET_MEDICALCHECKUPDROPDOWN,
    payload: donors.getMedicalcheckupDropDown()
  };
}
export function getVisitData(visitId) {
  return {
    type: GET_VISITS,
    payload: donors.getVisitData(visitId)
  };
}
export function addMedicalCheckUpData(data) {
  return {
    type: ADD_MEDICALCHECKUP,
    payload: donors.addMedicalCheckUpData(data)
  };
}
export function editMedicalCheckUpData(visitId, data) {
  return {
    type: EDIT_MEDICALCHECKUP,
    payload: donors.editMedicalCheckUpData(visitId, data)
  };
}
export function getMedicalcheckupWithVistId(visitId){
  return{
    type:GET_MEDICAL_CHECKUPWITHVISTID,
    payload: donors.getMedicalcheckupWithVistId(visitId)
  }
}
export function resetErrorMedicalCheckUp() {
  return {
    type: RESETERROR_MEDICALCHECKUP
  };
}
export function resetStoreMedicalCheckUp() {
  return {
    type: RESETE_MEDICALCHECKUP_STORE
  };
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  MedicalcheckupDropDownArr: null,
  medicalCheckupEditArr: null,
  visit: null,
  isPending: false,
  error: false,
  success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function DonorMedicalCheckUpReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case RESETERROR_MEDICALCHECKUP:
      return {
        ...state,
        error: false,
        success: false
      };
    case RESETE_MEDICALCHECKUP_STORE:
      return {
        MedicalcheckupDropDownArr: null,
        visit: null,
        isPending: false,
        error: false,
        success: false
      };
    case `${GET_MEDICALCHECKUPDROPDOWN}_PENDING`:
    case `${GET_VISITS}_PENDING`:
    case `${ADD_MEDICALCHECKUP}_PENDING`:
    case `${EDIT_MEDICALCHECKUP}_PENDING`:
    case `${GET_MEDICAL_CHECKUPWITHVISTID}_PENDING`: 
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${GET_MEDICALCHECKUPDROPDOWN}_REJECTED`:
    case `${GET_VISITS}_REJECTED`:
    case `${ADD_MEDICALCHECKUP}_REJECTED`:
    case `${EDIT_MEDICALCHECKUP}_REJECTED`:
    case `${GET_MEDICAL_CHECKUPWITHVISTID}_REJECTED`:  
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    case `${GET_MEDICAL_CHECKUPWITHVISTID}_FULFILLED`:  
    return {
      ...state,
      isPending: false,
      medicalCheckupEditArr: action.payload.body
    };
    case `${GET_MEDICALCHECKUPDROPDOWN}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        MedicalcheckupDropDownArr: action.payload.body
      };
    case `${GET_VISITS}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        visit: action.payload.body
      };
    case `${ADD_MEDICALCHECKUP}_FULFILLED`:
    case `${EDIT_MEDICALCHECKUP}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };
    default:
      return state;
  }
}
