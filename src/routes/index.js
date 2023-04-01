import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountProfile from "../pages/AccountProfile";
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import MovieSearch from '../pages/MovieSearch'
import Header from '../components/Header'
import Login from "../pages/Login";
import FavoriteList from "../pages/FavoriteList";
import ViewedList from "../pages/ViewedList";
import Discover from "../pages/Discover";
import useAuth from "../hooks/useAuth";

const RoutesApp = () => {
    const { createToken } = useAuth()
    const { isLogged } = useAuth()

    useEffect(() => {
        !isLogged && createToken()
    })
    return (
        <Router>
            <Fragment>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/discover" element={<Discover />}/>
                    <Route path="/movie/:id" element={<MovieDetails />}/>
                    <Route path="/search" element={<MovieSearch />}/>
                    <Route path="/profile" element={<AccountProfile />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/favorites" element={<FavoriteList />} />
                    <Route path="/watchlist" element={<ViewedList />} />
                </Routes>
            </Fragment>
        </Router>
    )
}

export default RoutesApp