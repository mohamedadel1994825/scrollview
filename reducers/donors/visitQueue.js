import donors from 'api/donors/visitQueue'

//===========Constant================
export const GET_VISIT_QUEUE = 'GET_VISIT_QUEUE';
export const RESETERROR_VISIT_QUEUE_DONOR = 'RESETERROR_VISIT_QUEUE_DONOR';
export const RESET_VISIT_QUEUE_STORE = 'RESET_VISIT_QUEUE_STORE';
///===========Action==================
export function getVisitQueue() {
  return{
    type: GET_VISIT_QUEUE,
    payload: donors.getVisitQueue()
  }

};
export function resetErrorVisitQueueDonor(){
  return{
    type: RESETERROR_VISIT_QUEUE_DONOR
  }
}
export function resetVisitQueueStore(){
  return{
    type: RESET_VISIT_QUEUE_STORE
  }
}
// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
    queueArr: [],
    isPending: false,
    error: false
};
// ------------------------------------
// Reducer
// ------------------------------------

export default function DonorSearchReducer (state = initialState, action) {
    switch (action.type) {
      case RESETERROR_VISIT_QUEUE_DONOR:
          return{
            ...state,
            error: false
          }
      case RESET_VISIT_QUEUE_STORE:
        return {
          queueArr: [],
          isPending: false,
          error: false
        }    
      case `${GET_VISIT_QUEUE}_PENDING`:
          
        return {
          ...state,
          isPending: true,
          error: false
        }
      case `${GET_VISIT_QUEUE}_REJECTED`:
          
        return {
          ...state,
          isPending: false,
          error: action.payload
        }
      case `${GET_VISIT_QUEUE}_FULFILLED`:
            
        return {
          ...state,
          isPending: false,
          queueArr: action.payload.body
        }
  
      default: return state
    }
  }
  