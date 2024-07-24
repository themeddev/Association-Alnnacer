<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Paginate activities with 6 per page and load their types
        $activities = Activity::with('activityType')->paginate(6);
    
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
            'location' => 'required|string|max:255',
            'date' => 'required|date', // Date validation
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'type_id' => 'required|exists:types,id', // Validate type_id
        ]);
    
        // Include type_id, date, and location in the data array
        $data = $request->only('name', 'description', 'type_id', 'location', 'date');
    
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('activities', 'public');
            $data['image'] = url('storage/' . $path); // Returns the full URL
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
    public function update(Request $request, $id)
    {
        // \Log::info("Request received" . $request);

        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'location' => 'sometimes|required|string|max:255',
            'date' => 'sometimes|required|date',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'type_id' => 'sometimes|required|exists:types,id',
        ]);

        $activity = Activity::findOrFail($id);

        $data = $request->only('name', 'description', 'location', 'type_id', 'date');

        // \Log::info("Data to be updated", ['data' => $data]);

        if ($request->hasFile('image')) {
            if ($activity->image) {
                Storage::disk('public')->delete($activity->image);
            }
            $path = $request->file('image')->store('activities', 'public');
            $data['image'] = url('storage/' . $path);
        }

        // \Log::info("Activity before update", ['activity' => $activity]);

        $activity->update($data);

        // \Log::info("Activity after update", ['activity' => $activity]);

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

    public function getActivitybyId($id) {
        // Find the activity with its related type and include the name
        $activity = Activity::with('activityType')->find($id);
    
        // Check if the activity exists
        if (!$activity) {
            return response()->json(['message' => 'Activity not found'], 404);
        }
    
        // Include the name of the related activity type
        $activityWithTypeName = [
            'id' => $activity->id,
            'name' => $activity->name,
            'description' => $activity->description,
            'location' => $activity->location,
            'date' => $activity->date,
            'image' => $activity->image,
            'type_id' => $activity->type_id,
            'activity_type_name' => $activity->activityType ? $activity->activityType->name : null,
        ];
    
        return response()->json($activityWithTypeName);
    }
}
