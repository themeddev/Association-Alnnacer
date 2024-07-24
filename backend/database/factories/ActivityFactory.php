<?php

namespace Database\Factories;

use App\Models\Activity;
use App\Models\Type; // Import the Type model
use Illuminate\Database\Eloquent\Factories\Factory;

class ActivityFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Activity::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $desc = "تعد اللغة العربية أقدم اللغات الحية على وجه الأرض، ..."; // Truncated for brevity
        $img1 = 'http://127.0.0.1:8000/storage/activities/dX1IO2k9zHfsXLvBytn9TVtgCvJqhcfdwmUj2T8w.jpg';

        return [
            'name' => $this->faker->randomElement([
                'نشاط تنظيف البيئة',
                'ورشة تعليمية للأطفال',
                'ندوة توعوية',
                'حملة زراعة الأشجار',
                'سباق الماراثون الخيري'
            ]),
            'description' => $desc,
            'image' => $this->faker->randomElement([
                $img1,
                $img1,
                $img1
            ]), 
            'date' => $this->faker->dateTimeBetween('-1 year', '+1 year'),
            'location' => $this->faker->randomElement([
                'إمي نكرزي',
                'جماعة ثلاث نيعقوب',
                'إقليم الحوز',
                'مراكش'
            ]),
            'type_id' => Type::inRandomOrder()->first()->id,
        ];
    }
}