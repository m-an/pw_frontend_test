const initState = {
    articles: [],
    headlines: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case ('FETCH_HEADLINES'):
          return {
            ...state,
          }
        case ('RECEIVED_HEADLINES'):
          return {
            ...state,
            headlines: action.headlines
          }
        case ('RECEIVED_ARTICLES_SEARCH'):
          return {
            ...state,
            articles: action.articles
          }
        default:
          return state
    }
}

export default rootReducer