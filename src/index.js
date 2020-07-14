import $ from 'jquery';
import 'normalize.css';
import './index.css';
import shoppingList from './shopping-list';
import api from './api';
import store from './store';

const main = function () {
  api.getItems(store.errorReceiver)
    .then((items) => { items.forEach((item) => store.addItem(item)); })
    .finally(() => shoppingList.render());
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
