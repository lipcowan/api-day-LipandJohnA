export default {getItems, createItem, updateItem, deleteItem};

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/lip';

function apiCall(errorReceiver, url, method = "GET", body) {
  errorReceiver.lastError = null;
  return fetch(url, { method, body, headers: body ? {'Content-Type': 'application/json'} : undefined})
    .then(res => {
      if(!res.ok)
        throw Error(`${res.status} ${res.statusText}`);
      return res.json();
    })
    .catch(err => { errorReceiver.lastError = err; throw err; });
}

function getItems(errorReceiver) {
  return apiCall(errorReceiver, `${BASE_URL}/items`);
}

function createItem(name, errorReceiver) {
  let newItem = {name};
  return apiCall(errorReceiver, `${BASE_URL}/items`, 'POST', JSON.stringify(newItem));
}

function updateItem(id, delta, errorReceiver) {
  return apiCall(errorReceiver, `${BASE_URL}/items/${id}`, 'PATCH', JSON.stringify(delta));
}

function deleteItem(id, errorReceiver) {
  return apiCall(errorReceiver, `${BASE_URL}/items/${id}`, 'DELETE');
}