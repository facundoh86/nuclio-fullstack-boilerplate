<?php

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

Route::get('users', 'UserController@findAll');
Route::post('users', 'UserController@create');
Route::get('users/{id}', 'UserController@getById');
Route::get('users/email/{email}', 'UserController@getByEmail');
Route::get('users/username/{username}', 'UserController@getByUsername');

/*
|--------------------------------------------------------------------------
| Board Routes
|--------------------------------------------------------------------------
*/
Route::get('boards', 'BoardController@all');
Route::get('boards/{id}', 'BoardController@getById');
Route::get('boards/user/{userId}', 'BoardController@getByUser');
Route::post('boards', 'BoardController@create');

/*
|--------------------------------------------------------------------------
| Pin Routes
|--------------------------------------------------------------------------
*/
Route::get('pins', 'PinController@findAll');
Route::get('pins/{id}', 'PinController@getById');
Route::get('pins/board/{boardId}', 'PinController@GetByBoard');
Route::post('pins', 'PinController@create');
Route::put('pins/{id}', 'PinController@getById');
Route::delete('pins/{id}', 'PinController@getById');

/*
|--------------------------------------------------------------------------
| Generic Routes
|--------------------------------------------------------------------------
*/

Route::get('search/{query}', 'PinController@search');


/*
|--------------------------------------------------------------------------
| Auth Routes
|--------------------------------------------------------------------------
*/

Route::post('auth/login', 'AuthController@login');

/*
|--------------------------------------------------------------------------
| Search Routes
|--------------------------------------------------------------------------
*/

Route::get('search/{query}', 'SearchController@search');

