import React, { Component } from 'react'
import { connect } from 'react-redux'
import M from 'materialize-css'
import { fetchHeadlines } from '../actions/postActions';
import articlesList from './ArticlesList';

class Home extends Component {
    state = {
        country_code: 'US'
    }

    componentDidMount(){
        M.AutoInit()
        this.props.fetchHeadlines('US')
    }

    handleChange = (event) => {
        this.setState({
            country_code: event.target.value
        }, () =>{

            this.props.fetchHeadlines(this.state.country_code)
        })
    }

    render() {
        const { headlines } = this.props
        return(
            <div className="container home">
                <h4 className="center">Headlines</h4>
                <div className="row">
                    <div className="input-field col s2">
                      <select onChange={this.handleChange} value={this.state.value}>
                        <option defaultValue value="us">USA</option>
                        <option value="fr">France</option>
                        <option value="de">Germany</option>
                      </select>
                    </div>
                </div>
                <articlesList articles={headlines}></articlesList>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        headlines: state.headlines
    }
}

const mapDispatchToProps = {
    fetchHeadlines
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)