import serology from 'api/serology/natLap';
import { func } from 'prop-types';

//===========Constant================
export const GET_ALL_NATSAMPLES = 'GET_ALL_NATSAMPLES';

export const ADD_ALL_NATSAMPLES = 'ADD_ALL_NATSAMPLES';

export const RESET_ERROR_NATLAB = 'RESET_ERROR_NATLAB';

export const RESET_STORE_NATLAP = 'RESET_STORE_NATLAP';
///===========Action==================

export function addNatSamples(data) {
	return {
		type: ADD_ALL_NATSAMPLES,
		payload: serology.addNatSamples(data)
	};
}
export function getAllNatSamples(data) {
	
	return {
		type: GET_ALL_NATSAMPLES,
		payload: serology.getAllNatSamples(data)
	};
}
export function resetNatlabSerology () {
	return{
		type: RESET_ERROR_NATLAB

	}  
}
export function resetNatlapSerologyStore(){
	return{
		type : RESET_STORE_NATLAP
	}
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
	collectionsites: [],
	samples: null,
	// bagData: null,
	// rowItem: [],

	isPending: false,
	error: false,
	time: 'All',
	success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function reconcilationReducer(state = initialState, action) {
	switch (action.type) {
		case RESET_ERROR_NATLAB:
			return{
				error: false,
				success: false
			}
		case RESET_STORE_NATLAP:
			return{
				collectionsites: [],
				samples: null,
				isPending: false,
				error: false,
				time: 'All',
				success: false
			}	
		case `${ADD_ALL_NATSAMPLES}_PENDING`:

		case `${GET_ALL_NATSAMPLES}_PENDING`:
			return {
				...state,
				isPending: true,
				error: false
			};
		// case `${GET_COLLECTION_SITE_GROUPLABING}_REJECTED`:
		case `${GET_ALL_NATSAMPLES}_REJECTED`:
		case `${ADD_ALL_NATSAMPLES}_REJECTED`:
			return {
				...state,
				isPending: false,
				error: action.payload
			};
		case `${GET_ALL_NATSAMPLES}_FULFILLED`:
			
			return {
				...state,
				isPending: false,
				samples: action.payload.body
			};
		case `${ADD_ALL_NATSAMPLES}_FULFILLED`:
			return {
				...state,
				isPending: false,
				success: 'Saved Successfully'
			};

		default:
			return state;
	}
}
