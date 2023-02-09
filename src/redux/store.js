import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';

export const store = configureStore({
  reducer: rootReducer,
});

// const reduser = (state = 0, action) => {
//     console.log(action)
//     // if (action.type === 'CHANGE_FILTER') {
//     //     return {filter: state.filter + action.payload}
//     // }
//     if (action.type === 'ADD_NEW_CONTACT') {
//         return { contacts: [action.payload, ...state.contacts] };
//     }
//     if (action.type === 'DELETE_CONTACT') {
//         return {
//           contacts: [state.contacts.filter(contact => contact.id !== action.payload)],
//         };
//     }

//    return state
// };
// const enhancer = devToolsEnhancer();
// export const store = createStore(
//   reduser,
//   {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   },
//   enhancer
// );
// console.log(store.getState())

// store.dispatch({type: 'TEST'})
