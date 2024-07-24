<?php

namespace App\Http\Controllers;

use App\Models\Type;
use Illuminate\Http\Request;

class TypeController extends Controller
{
    public function index()
    {
        $activityTypes = Type::all();
        return response()->json($activityTypes);
    }
}