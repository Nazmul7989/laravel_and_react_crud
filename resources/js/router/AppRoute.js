import React, {Component, Fragment} from 'react';
import { Switch, Route} from "react-router-dom";
import Home from "../components/Home";
import AddInfo from "../components/AddInfo";
import EditInfo from "../components/EditInfo";


class AppRoute extends Component {
    render() {
        return (
            <Fragment>

                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/addInfo" component={AddInfo} />
                    <Route exact path="/editInfo/:id" component={EditInfo} />
                </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;
