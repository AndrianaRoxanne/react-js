import React, { Component } from 'react'

import './NewsCard.css'

class NewsCard extends Component {

    render() {

        const { author, description, title , url  ,urlToImage , publishedAt } = this.props

        return (
            <div className="card horizontal" style={ { margin: 'auto' } }>
                <div className="card-image weather-img-container">
                    
                    <span className="card-title" style={ { fontSize: 36 } }>
                        { title } 
                    </span>
                </div>
                <div className="card-stacked">
                    <div className="card-content">

                        <div className="weather-data">
                            <p>
                                <i className="material-icons">info</i>
                                <span>{ author }</span>
                            </p>
                            <p>
                                <i className="material-icons">flag</i>
                                <span>{ description} </span>

                                 <p>
                                <i className="material-icons">flag</i>
                                <span>{ url} </span>
                                 <p>
                                <i className="material-icons">flag</i>
                                <span>{urlToImage} </span>
                            </p>
                            </p>
                            </p>
                        </div>

                        <img alt="icon" className="weather-icon" src={ publishedAt } />
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default NewsCard