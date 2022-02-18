import React, {Component, Fragment} from 'react';

class InfoData extends Component {
    constructor() {
        super();
        this.state={
            students : []
        }
    }

    componentDidMount() {
        axios.get('/api/student').then((response)=>{
            let infos = response.data;
            this.setState({students: infos})
        }).catch((error)=>{
            console.log(error);
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
                    <button className="btn btn-success btn-sm ms">Edit</button>
                    <button className="btn btn-danger btn-sm ms-2">Delete</button>
                </td>
            </tr>
        });

        return (

            <Fragment>
                <div className="col-8">
                    <h4 className="text-center">Students Information</h4>

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
