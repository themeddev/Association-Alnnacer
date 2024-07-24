<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->id(); // This creates a bigint primary key
            $table->string('name');
            $table->text('description')->nullable();
            $table->text('image')->nullable();
            $table->date('date')->nullable();
            $table->string('location')->nullable();
            $table->foreignId('type_id') // Ensure it refers to the correct table
                ->constrained('types') // Specify the table name
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activities');
    }
};