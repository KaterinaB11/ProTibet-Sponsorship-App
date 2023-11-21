<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Mail\OneTimePasswordEmail;

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

    public function search(Request $request)
    {
        try {
            $searchTerm = $request->input('search');

            $users = User::where('type', 'sponsor')
                         ->where(function ($query) use ($searchTerm) {
                             $query->where('first_name', 'like', "%$searchTerm%")
                                   ->orWhere('last_name', 'like', "%$searchTerm%");
                         })
                         ->get();

            return response()->json(['users' => $users]);
        } catch (\Exception $e) {
            Log::error('Error searching users: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }


    public function store(Request $request)
    {
     
        // Validate the request data
        $request->validate([
            'email' => 'required|email',
        ]);

        $oneTimePassword = random_int(1,120000000);

        $formData = new User([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'password' => Hash::make($oneTimePassword),
            'username' => $request->input('username'),
            'type' => $request->input('type')
        ]);

        $formData->save();
        $admins = User::where('type', 'admin')->get();
    
            Mail::to($admins) -> send(new OneTimePasswordEmail($formData, $oneTimePassword));
        

        return [
            'message' => 'New user was created and one-timepassword was sent successfully!'
        ];
    }
}
