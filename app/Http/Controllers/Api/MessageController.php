<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function store(Request $request)
{
    try {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        // Check if the user is authenticated
        $userId = auth()->check() ? auth()->user()->id : null;

        // Create a new message
        $message = new Message([
            'user_id' => $userId,
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'message' => $request->input('message'),
        ]);

        $message->save();

        return response()->json(['message' => 'Message saved successfully'], 201);
    } catch (QueryException $e) {
        // Log the error for further investigation
        logger('QueryException: ' . $e->getMessage());
        logger('Query: ' . $e->getSql());
        logger('Bindings: ' . json_encode($e->getBindings()));

        return response()->json(['error' => 'Error saving message'], 500);
    } catch (\Exception $e) {
        // Log other exceptions for further investigation
        logger('Unexpected error: ' . $e->getMessage());

        return response()->json(['error' => 'Unexpected error'], 500);
    }
}

}
