import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountProfile from "../pages/AccountProfile";
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import MovieSearch from '../pages/MovieSearch'
import Sidebar from "../components/Sidebar";
import Header from '../components/Header'
import Login from "../pages/Login";

const RoutesApp = () => {
    return (
        <Router>
            <Fragment>
                <Header />
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="movie/:id" element={<MovieDetails />}/>
                    <Route path="search" element={<MovieSearch />}/>
                    <Route path="/profile" element={<AccountProfile />}/>
                    <Route path="/login" element={<Login />}/>
                </Routes>
            </Fragment>
        </Router>
    )
}

export default RoutesApp