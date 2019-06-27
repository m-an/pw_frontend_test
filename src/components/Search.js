import React, { Component } from 'react'
import M from 'materialize-css'
import { connect } from 'react-redux'
import { fetchArticlesSearch } from '../actions/postActions';

class Search extends Component {
    componentDidMount(){
        M.AutoInit()
        // remove from here after adding a proper tags entering method, place it to the handleSubmit of that method
        this.props.fetchArticlesSearch('bitcoin')
    }

// find a proper way to add tags, my hint is: https://materializecss.com/chips.html
    render() {
        console.log(this.props.articles)
        return(
            <div className="container">
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

const mapDispatchToProps = {
    fetchArticlesSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)