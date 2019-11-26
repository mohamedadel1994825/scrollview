import donors from "api/donors/phlebotomy";

//===========Constant================
export const GET_PHLBOTOMYUPDROPDOWN = "GET_PHLBOTOMYUPDROPDOWN";

export const ADD_PHLBOTOMY = "ADD_PHLBOTOMY";
export const EDIT_PHLBOTOMY = "EDIT_PHLBOTOMY";
export const RESETERROR_PHLBOTOMY = "RESETERROR_PHLBOTOMY";
export const GET_PHLBOTOMY_VISTID = "GET_PHLBOTOMY_VISTID";
export const RESETSTORE_PHLBOTOMY = "RESETSTORE_PHLBOTOMY";
export const CHECK_BARCODE_EXIST = "CHECK_BARCODE_EXIST"
///===========Action==================

/// ===========GeT ALL DONORS DROWPDON=====================

export function getPhlebotomyDropDown() {
  return {
    type: GET_PHLBOTOMYUPDROPDOWN,
    payload: donors.getPhlebotomyDropDown()
  };
}

export function addPhlebotomyData(data) {
  return {
    type: ADD_PHLBOTOMY,
    payload: donors.addPhlebotomyData(data)
  };
}
export function editPhlbotmyData(id, data) {
  return {
    type: EDIT_PHLBOTOMY,
    payload: donors.editPhlbotmyData(id, data)
  };
}
export function resetErrorPhlebotomy() {
  return {
    type: RESETERROR_PHLBOTOMY
  };
}
export function getPhlebotomyVistId(visitId){
  return{
    type: GET_PHLBOTOMY_VISTID,
    payload: donors.getPhlebotomyVistId(visitId)
  }
}
export function resetPhlebotomyStore() {
  return {
    type: RESETSTORE_PHLBOTOMY
  };
}
export function checkBarcodeExist(barcode) {
  return {
    type: CHECK_BARCODE_EXIST,
    payload: donors.checkBarcodeExist(barcode)

  };
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  phlebotomyDropDownArr: null,
  phlbotomyEditArr: null,
  isPending: false,
  error: false,
  success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function DonorPhlebotomyReducer(state = initialState, action) {
  switch (action.type) {
    case RESETERROR_PHLBOTOMY:
      return {
        ...state,
        error: false,
        success: false
      };
    case RESETSTORE_PHLBOTOMY:
      return {
        phlebotomyDropDownArr: null,
        isPending: false,
        error: false,
        success: false
      };
    case `${GET_PHLBOTOMYUPDROPDOWN}_PENDING`:
    case `${ADD_PHLBOTOMY}_PENDING`:
    case `${EDIT_PHLBOTOMY}_PENDING`:
    case `${GET_PHLBOTOMY_VISTID}_PENDING`:      
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${GET_PHLBOTOMYUPDROPDOWN}_REJECTED`:
    case `${ADD_PHLBOTOMY}_REJECTED`:
    case `${EDIT_PHLBOTOMY}_REJECTED`:
    case `${GET_PHLBOTOMY_VISTID}_REJECTED`:
    case `${CHECK_BARCODE_EXIST}_REJECTED`:      
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
      case `${CHECK_BARCODE_EXIST}_FULFILLED`:  
      return{
        ...state,
        isPending: false,      }    

      case `${GET_PHLBOTOMY_VISTID}_FULFILLED`:      
      return {
        ...state,
        isPending: false,
        phlbotomyEditArr: action.payload.body
      };
    case `${GET_PHLBOTOMYUPDROPDOWN}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        phlebotomyDropDownArr: action.payload.body
      };

    case `${ADD_PHLBOTOMY}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'

      };
    case `${EDIT_PHLBOTOMY}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
      };
    default:
      return state;
  }
}
