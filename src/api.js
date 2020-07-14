export default {getItems, createItem};

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/lip';

function getItems() {
    return fetch(`${BASE_URL}/items`);
}

function createItem(name) {
    let newItem = {name};
    
    return fetch(`${BASE_URL}/items`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newItem)
    }
    )
}