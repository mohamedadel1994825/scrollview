import processing from 'api/processing/reconciliation';

//===========Constant================
export const RESETERROR_RECONCILATION = 'RESETERROR_RECONCILATION';
export const ADD_SAMPLES_RECON = 'ADD_SAMPLES_RECON';
export const GET_COLLECTIONSITES = 'GET_COLLECTIONSITES';
export const GET_BARCODE_INFO = 'GET_BARCODE_INFO';
export const GET_RECON_HISTORY = 'GET_RECON_HISTORY';
export const GET_RECON_AUDIT = 'GET_RECON_AUDIT';
export const DELETE_RECOBARCODE = 'DELETE_RECOBARCODE';
export const EDIT_RECON_BARCODE = 'EDIT_RECON_BARCODE';
export const RECONCILATIONRESITSTOREPROCESSING ='RECONCILATIONRESITSTOREPROCESSING';
///===========Action==================
export function addSamples(data) {
	return {
		type: ADD_SAMPLES_RECON,
		payload: processing.addSamples(data)
	};
}
export function resetErrorProcessReconciliation() {
	return {
		type: RESETERROR_RECONCILATION
	};
}
export function getCollectionSites() {
	return {
		type: GET_COLLECTIONSITES,
		payload: processing.getCollectionSites()
	};
}
export function getBarcodeInfo(barcode) {
	return {
		type: GET_BARCODE_INFO,
		payload: processing.getBarcodeInfo(barcode)
	};
}
export function getAllReconciliations(data) {
	return {
		type: GET_RECON_HISTORY,
		payload: processing.getAllReconciliations(data)
	};
}
export function getAllReconciliationsAudit(data) {
	return {
		type: GET_RECON_AUDIT,
		payload: processing.getAllReconciliationsAudit(data)
	};
}
export function deleteReconBarcode(barcodeId) {
	return {
		type: DELETE_RECOBARCODE,
		payload: processing.deleteReconBarcode(barcodeId)
	};
}
export function editReconBarcode(barcodeId, data) {
	return {
		type: EDIT_RECON_BARCODE,
		payload: processing.editReconBarcode(barcodeId, data)
	};
}
export function resetStoreReconcilationProcessing(){
	return{
		type: RECONCILATIONRESITSTOREPROCESSING
	}
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
	collectionSites: [],
	reconAudit: [],
	reconHistory: [],
	barcodeInfo: null,
	isPending: false,
	error: false,
	success: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function ReconcilitionProcessReducer(state = initialState, action) {
	switch (action.type) {
		case RESETERROR_RECONCILATION:
			return {
				...state,
				error: false,
				success: false
			};
		case RECONCILATIONRESITSTOREPROCESSING:
			return{
				collectionSites: [],
				reconAudit: [],
				reconHistory: [],
				barcodeInfo: null,
				isPending: false,
				error: false,
				success: false
			}	
		case `${ADD_SAMPLES_RECON}_PENDING`:
		case `${GET_COLLECTIONSITES}_PENDING`:
		case `${GET_RECON_HISTORY}_PENDING`:
		case `${GET_RECON_AUDIT}_PENDING`:
		case `${DELETE_RECOBARCODE}_PENDING`:
		case `${EDIT_RECON_BARCODE}_PENDING`:
			return {
				...state,
				isPending: true,
				error: false
			};
		case `${ADD_SAMPLES_RECON}_REJECTED`:
		case `${GET_COLLECTIONSITES}_REJECTED`:
		case `${GET_BARCODE_INFO}_REJECTED`:
		case `${GET_RECON_HISTORY}_REJECTED`:
		case `${GET_RECON_AUDIT}_REJECTED`:
		case `${DELETE_RECOBARCODE}_REJECTED`:
		case `${EDIT_RECON_BARCODE}_REJECTED`:
			return {
				...state,
				isPending: false,
				error: action.payload
			};
		case `${ADD_SAMPLES_RECON}_FULFILLED`:
			return {
				...state,
				isPending: false,
				success: 'Saved Successfully'
			};
		case `${GET_COLLECTIONSITES}_FULFILLED`:
			return {
				...state,
				isPending: false,
				collectionSites: action.payload.body
			};
		case `${GET_BARCODE_INFO}_FULFILLED`:
			return {
				...state,
				isPending: false,
				barcodeInfo: action.payload.body
			};
		case `${GET_RECON_HISTORY}_FULFILLED`:
			return {
				...state,
				isPending: false,
				reconHistory: action.payload.body
			};
		case `${GET_RECON_AUDIT}_FULFILLED`:
			return {
				...state,
				isPending: false,
				reconAudit: action.payload.body
			};
		case `${DELETE_RECOBARCODE}_FULFILLED`:
			return {
				...state,
				isPending: false
			};
		case `${EDIT_RECON_BARCODE}_FULFILLED`:
			return {
				...state,
				isPending: false
			};
		default:
			return state;
	}
}
