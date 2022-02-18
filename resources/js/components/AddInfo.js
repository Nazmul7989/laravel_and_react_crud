import React, {Component, Fragment} from 'react';

class AddInfo extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-4">
                    <div className="card px-4 py-4">
                        <form action="" method="post">
                            <div className="row">
                                <h4>Add New Student</h4>
                                <div className="col-12">
                                    <div className="form-group mb-3">
                                        <input type="text" name="name" id="name" className="form-control" placeholder="You Name"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group mb-3">
                                        <input type="text" name="age" id="age" className="form-control" placeholder="You Age"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group mb-3">
                                        <input type="text" name="class" id="class" className="form-control" placeholder="You Class"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="submit" id="class" value="Save" className="btn btn-success btn-sm"/>
                                    </div>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AddInfo;
