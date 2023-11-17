<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Institution;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InstitutionController extends Controller
{
    public function index (Request $request)
    {
    $institutions = Institution::with('media')->get();

    if ($institutions->isEmpty()) {
        return response()->json(['message' => 'No institutions found.'], 404);
    }

    return response()->json(['institutions' => $institutions]);

    }

    public function show($id)
{
    $institution = Institution::with('media')->find($id);

    if (!$institution) {
        return response()->json(['message' => 'Institution not found.'], 404);
    }

    return response()->json(['institution' => $institution]);
}

}
