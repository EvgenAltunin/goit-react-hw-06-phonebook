import { combineReducers } from 'redux';
import { contactsInitState } from 'redux/init-state';

export const contactsListReducer = (state = contactsInitState.contacts, action) => {
  switch (action.type) {
    case 'tasks/addContact':
      return [...state, action.payload];
    case 'tasks/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

export const filterReducer = (state = contactsInitState.filter, action) => {
  switch (action.type) {
    case 'filter/setFilterValue':
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsListReducer,
  filter: filterReducer,
});
