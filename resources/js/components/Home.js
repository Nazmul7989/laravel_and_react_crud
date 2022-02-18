import React, {Component, Fragment} from 'react';
import AddInfo from "./AddInfo";
import InfoData from "./InfoData";

class Home extends Component {
    render() {
        return (
            <Fragment>
               <div className="container">
                   <div className="row">

                      <InfoData/>
                      <AddInfo/>

                   </div>
               </div>
            </Fragment>
        );
    }
}

export default Home;
