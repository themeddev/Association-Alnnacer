<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Paginate activities with 6 per page
        $activities = Activity::paginate(6);

        // Return paginated activities as JSON response
        return response()->json($activities);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $data = $request->only('name', 'description');

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('activities', 'public');
            $data['image'] = $path;
        }

        $activity = Activity::create($data);

        // Return the newly created activity as JSON response
        return response()->json($activity, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Activity $activity)
    {
        // Return the specified activity as JSON response
        return response()->json($activity);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Activity $activity)
    {
        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $data = $request->only('name', 'description');

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('activities', 'public');
            $data['image'] = $path;
        }

        $activity->update($data);

        // Return the updated activity as JSON response
        return response()->json($activity);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Activity $activity)
    {
        $activity->delete();

        // Return success response with no content
        return response()->json(null, 204);
    }

    public function getRecentActivities()
    {
        // Retrieve the first 3 recent activities ordered by creation date
        $activities = Activity::latest()->take(3)->get();

        // Return activities as JSON response
        return response()->json($activities);
    }
}
