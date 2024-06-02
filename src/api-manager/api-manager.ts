import React, { Component } from "react";
import { UrlEndpoint } from "../constants/url-endpoint";
import { ApiKey } from "../constants/api-key";

class ApiManager extends Component {
    public static getGenres = () => {
        return new Promise((resolve, reject) => {
            fetch(`${UrlEndpoint.genreUrl}` + `?api_key=` + `${ApiKey.apikey}`)
            .then((res) => {
                resolve(res.json())
            })
            .catch((err) => {
                reject(err.json())
            })
        })
    }

    public static getMovies = (releaseYear?: string) => {
        return new Promise((resolve, reject)=> {
            fetch(`${UrlEndpoint.movieUrl}` + `?api_key=` + `${ApiKey.apikey}` + `&primary_release_year=` + `${releaseYear ? releaseYear : '2012'}`)
            .then((res)=> {
                resolve(res.json())
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }
}

export default ApiManager;