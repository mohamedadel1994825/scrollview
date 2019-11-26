import patients from 'api/patients/regestedPatient';

export const ADD_NEW_PATIENT = 'ADD_NEW_PATIENT';
export const RESET_ERROR_REGESTER_PATIENT = "RESET_ERROR_REGESTER_PATIENT";
export const RESET_STORE_PATIENT_REGESTER = "RESET_STORE_PATIENT_REGESTER";

export function regesterNewPatient(data) {
	return {
		type: ADD_NEW_PATIENT,
		payload: patients.regesterNewPatient(data)
	};
}
export function resetErrorRegesterPatient(){
	return{
		type: RESET_ERROR_REGESTER_PATIENT
	}
}
export function resetPatientStorePatient(){
	return{
		type: RESET_STORE_PATIENT_REGESTER
	}
}
const initialState = {
	patiantId: null,
	isPending: false,
	error: false,
	success: false
};

// Reducer
// ------------------------------------

export default function PatientRegisterReducer(state = initialState, action) {
	switch (action.type) {
		case `${RESET_ERROR_REGESTER_PATIENT}`:
			return{
				...state,
				error: false,
				success: false
			}
		case `${RESET_STORE_PATIENT_REGESTER}`:
			return{
				patiantId: null,
				isPending: false,
				error: false,
				success: false
			}	
		case `${ADD_NEW_PATIENT}_PENDING`:
			return {
				...state,
				isPending: true,
				error: false
			};
		case `${ADD_NEW_PATIENT}_REJECTED`:
			return {
				...state,
				isPending: false,
				error: action.payload
			};
		case `${ADD_NEW_PATIENT}_FULFILLED`:
			return {
				...state,
				isPending: false,
				patiantId: action.payload.body,
				success: 'Saved Successfully'
			};

		default:
			return state;
	}
}
