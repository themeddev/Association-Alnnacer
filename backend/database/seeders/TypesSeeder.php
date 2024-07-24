<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Type;

class TypesSeeder extends Seeder
{
    public function run()
    {
        $activityTypes = [
            ['name' => 'تطوعي'],
            ['name' => 'توعوي'],
            ['name' => 'تعليمي'],
            ['name' => 'بيئي'],
            ['name' => 'تارفيهي'],
        ];

        Type::insert($activityTypes);
    }
}