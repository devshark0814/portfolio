<?php

use Illuminate\Http\Request;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/rakuten/IchibaItem/Ranking',[App\Http\Apis\RakutenApi::class, 'callIchibaItemRanking']);
Route::post('/rakuten/IchibaGenre/Genre',[App\Http\Apis\RakutenApi::class, 'callIchibaGenre']);