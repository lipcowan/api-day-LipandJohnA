export default {getItems, createItem, updateItem, deleteItem};

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/lip';

function getItems() {
    return fetch(`${BASE_URL}/items`);
}

function createItem(name) {
    let newItem = {name};
    
    return fetch(`${BASE_URL}/items`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newItem)  //alternatively you could put ..stringify({name})
    })
}

function updateItem(id, delta) {

    return fetch(`${BASE_URL}/items/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(delta)
    })

}

function deleteItem(id) {
    return fetch(`${BASE_URL}/items/${id}`, {method:'DELETE'});
}