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
        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'age' => 'required',
            'class' => 'required',
        ]);

        if ($validator->fails()) {

            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()
            ]);

        }else{

            $student = new Student();

            $student->name  = $request->name;
            $student->age   = $request->age;
            $student->class = $request->class;
            $student->save();

            if ($student->save()) {
                return response()->json([
                    'success' => true,
                    'message' => 'Student saved successfully'
                ]);
            }else{
                return response()->json([
                    'success' => false,
                    'message' => 'Student save failed'
                ]);
            }
        }


    }

    //Fetch single student info
    public function show(Student $student,$id)
    {
        $student = Student::findOrFail($id);
        return response()->json($student,200);
    }


    //Edit student info
    public function edit(Student $student,$id)
    {
        $student = Student::findOrFail($id);
        return response()->json($student,200);
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
                'success' => false,
                'message' => $validator->getMessageBag()
            ]);

        }else{

            $student = Student::findOrFail($id);

            $student->name  = $request->name;
            $student->age   = $request->age;
            $student->class = $request->class;
            $student->save();

            if ($student->save()) {
                return response()->json([
                    'success' => true,
                    'message' => 'Student updated successfully'
                ]);
            }else{
                return response()->json([
                    'success' => false,
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
            'success' => true,
            'message' => 'Student deleted successfully'
        ]);


    }
}
