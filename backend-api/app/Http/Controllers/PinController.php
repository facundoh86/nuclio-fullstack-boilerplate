<?php

namespace App\Http\Controllers;

use App\Board;
use App\Pin;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Response;
use Validator;

class PinController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Show a list of all of the application's pins.
     *
     * @return JsonResponse
     */
    public function all()
    {
        Log::info('Retrieving all pins');
        return response()->json(Pin::all());
    }

    /**
     * Create a new pin instance.
     *
     * @param  Request  $request
     * @return JsonResponse
     */
    public function create(Request $request)
    {
        $pinValidator = Validator::make($request->all(), [
            'note' => ['required', 'string', 'max:255'],
            'media_url' => ['required', 'url'],
            'board_id' => ['required', 'integer'],
        ]);

        if($pinValidator->fails()) {
            $errors = $pinValidator->errors()->getMessages();
            $code = Response::HTTP_NOT_ACCEPTABLE; // 406
            return response()->json(['error' => $errors, 'code' => $code], $code);
        }


        $pin = Pin::create([
            'note' => $request->note,
            'color' => $request->color,
            'media_url' => $request->media_url,
            'board_id' => $request->board_id,

        ]);

        $pin->save();
        return response()->json("Created", 201);
    }

    /**
     * Return a given pin by id.
     *
     * @param $id
     * @return JsonResponse
     */
    public function getById($id)
    {
        Log::info('Retrieving pin with id: '.$id);
        return response()->json(Pin::findOrFail($id));
    }

    /**
     * Return a collection of pins given a board id.
     *
     * @param $boardId
     * @return JsonResponse
     */
    public function GetByBoard($boardId)
    {
        Log::info('Retrieving pins with board id: '.$boardId);
        $pins = Pin::where('board_id', $boardId)->get();
        return response()->json($pins);
    }

    public function findByI($id){
        $pin = pin:: where ('id', $id)->first();
        return response()->json($pin);
    }
    public function delete ($id){
        $pin = pin:: where ('id', $id)->first();
        $pin->delete();
        return response()->json( 'Pin Deleted');
    }

    public function update (Request $request, $id){
        $pin = pin:: where ('id', $id)->first();
        $Pinup = $request -> all();
        $pin->update($Pinup);
        return response()->json($pin);
    }
}
