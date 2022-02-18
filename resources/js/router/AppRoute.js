import React, {Component, Fragment} from 'react';
import { Routes, Route} from "react-router-dom";
import Home from "../components/Home";


class AppRoute extends Component {
    render() {
        return (
            <Fragment>

                <Routes>
                    <Route path="/home" element={<Home />} />

                </Routes>

            </Fragment>
        );
    }
}

export default AppRoute;
