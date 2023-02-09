

export const addContact = (newContact) => {
  return {
    type: 'tasks/addContact',
    payload: newContact,
  };
};

export const deleteContact = (id) => {
  return {
    type: 'tasks/deleteContact',
    payload: id,
  };
};

export const setFilterValue = (value) => {
  return {
    type: 'filter/setFilterValue',
    payload: value,
  };
};
