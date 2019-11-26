import serology from 'api/serology/groupingLap';

//===========Constant================
export const GET_COLLECTION_SITE_GROUPLABING = 'GET_COLLECTION_SITE_GROUPLABING';
export const GET_ALL_SAMPLES = 'GET_ALL_SAMPLES';
export const ADD_ALL_GROUPINGSAMPLES = 'ADD_ALL_GROUPINGSAMPLES';
export const RESET_SEROLOGY_GROUPLAP_ERROR = "RESET_SEROLOGY_GROUPLAP_ERROR";
export const RESET_SEROLOGY_GROUPLAP_RESET = "RESET_SEROLOGY_GROUPLAP_RESET"
///===========Action==================

export function getCollectionsites() {
	return {
		type: GET_COLLECTION_SITE_GROUPLABING,
		payload: serology.getCollectionSites()
	};
}
export function getAllGroupingSamples(data) {
	return {
		type: GET_ALL_SAMPLES,
		payload: serology.getAllGroupingSamples(data)
	};
}
export function submitGroupingSamples(data) {
	return {
		type: ADD_ALL_GROUPINGSAMPLES,
		payload: serology.submitGroupingSamples(data)
	};
}
export function resetSerologyErrorGroupLabing(){
	return{
	type: RESET_SEROLOGY_GROUPLAP_ERROR
}
}
export function resetSerologyStoreGroupingLap(){
	return{
		type: RESET_SEROLOGY_GROUPLAP_RESET,
	}
}

// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
	collectionsites: [],
	samples: [],
	bagData: null,
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
		case RESET_SEROLOGY_GROUPLAP_ERROR:
			return{
				error: false,
				success: false

			}
	    case RESET_SEROLOGY_GROUPLAP_RESET:
			return{
				collectionsites: [],
				samples: [],
				bagData: null,
				isPending: false,
				error: false,
				success: false,
				time: 'All'
			}		
		case `${GET_COLLECTION_SITE_GROUPLABING}_PENDING`:
		case `${ADD_ALL_GROUPINGSAMPLES}_PENDING`:

		case `${GET_ALL_SAMPLES}_PENDING`:

		case `${GET_COLLECTION_SITE_GROUPLABING}_REJECTED`:
		case `${GET_ALL_SAMPLES}_REJECTED`:
		case `${ADD_ALL_GROUPINGSAMPLES}_REJECTED`:

		case `${GET_COLLECTION_SITE_GROUPLABING}_FULFILLED`:
			return {
				...state,
				isPending: false
				// collectionsites: action.payload.body
			};
		case `${GET_ALL_SAMPLES}_FULFILLED`:
			
			return {
				...state,
				isPending: false,
				bagData: action.payload.body
				// samples: action.payload.body
			};
		case `${ADD_ALL_GROUPINGSAMPLES}_FULFILLED`:
			return {
				...state,
				isPending: false,
				success: 'Saved Successfully'
				// samples: action.payload.body
			};

		default:
			return state;
	}
}
