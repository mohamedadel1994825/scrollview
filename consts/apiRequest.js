import superagent from 'superagent'

/**
 * @description prepares request
 * @param method : method
 * @param link : url
 * @param data : body of the request
 * @param query : params of the request
 * @param auth : boolean
 */
export default (method, link, data = false, query = false, auth = false) => {
  const request = superagent(method, link)
  // sets headers
  request.set('Accept', 'application/json')
  request.set('Access-Control-Allow-Origin', '*')
  request.set('Content-Type', 'application/json')
  // add auth if logged in
  if (auth) {
/////// auth
  }
  // send data if attached
  if (data) {
    request.send(data)
  }

  // query parameters
  if (query) {
    request.query(query)
  }

  return request
}
