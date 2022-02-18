import React, {Component, Fragment} from 'react';
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

class EditInfo extends Component {
    constructor({match}) {
        super();
        this.state={
            name: '',
            age: '',
            class: '',
            id: match.params.id
        }
    }

    componentDidMount() {

        axios.get('/api/student/edit/' + this.state.id).then((response)=>{
            let  info = response.data;
            this.setState({
                name: info.name,
                age: info.age,
                class: info.class,
            })
        }).catch((error)=>{
            console.log(error);
        })
    }

    onChangeHandler = (e)=>{
        let inputName = e.target.name;
        let inputValue = e.target.value;

        this.setState({[inputName]: inputValue})
    }

    submitHandler=(e)=>{
        e.preventDefault();

        axios.put('/api/student/update/' + this.state.id,this.state).then((response)=>{

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Student Updated Successfully'
            })

            this.props.history.push('/home');

        }).catch((error)=>{
            console.log(error);
        })

    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-6">
                            <div className="card px-4 py-4">
                                <div className="clearfix">
                                    <h4 className="float-start">Edit Student</h4>
                                    <Link to="/home">
                                        <button className="float-end btn btn-sm btn-success">Back to Home</button>
                                    </Link>
                                </div>
                                <hr/>
                                <form onSubmit={this.submitHandler} method="post">
                                    <div className="row">

                                        <div className="col-12">
                                            <div className="form-group mb-3">
                                                <input type="text" name="name" onChange={this.onChangeHandler} value={this.state.name} id="name" className="form-control" placeholder="You Name"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group mb-3">
                                                <input type="text" name="age" id="age" onChange={this.onChangeHandler}  value={this.state.age} className="form-control" placeholder="You Age"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group mb-3">
                                                <input type="text" name="class" id="class" onChange={this.onChangeHandler} value={this.state.class} className="form-control" placeholder="You Class"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="submit" value="Update"  className="btn btn-success btn-sm"/>
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

export default EditInfo;
