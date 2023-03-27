import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import MovieSearch from '../pages/MovieSearch'

const RoutesApp = () => {
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="movie/:id" element={<MovieDetails />}/>
                    <Route path="search" element={<MovieSearch />}/>
                </Routes>
            </Fragment>
        </Router>
    )
}

export default RoutesApp