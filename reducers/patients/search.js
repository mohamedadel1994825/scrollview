import patients from 'api/patients/searchPatients';

//===========Constant================
export const SEARCH_PATIENTS = 'SEARCH_PATIENTS';
export const RESETERROR_SEARCH_PATIENTS = 'RESETERROR_SEARCH_PATIENTS';

///===========Action==================
export function searchPatients(data) {
	return {
		type: SEARCH_PATIENTS,
		payload: patients.searchPatients(data)
	};
}
export function resetErrorSearchPatient() {
	return {
		type: RESETERROR_SEARCH_PATIENTS
	};
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
	patients: [],
	isPending: false,
	error: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function PatientSearchReducer(state = initialState, action) {
	switch (action.type) {
		case RESETERROR_SEARCH_PATIENTS:
			return {
				...state,
				error: false
			};
		case `${SEARCH_PATIENTS}_PENDING`:
			return {
				...state,
				isPending: true,
				error: false
			};
		case `${SEARCH_PATIENTS}_REJECTED`:
			return {
				...state,
				isPending: false,
				error: action.payload
			};
		case `${SEARCH_PATIENTS}_FULFILLED`:
			return {
				...state,
				isPending: false,
				patients: action.payload.body
			};

		default:
			// console.log(state);
			return state;
	}
}
