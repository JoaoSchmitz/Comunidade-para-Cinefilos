import React, { createContext, useState } from "react";
import { APIKey } from "../config/key";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    
    const [userInfo, setUserInfo] = useState([])

    const [isLogged, setIsLogged] = useState(false)

    function createToken() {
        fetch(`
        https://api.themoviedb.org/3/authentication/token/new?api_key=${APIKey}`)
        .then(response => response.json())
        .then(data => {localStorage.setItem("session_token", data.request_token)})
        .catch(err => console.log(err))
    };

    function requestSession() {
        return (window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem("session_token")}?redirect_to=http://localhost:3000/Login`)
    }

    const createSession = () => {

        const bodyConfig = {
            request_token: localStorage.getItem("session_token")
        }

        const init = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bodyConfig)
        }
        fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${APIKey}`, init)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("api", data.session_id);
        })
        .catch(err => console.log(err))

        setIsLogged(true)
        getUserInfo()
    };

    function getUserInfo() {
        fetch(`https://api.themoviedb.org/3/account?api_key=${APIKey}&session_id=${localStorage.getItem("api_id")}`)
            .then(response => response.json())
            .then(data => {setUserInfo(data)})
    }

    function logOut() {
        const bodyConfig = {
            session_id: localStorage.getItem("api")
        }

        const init = {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bodyConfig)
        }

        fetch(`https://api.themoviedb.org/3/authentication/session?api_key=${APIKey}`, init)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

        setIsLogged(!isLogged)
    }

    return <AuthContext.Provider value={{ userInfo, isLogged, createToken, requestSession, createSession, logOut }}>{children}</AuthContext.Provider>
}