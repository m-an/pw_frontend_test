import React from 'react'
import { Link } from 'react-router-dom';
import NewsLogo from '../news.png'
// find why it doesn't work, should be smth simple
const articlesList = ({articles}) => {
  articles.length ? (
    articles.map(article => {
        return (
            <div className="post card" key={article.title}>
                <img src={NewsLogo} alt='news'></img>
                <div className="card-content">
                    <Link to={{pathname: '/' + article.title, article: article}}>
                        <span className="card-title pink-text">{article.title}</span>
                    </Link>
                    <p>{article.description}</p>
                </div>
            </div>
        )
    })
  ) : (
    <div className="center"> No news yet </div>
  )
}

export default articlesList