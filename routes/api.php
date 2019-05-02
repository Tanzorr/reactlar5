<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('category','Api\Category2Controller@index');
Route::post('category/store','Api\Category2Controller@store');
Route::delete('category/delete/{id}','Api\Category2Controller@destroy');
Route::get('category/edit/{id}','Api\Category2Controller@edit');
Route::put('category/update/{id}','Api\Category2Controller@update');

