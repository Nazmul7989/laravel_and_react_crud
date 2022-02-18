<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    //Fetch all data
    public function index()
    {
        $students = Student::all();

        return  response()->json($students,200);
    }


    //Store student info
    public function store(Request $request)
    {
        $student = new Student();

        $student->name  = $request->name;
        $student->age   = $request->age;
        $student->class = $request->class;
        $student->save();

        if ($student->save()) {
            return response()->json('message', 'Student saved successfully');
        }else{
            return response()->json('message', 'Student saved failed');
        }

    }


    //Edit student info
    public function edit(Student $student)
    {
        //
    }

    //Update student info
    public function update(Request $request, Student $student)
    {
        //
    }

    //Delete student info
    public function destroy(Student $student)
    {
        //
    }
}
