import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import Swal from "sweetalert2";


class InfoData extends Component {
    constructor() {
        super();
        this.state={
            students : []
        }
    }

    getData=()=>{
        axios.get('/api/student').then((response)=>{
            let infos = response.data;
            this.setState({students: infos})
        }).catch((error)=>{
            console.log(error);
        })
    }

    componentDidMount() {
        this.getData();
    }

    DeleteStudent=(e,id)=>{
        e.preventDefault();

        const currenTargetButton = e.currentTarget;


        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success me-3',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete('/api/student/delete/'+id).then((response)=>{

                    currenTargetButton.closest('tr').remove();

                }).catch((error)=>{
                    console.log(error);
                })

                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Student Info Deleted Successfully.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })

    }

    render() {
        const students = this.state.students;

        const studentData = students.map((student)=>{
            return <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.class }</td>
                <td>
                    <Link to={`/editInfo/${student.id}`}><button className="btn btn-success btn-sm ms">Edit</button></Link>
                    <button onClick={(e)=>this.DeleteStudent(e,student.id)} className="btn btn-danger btn-sm ms-2">Delete</button>
                </td>
            </tr>
        });

        return (

            <Fragment>
                <div className="col-8">
                    <div className="clearfix">
                        <h4 className="float-start">Students Information</h4>
                        <Link to="/addInfo">
                            <button className="float-end btn btn-sm btn-success">Add new</button>
                        </Link>
                    </div>

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Class</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {studentData}
                        </tbody>
                    </table>

                </div>
            </Fragment>
        );
    }
}

export default InfoData;
