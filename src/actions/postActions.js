import { FetchHeadlines, FetchArticlesSearch } from '../Api'

export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
}

export const requestHeadlines = () => ({
    type: 'REQUEST_HEADLINES'
})

export const requestArticlesSearch = () => ({
    type: 'REQUEST_ARTICLES_SEARCH'
})

export const receivedHeadlines = headlines => ({
    type: 'RECEIVED_HEADLINES',
    headlines
})

export const receivedArticlesSearch = articles => ({
    type: 'RECEIVED_ARTICLES_SEARCH',
    articles
})

export function fetchHeadlines(country_code) {
    return async function (dispatch) {
        dispatch(requestHeadlines());
        const response = await FetchHeadlines(country_code);
        const headlines = response;
        dispatch(receivedHeadlines(headlines));
    }
}

export function fetchArticlesSearch(search_tag) {
    return async function (dispatch) {
        dispatch(requestArticlesSearch());
        const response = await FetchArticlesSearch(search_tag);
        const articles = response;
        dispatch(receivedArticlesSearch(articles));
    }
}