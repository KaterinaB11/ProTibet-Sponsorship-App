<?php

namespace App\Http\Controllers;

use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MediaController extends Controller
{
    public function index(Request $request)
    {
        // Get the logged-in user's ID
        $userId = Auth::id();

        // Query receivers based on the user_id, if available
        $query = Media::with('user', 'receiver', 'institution');
        
        $media = $query->get();

        if ($media->isEmpty()) {
            return response()->json(['message' => 'No news found.'], 404);
        }

        return response()->json(['media' => $media]);
    }
}
