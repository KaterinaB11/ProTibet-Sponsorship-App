<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Receiver;
use Illuminate\Http\Request;

class ReceiverController extends Controller
{
    public function index(Request $request)
{
    $receivers = Receiver::with('user', 'institution', 'institution.media', 'media')->get();

    if ($receivers->isEmpty()) {
        return response()->json(['message' => 'No receivers found.'], 404);
    }

    return response()->json(['receivers' => $receivers]);
}
}
