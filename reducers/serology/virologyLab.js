import serology from "api/serology/virologyLab";

//===========Constant================
export const GET_ALL_VIROLOGY_LAB = "GET_ALL_VIROLOGY_LAB";
export const ADD_ALL_VIROLOGY_LAB = "ADD_ALL_VIROLOGY_LAB";
export const RESET_SEROLOGY_VIROLOGY_ERROR = "RESET_SEROLOGY_VIROLOGY_ERROR";
export const RESET_SEROLOGY_VIROLOGY_RESET = "RESET_SEROLOGY_VIROLOGY_RESET";
export const GET_LIPEMIC_TEST = "GET_LIPEMIC_TEST";
export const ADD_LIPEMIC_TEST = "ADD_LIPEMIC_TEST";
///===========Action==================

export function getVirologyLab(data) {
  return {
    type: GET_ALL_VIROLOGY_LAB,
    payload: serology.getVirologyLab(data)
  };
}
export function submitVirologySamples(data) {
  return {
    type: ADD_ALL_VIROLOGY_LAB,
    payload: serology.submitVirologySamples(data)
  };
}
export function resetSerologyErrorVirology() {
  return {
    type: RESET_SEROLOGY_VIROLOGY_ERROR
  };
}
export function resetSerologyStoreGroupingLap() {
  return {
    type: RESET_SEROLOGY_VIROLOGY_RESET
  };
}
export function getLipemicTest(data) {
  return {
    type: GET_LIPEMIC_TEST,
    payload: serology.getLipemicTest(data)
  };
}
export function addLipemicTest(data) {
  return {
    type: ADD_LIPEMIC_TEST,
    payload: serology.addLipemicTest(data)
  };
}

// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  virologyData: null,
  lipemicTestData: null,
  isPending: false,
  error: false,
  success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function virologySerologyReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_SEROLOGY_VIROLOGY_ERROR:
      return {
        error: false,
        success: false
      };
    case RESET_SEROLOGY_VIROLOGY_RESET:
      return {
        virologyData: null,
        lipemicTestData,
        isPending: false,
        error: false,
        success: false
      };
    case `${GET_ALL_VIROLOGY_LAB}_PENDING`:
    case `${ADD_ALL_VIROLOGY_LAB}_PENDING`:
    case `${GET_LIPEMIC_TEST}_PENDING`:
    case `${ADD_LIPEMIC_TEST}_PENDING`:
      return {
        ...state,
        isPending: false
      };

    case `${GET_ALL_VIROLOGY_LAB}_REJECTED`:
    case `${ADD_ALL_VIROLOGY_LAB}_REJECTED`:
    case `${GET_LIPEMIC_TEST}_REJECTED`:
    case `${ADD_LIPEMIC_TEST}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };

    case `${GET_ALL_VIROLOGY_LAB}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        virologyData: action.payload.body
      };
    case `${ADD_ALL_VIROLOGY_LAB}_FULFILLED`:
    case `${ADD_LIPEMIC_TEST}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: "Saved Successfully"
      };
    case `${GET_LIPEMIC_TEST}_FULFILLED`:
      return {
        ...state,
        lipemicTestData: action.payload.body
      };

    default:
      return state;
  }
}
