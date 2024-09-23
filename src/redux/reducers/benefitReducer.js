const initialState = {
    benefits: [],
    searchTerm: '',
  };
  
  const benefitReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_BENEFITS':
        return {
          ...state,
          benefits: action.payload,
        };
      case 'SEARCH_BENEFIT':
        return {
          ...state,
          searchTerm: action.payload,
        };
      default:
        return state;
    }
  };
  
export default benefitReducer;
  