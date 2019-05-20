const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_PAGE_CONTENT': {
      return Object.assign({}, state, {
        pageContent: action.pageContent,
      });
    }
    case 'GET_DATES': {
      return Object.assign({}, state, {
        dates: action.dates,
      });
    }
    default:
      return state;
  }
};

export default reducer;
