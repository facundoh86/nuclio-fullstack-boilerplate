<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;




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

/*

|--------------------------------------------------------------------------
| User Routes
|--------------------------------------------------------------------------
*/

Route::get('users', 'UserController@all');
Route::get('users/{id}', 'UserController@getById');
Route::get('users/email/{email}', 'UserController@getByEmail');
Route::get('users/username/{username}', 'UserController@getByUsername');
Route::post('users', 'UserController@create');
Route::put('users/{id}', 'UserController@update');
Route::delete('users/{id}', 'UserController@delete');

/*
|--------------------------------------------------------------------------
| Board Routes
|--------------------------------------------------------------------------
*/
Route::get('boards', 'BoardController@all');
Route::get('boards/{id}', 'BoardController@getById');
Route::get('boards/user/{userId}', 'BoardController@getByUser');
Route::post('boards', 'BoardController@create');
Route::delete('boards/{id}', 'BoardController@delete');
Route::put('boards/{id}', 'BoardController@update');

/*
|--------------------------------------------------------------------------
| Pin Routes
|--------------------------------------------------------------------------
*/
Route::get('pins', 'PinController@all');
Route::get('pins/{id}', 'PinController@getById');
Route::get('pins/board/{boardId}', 'PinController@GetByBoard');
Route::post('pins', 'PinController@create');
Route::delete('pins/{id}', 'PinController@delete');
Route::put('pins/{id}', 'PinController@update');


/*
|--------------------------------------------------------------------------
| Auth
|--------------------------------------------------------------------------
*/

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');


});
