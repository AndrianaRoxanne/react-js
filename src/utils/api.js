import * as request from 'request-promise'


/* FREE JSON API EXAMPLE */

/* WEATHER: https://www.apixu.com/api-explorer.aspx */

/* IMAGES: https://pixabay.com/api/docs/ */

export const ENDPOINTS = {

    ARTICLES_API_URL: 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=ce6cad62125a42a287f01756bf17b3c4' 
   

}

/* REQUEST (Promise) DOCUMENTATION */
/* https://github.com/request/request-promise */

export function get( url, queryParameters ) {

    //returns a Promise which can be used with the async - await syntax

    return request.get( {
        json: true,
        uri: url,
        qs: queryParameters
    })
}