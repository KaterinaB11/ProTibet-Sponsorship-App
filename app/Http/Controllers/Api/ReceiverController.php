<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Receiver;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReceiverController extends Controller
{
    public function index(Request $request)
    {
        // Get the logged-in user's ID
        $userId = Auth::id();

        // Query receivers based on the user_id, if available
        $query = Receiver::with('user', 'institution', 'institution.media', 'media');
        
        if ($userId) {
            $query->where('user_id', $userId);
        }

        $receivers = $query->get();

        if ($receivers->isEmpty()) {
            return response()->json(['message' => 'No receivers found.'], 404);
        }

        return response()->json(['receivers' => $receivers]);
    }
    public function show($id)
    {
        
        $userId = Auth::id();

        // Query a single receiver based on the user_id and receiver_id
        $receiver = Receiver::with('user', 'institution', 'institution.media', 'media')
            ->where('id', $id)
            ->when($userId, function ($query) use ($userId) {
                $query->where('user_id', $userId);
            })
            ->first();

        if (!$receiver) {
            return response()->json(['message' => 'Receiver not found.'], 404);
        }

        return response()->json(['receiver' => $receiver]);
    }

}
