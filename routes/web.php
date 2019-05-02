<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/{path}',function (){
    return view('welcome');
})->where('path',".*");

//Route::get('category','Api\Category2Controller@index');
//Route::post('category/store','Api\Category2Controller@store');
//Route::delete('category/delete/{id}','Api\Category2Controller@destroy');
//Route::get('category/edit/{id}','Api\Category2Controller@edit');
Route::put('category/update/{id}','Api\Category2Controller@update');
