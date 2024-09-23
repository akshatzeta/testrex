export const addCustomer = (customer) => ({
    type: 'ADD_CUSTOMER',
    payload: customer,
  });
  
  export const removeCustomer = (id) => ({
    type: 'REMOVE_CUSTOMER',
    payload: id,
  });
  