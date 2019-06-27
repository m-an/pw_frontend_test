// usually I move it to separate folder 'api' and create more than one file, but here api is too small for that

import axios from 'axios';

const apiKey = 'bbeb283444ae4e028eb900bb73757711'

export const FetchHeadlines = (country_code) => {
  return axios.get('https://newsapi.org/v2/top-headlines?country=' + country_code + '&apiKey=' + apiKey)
    .then(response => response.data.articles)
}

export const FetchArticlesSearch = (search_tag) => {
  return axios.get('https://newsapi.org/v2/everything?q=' + search_tag + '&apiKey=' + apiKey)
    .then(response => response.data.articles)
}