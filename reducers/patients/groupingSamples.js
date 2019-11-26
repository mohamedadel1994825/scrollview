import patients from "api/patients/groupingSamples";

export const GET_SOURCEOFSAMPLES_DROPDOWN = "GET_SOURCEOFSAMPLES_DROPDOWN";
export const GET_PHLEBOTOMIST_DROPDOWN = "GET_PHLEBOTOMIST_DROPDOWN";
export const ADD_GROUPINGSAMPLES = "ADD_GROUPINGSAMPLES";
export const RESET_ERROR_GROUPING = "RESET_ERROR_GROUPING";
export const RESET_GROUPING_PATIENT_SAMPLES = "RESET_GROUPING_PATIENT_SAMPLES";

//SOURCE SAMPLES//
export function getSourceOfSamplesDropDown() {
  return {
    type: GET_SOURCEOFSAMPLES_DROPDOWN,
    payload: patients.getSourceOfSamplesDropDown()
  };
}
/// Phlebotomist///////
export function getPhlebotomistDropDown() {
  return {
    type: GET_PHLEBOTOMIST_DROPDOWN,
    payload: patients.getPhlebotomistDropDown()
  };
}
/////ADD GROUPING SAMPLES//

export function addGroupingSamples(data) {
  return {
    type: ADD_GROUPINGSAMPLES,
    payload: patients.addGroupingSamples(data)
  };
}

export function resetErrorGroupingSamplesPatient() {
  return {
    type: RESET_ERROR_GROUPING
  };
}
export function resetStorePatientGroupingSamples() {
  return {
    type: RESET_GROUPING_PATIENT_SAMPLES
  };
}

const initialState = {
  SourceOfSamplesArr: [],
  PhlebotomistArr: [],
  GroupingSamples: [],
  isPending: false,
  error: false,
  success: false
};

// Reducer//

export default function GroupingSamplesReducer(state = initialState, action) {
  switch (action.type) {
    case `${RESET_ERROR_GROUPING}`:
      return {
        ...state,
        error: false,
        success: false
      };
    case `${RESET_GROUPING_PATIENT_SAMPLES}`:
      return {
        SourceOfSamplesArr: [],
        PhlebotomistArr: [],
        GroupingSamples: [],
        isPending: false,
        error: false,
        success: false
      };
    case `${ADD_GROUPINGSAMPLES}_PENDING`:
    case `${GET_SOURCEOFSAMPLES_DROPDOWN}_PENDING`:

    case `${GET_PHLEBOTOMIST_DROPDOWN}_PENDING`:
      return {
        ...state,
        isPending: true,
        error: false
      };
    case `${GET_SOURCEOFSAMPLES_DROPDOWN}_REJECTED`:
    case `${ADD_GROUPINGSAMPLES}_REJECTED`:

    case `${GET_PHLEBOTOMIST_DROPDOWN}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };

    case `${GET_SOURCEOFSAMPLES_DROPDOWN}_FULFILLED`:
      return {
        ...state,
        isPending: false,

        SourceOfSamplesArr: action.payload.body
      };

    case `${GET_PHLEBOTOMIST_DROPDOWN}_FULFILLED`:
      return {
        ...state,
        isPending: false,

        PhlebotomistArr: action.payload.body
      };
    case `${ADD_GROUPINGSAMPLES}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        success: 'Saved Successfully'
        // GroupingSamples: action.payload.body
      };

    default:
      return state;
  }
}
