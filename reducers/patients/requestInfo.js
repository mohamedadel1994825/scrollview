import patients from 'api/patients/requestInfo';

export const GET_CATEGORY_DROPDOWN = 'GET_CATEGORY_DROPDOWN';
export const GET_HOSPITAL_DROPDOWN = 'GET_HOSPITAL_DROPDOWN';
export const GET_PHONETYPES_DROPDOWN = 'GET_PHONETYPES_DROPDOWN';
export const GET_TRANSNFUSIONS_DROPDOWN = 'GET_TRANSNFUSIONS_DROPDOWN';
export const GET_DIAGNOSIS_DROPDOWN = 'GET_DIAGNOSIS_DROPDOWN';
export const GET_PRIORITY_DROPDOWN = 'GET_PRIORITY_DROPDOWN';
export const GET_PATIENTSTYPES_DROPDOWN = 'GET_PATIENTSTYPES_DROPDOWN';
export const GET_PHYSICIANS_DROPDOWN = 'GET_PHYSICIANS_DROPDOWN';
export const GET_SURGYTYPES_DROPDOWN = 'GET_SURGYTYPES_DROPDOWN';
export const GET_SERVICES_DROPDOWN = 'GET_SERVICES_DROPDOWN';
export const GET_MEDICATIONS_DROPDOWN = 'GET_MEDICATIONS_DROPDOWN';
export const ADD_REQUEST_INFO = 'ADD_REQUEST_INFO';
export const GET_REQUEST_DATA = 'GET_REQUEST_DATA';
export const RESET_ERROR_PATIENT_REQEST_INFO = "RESET_ERROR_PATIENT_REQEST_INFO";
export const RESET_STORE_PATIENT_REQEST_INFO = "RESET_STORE_PATIENT_REQEST_INFO";

//CATEGORIES
export function getRequestCategoryDropDown() {
	return {
		type: GET_CATEGORY_DROPDOWN,
		payload: patients.getRequestCategoryDropDown()
	};
}
//HOSPITALS
export function getRequestHospitalDropDown() {
	return {
		type: GET_HOSPITAL_DROPDOWN,
		payload: patients.getRequestHospitalDropDown()
	};
}
//PHONE TYPES
export function getRequestPhoneTypesDropDown() {
	return {
		type: GET_PHONETYPES_DROPDOWN,
		payload: patients.getRequestPhoneTypesDropDown()
	};
}
//Trasnfusions//

export function getRequestTrasnfusionsDropDown() {
	return {
		type: GET_TRANSNFUSIONS_DROPDOWN,
		payload: patients.getRequestTrasnfusionsDropDown()
	};
}
//diagnosis//

export function getRequestDiagnosisDropDown() {
	return {
		type: GET_DIAGNOSIS_DROPDOWN,
		payload: patients.getRequestDiagnosisDropDown()
	};
}
//PRIORITY
export function getRequestPriorityDropDown() {
	return {
		type: GET_PRIORITY_DROPDOWN,
		payload: patients.getRequestPriorityDropDown()
	};
}
//PATIENTS TYPES
export function getRequestPatientsTypesDropDown() {
	return {
		type: GET_PATIENTSTYPES_DROPDOWN,
		payload: patients.getRequestPatientsTypesDropDown()
	};
}
//PHYSICIANS
export function getRequestPhyisiciansDropDown() {
	return {
		type: GET_PHYSICIANS_DROPDOWN,
		payload: patients.getRequestPhyisiciansDropDown()
	};
}
//surgey types
export function getRequestSurgeyTypesDropDown() {
	return {
		type: GET_SURGYTYPES_DROPDOWN,
		payload: patients.getRequestSurgeyTypesDropDown()
	};
}
//services
export function getRequestServicesDropDown() {
	return {
		type: GET_SERVICES_DROPDOWN,
		payload: patients.getRequestServicesDropDown()
	};
}
//Medication
export function getRequestMedicationsDropDown() {
	return {
		type: GET_MEDICATIONS_DROPDOWN,
		payload: patients.getRequestMedicationsDropDown()
	};
}
////add request info
export function addRequestInfo(data) {
	return {
		type: ADD_REQUEST_INFO,
		payload: patients.addRequestInfo(data)
	};
}
///GET REQUEST DATA
export function getRequestData(requestId) {
	return {
		type: GET_REQUEST_DATA,
		payload: patients.getRequestData(requestId)
	};
}

export function resetReqestInfoPatientError(){
	return {
		type: RESET_ERROR_PATIENT_REQEST_INFO
	}
}
export function resetReqestInfoStore(){
	return{
		type: RESET_STORE_PATIENT_REQEST_INFO
	}
}

const initialState = {
	categories: [],
	hospitals: [],
	phoneTypes: [],
	trasnfusions: [],
	diagnosis: [],
	priority: [],
	patientTypes: [],
	physicians: [],
	surgeryTypes: [],
	services: [],
	therapy: [],
	requestData: [],
	patiantId: null,
	isPending: false,
	error: false
};

// Reducer
// ------------------------------------

export default function RequestInfoReducer(state = initialState, action) {
	switch (action.type) {
		case `${RESET_ERROR_PATIENT_REQEST_INFO}`:
			return{
				...state,
				error: false,
				success: false
			}
		case `${RESET_STORE_PATIENT_REQEST_INFO}`:
			return{
				categories: [],
				hospitals: [],
				phoneTypes: [],
				trasnfusions: [],
				diagnosis: [],
				priority: [],
				patientTypes: [],
				physicians: [],
				surgeryTypes: [],
				services: [],
				therapy: [],
				requestData: [],
				patiantId: null,
				isPending: false,
				error: false,
				success: false
			}	
		case `${GET_CATEGORY_DROPDOWN}_PENDING`:
		case `${GET_HOSPITAL_DROPDOWN}_PENDING`:
		case `${GET_PHONETYPES_DROPDOWN}_PENDING`:
		case `${GET_TRANSNFUSIONS_DROPDOWN}_PENDING`:
		case `${GET_DIAGNOSIS_DROPDOWN}_PENDING`:
		case `${GET_PATIENTSTYPES_DROPDOWN}_PENDING`:
		case `${GET_PHYSICIANS_DROPDOWN}_PENDING`:
		case `${GET_SURGYTYPES_DROPDOWN}_PENDING`:
		case `${GET_SERVICES_DROPDOWN}_PENDING`:
		case `${GET_MEDICATIONS_DROPDOWN}_PENDING`:
		case `${ADD_REQUEST_INFO}_PENDING`:
		case `${GET_REQUEST_DATA}_PENDING`:
			return {
				...state,
				isPending: true,
				error: false
			};
		case `${GET_CATEGORY_DROPDOWN}_REJECTED`:
		case `${GET_HOSPITAL_DROPDOWN}_REJECTED`:
		case `${GET_PHONETYPES_DROPDOWN}_REJECTED`:
		case `${GET_TRANSNFUSIONS_DROPDOWN}_REJECTED`:
		case `${GET_DIAGNOSIS_DROPDOWN}_REJECTED`:
		case `${GET_PRIORITY_DROPDOWN}_REJECTED`:
		case `${GET_PATIENTSTYPES_DROPDOWN}_REJECTED`:
		case `${GET_PHYSICIANS_DROPDOWN}_REJECTED`:
		case `${GET_SURGYTYPES_DROPDOWN}_REJECTED`:
		case `${GET_SERVICES_DROPDOWN}_REJECTED`:
		case `${GET_MEDICATIONS_DROPDOWN}_REJECTED`:
		case `${ADD_REQUEST_INFO}_REJECTED`:
		case `${GET_REQUEST_DATA}_REJECTED`:
			return {
				...state,
				isPending: false,
				error: action.payload
			};
		case `${GET_CATEGORY_DROPDOWN}_FULFILLED`:
			return {
				...state,
				isPending: false,

				categories: action.payload.body
			};

		case `${GET_HOSPITAL_DROPDOWN}_FULFILLED`:
			return {
				...state,
				isPending: false,

				hospitals: action.payload.body
			};

		case `${GET_PHONETYPES_DROPDOWN}_FULFILLED`:
			return {
				...state,
				isPending: false,

				phoneTypes: action.payload.body
			};

		case `${GET_TRANSNFUSIONS_DROPDOWN}_FULFILLED`:
			return {
				...state,
				isPending: false,

				trasnfusions: action.payload.body
			};

		case `${GET_DIAGNOSIS_DROPDOWN}_FULFILLED`:
			return {
				...state,
				isPending: false,

				diagnosis: action.payload.body
			};

		case `${GET_PRIORITY_DROPDOWN}_FULFILLED`:
			return {
				...state,
				isPending: false,

				priority: action.payload.body
			};
		case `${GET_PATIENTSTYPES_DROPDOWN}_FULFILLED`:
			return {
				...state,
				isPending: false,

				patientTypes: action.payload.body
			};
		case `${GET_PHYSICIANS_DROPDOWN}_FULFILLED`:
			return {
				...state,
				isPending: false,

				physicians: action.payload.body
			};
		case `${GET_SURGYTYPES_DROPDOWN}_FULFILLED`:
			return {
				...state,
				isPending: false,

				surgeryTypes: action.payload.body
			};
		case `${GET_SERVICES_DROPDOWN}_FULFILLED`:
			return {
				...state,
				isPending: false,

				services: action.payload.body
			};
		case `${GET_MEDICATIONS_DROPDOWN}_FULFILLED`:
			return {
				...state,
				isPending: false,

				therapy: action.payload.body
			};
		case `${ADD_REQUEST_INFO}_FULFILLED`:
			return {
				...state,
				isPending: false,
				success: 'Saved Successfully'
			};

		case `${GET_REQUEST_DATA}_FULFILLED`:
			return {
				...state,
				isPending: false,

				requestData: action.payload.body
			};

		default:
			return state;
	}
}
