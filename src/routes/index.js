import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home'

const RoutesApp = () => {
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </Fragment>
        </Router>
    )
}

export default RoutesApp