<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index (Request $request)
    {
    $users = User::with('receivers', 'receivers.media', 'media')->get();

    if ($users->isEmpty()) {
        return response()->json(['message' => 'No users found.'], 404);
    }

    return response()->json(['users' => $users]);

    }
}
