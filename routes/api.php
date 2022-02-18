<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;




Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/student',[StudentController::class,'index']);
Route::post('/student/store',[StudentController::class,'store']);
Route::get('/student/{id}',[StudentController::class,'show']);
Route::get('/student/edit/{id}',[StudentController::class,'edit']);
Route::put('/student/update/{id}',[StudentController::class,'update']);
Route::delete('/student/delete/{id}',[StudentController::class,'destroy']);
