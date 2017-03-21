/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const APP_TITLE='NEWS'
const Materialize = window.Materialize

//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS } from './utils/api'
//endpoint=uri

//components
import NewsCard from './components/NewsCard'

class App extends Component {

    /* React state initialization DOCUMENTATION : https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state */

    constructor( props ) {
        super( props )
        this.state = {
            news: undefined,
            url: ''
        }
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>{ APP_TITLE }</h1>
                    <img src={ logo } className="App-logo" alt="logo" />
                </div>

                <div className="App-content">
                    <div className="center-align">

                        <form onSubmit={ this.fetchNews }>

                            <div className="row" style={ { marginBottom: 0 } }>
                                <div className="input-field col s6 offset-s3">
                                    <input id="cityInput" type="text" value={ this.state.author } onChange={ this.handleChange } />
                                    <label htmlFor="cityInput">Author</label>
                                </div>
                            </div>

                            <button type="submit" className="waves-effect waves-light btn">
                                Click to see informations an article written by this author
                                (ex: John Koblin,  Jérôme Béglé ...)
                            </button>

                        </form>

                    </div>

                    <div className="row" style={ { marginTop: 20 } } >
                        <div className="col s12 m6 offset-m3">
                            { this.displayNewsInfo() }
                        </div>
                    </div>
                </div>

            </div>
        )
    }



    handleChange = ( event ) => {
        this.setState( {
            author: event.target.value
        } )
    }


    //method triggered by onSubmit event of the form or by onClick event of the "Weather?" button
    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchNews = async ( event ) =>
     {

        try {
            let news = await get( ENDPOINTS.ARTICLES_API_URL + this.state.author.replace( " ", "+" ), {
                q: this.state.author
            } )
        
          this.setState( {
                    news
                } )
            }
            //handling error
            catch(error) {
                console.log( ' Failed fetching data: ' , error)
                }

            

     }
        

    //handle display of the received weather object
    displayNewsInfo = () => {
        const news = this.state.author

       
        if ( news ) {
            return (
                <NewsCard data={ news } />
            )
        }

        return null
    }

    
}

export default App
