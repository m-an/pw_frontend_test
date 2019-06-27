import React, { Component } from 'react'
import M from 'materialize-css'

class Article extends Component {
    componentDidMount(){
        M.AutoInit()
    }

    render() {
        return(
            <div className='container'>
              <div className='post'>
                <h4 className='center'>{this.props.location.article.title}</h4>
                <p>{ this.props.location.article.content } <a href={this.props.location.article.url} target="_blank" rel="noopener noreferrer">learn more...</a></p>
                <img className="responsive-img materialboxed" src={ this.props.location.article.urlToImage } alt='article cover'/>
              </div>
            </div>
        )
    }
}

export default Article