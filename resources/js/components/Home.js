import React, {Component, Fragment} from 'react';
import InfoData from "./InfoData";

class Home extends Component {
    render() {
        return (
            <Fragment>
               <div className="container">
                   <div className="row d-flex justify-content-center">
                      <InfoData/>

                   </div>
               </div>
            </Fragment>
        );
    }
}

export default Home;
