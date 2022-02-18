import React, {Component, Fragment} from 'react';

class Home extends Component {
    render() {
        return (
            <Fragment>
               <div className="container">
                   <div className="row">
                       <div className="col-8">
                           <h4 className="text-center">Students Information</h4>

                           <table className="table table-bordered">
                               <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Class</th>
                                        <th>Action</th>
                                    </tr>
                               </thead>
                               <tbody>
                                    <tr>
                                        <td>Md Nazmul Hasan</td>
                                        <td>25</td>
                                        <td>MBA</td>
                                        <td>
                                            <button className="btn btn-success btn-sm ms">Edit</button>
                                            <button className="btn btn-danger btn-sm ms-2">Delete</button>
                                        </td>
                                    </tr>
                               </tbody>
                           </table>

                       </div>
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
                   </div>
               </div>
            </Fragment>
        );
    }
}

export default Home;
