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

        return  response()->json([
            'status'   => 200,
            'students' => $students
        ]);
    }


    //Store student info
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'age' => 'required',
            'class' => 'required',
        ]);

        if ($validator->fails()) {

            return response()->json([
                'validation_error' => $validator->errors()
            ]);

        }else{

            $student = new Student();

            $student->name  = $request->name;
            $student->age   = $request->age;
            $student->class = $request->class;
            $student->save();

            if ($student->save()) {
                return response()->json([
                    'status' => 200,
                    'message' => 'Student saved successfully'
                ]);
            }else{
                return response()->json([
                    'status' => 404,
                    'message' => 'Student save failed'
                ]);
            }
        }


    }

    //Fetch single student info
    public function show(Student $student,$id)
    {
        $student = Student::findOrFail($id);
        return response()->json([
            'status'  => 200,
            'student' => $student
        ]);
    }


    //Edit student info
    public function edit(Student $student,$id)
    {
        $student = Student::findOrFail($id);
        return response()->json([
            'status'  => 200,
            'student' => $student
        ]);
    }

    //Update student info
    public function update(Request $request, $id)
    {


        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'age' => 'required',
            'class' => 'required',
        ]);

        if ($validator->fails()) {

            return response()->json([
                'validation_error' => $validator->errors()
            ]);

        }else{

            $student = Student::findOrFail($id);

            $student->name  = $request->name;
            $student->age   = $request->age;
            $student->class = $request->class;
            $student->save();

            if ($student->save()) {
                return response()->json([
                    'status' => 200,
                    'message' => 'Student updated successfully'
                ]);
            }else{
                return response()->json([
                    'status' => 404,
                    'message' => 'Student update failed'
                ]);
            }
        }
    }

    //Delete student info
    public function destroy(Student $student,$id)
    {
        $student = Student::findOrFail($id);

        $student->delete();


        return response()->json([
            'status' => 200,
            'message' => 'Student deleted successfully'
        ]);


    }
}
